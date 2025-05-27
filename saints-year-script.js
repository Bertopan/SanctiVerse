document.addEventListener('DOMContentLoaded', function() {
    const saintsGrid = document.querySelector('.saints-grid');
    const saintDetailView = document.getElementById('saint-detail-view');
    const detailViewBackButton = saintDetailView.querySelector('.back-button'); // Renamed for clarity
    const currentYearSection = document.querySelector('.year-content-section.active'); // Assuming only one active year section

    // Extract the year from the current HTML file name (e.g., saints-2000.html -> 2000)
    const yearMatch = window.location.pathname.match(/saints-(\d{4})\.html/);
    const year = yearMatch ? yearMatch[1] : null; // Get the year, e.g., "2000"

    if (!year) {
        saintsGrid.innerHTML = `
            <div class="error-message-container">
                <p class="error-message">Error: Could not determine the year for saint data. Please check the URL.</p>
            </div>
        `;
        return;
    }

    const jsonFilePath = `assets/data/saints-${year}.json`;

    // Function to create a saint card
    function createSaintCard(saintId, saint) {
        const card = document.createElement('div');
        card.classList.add('saint-card');
        card.dataset.saintId = saintId; // Store the saint ID for detail view

        const image = document.createElement('img');
        image.src = saint.image_url;
        image.alt = saint.name;
        image.classList.add('saint-image');

        const name = document.createElement('h3');
        name.classList.add('saint-name');
        name.textContent = saint.name;

        const date = document.createElement('p');
        date.classList.add('canonization-date');
        date.textContent = `Canonized: ${saint.canonization_date}`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(date);

        card.addEventListener('click', () => showSaintDetail(saint)); // Pass the full saint object
        return card;
    }

    // Function to display saint details
    function showSaintDetail(saint) {
        document.getElementById('detail-saint-image').src = saint.image_url;
        document.getElementById('detail-saint-image').alt = saint.name;
        // Use innerHTML for the name/date div if you want to keep the inner elements as HTML,
        // or create p/h3 elements dynamically. For consistency, I'll keep your structure.
        document.getElementById('detail-saint-name-date').innerHTML = `<h3>${saint.name}</h3><p>${saint.canonization_date}</p>`;

        const historyDiv = document.getElementById('detail-saint-history');
        historyDiv.innerHTML = ''; // Clear previous history
        const historyParagraphs = saint.history.split('\n\n'); // Split history into paragraphs
        historyParagraphs.forEach(paragraphText => {
            if (paragraphText.trim() !== '') {
                const p = document.createElement('p');
                p.textContent = paragraphText.trim();
                historyDiv.appendChild(p);
            }
        });

        // Add source URL if available
        const sourceDiv = document.getElementById('detail-saint-source'); // Get the source div
        if (saint.source_url) {
            sourceDiv.innerHTML = ''; // Clear previous content
            const sourceLink = document.createElement('a');
            sourceLink.href = saint.source_url;
            sourceLink.textContent = 'Read More (Source)';
            sourceLink.target = '_blank'; // Open in new tab
            sourceLink.rel = 'noopener noreferrer'; // Security best practice
            sourceDiv.appendChild(sourceLink);
            sourceDiv.style.display = 'block'; // Ensure the div is visible
        } else {
            sourceDiv.style.display = 'none'; // Hide the div if no source
        }

        currentYearSection.classList.remove('active');
        saintDetailView.classList.add('active');
    }

    // Back button functionality for Saint Detail View
    detailViewBackButton.addEventListener('click', () => { // Using the renamed variable
        saintDetailView.classList.remove('active');
        currentYearSection.classList.add('active');
    });

    // Fetch saint data
    fetch(jsonFilePath)
        .then(response => {
            if (!response.ok) {
                // If file not found (404), treat it as no data for the year,
                // so the empty object message will be displayed.
                if (response.status === 404) {
                    return {}; // Return an empty object to trigger the "no saints" message
                }
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            saintsGrid.innerHTML = ''; // Clear any previous loading/error messages

            if (Object.keys(data).length === 0) {
                saintsGrid.innerHTML = `
                    <div class="no-saints-message-container">
                        <p class="no-saints-message">
                            No new saints were formally canonized by the Pope in ${year}.
                            Please select another year from the main page.
                        </p>
                    </div>
                `;
            } else {
                for (const saintId in data) {
                    if (data.hasOwnProperty(saintId)) {
                        const saint = data[saintId];
                        const card = createSaintCard(saintId, saint);
                        saintsGrid.appendChild(card);
                    }
                }
            }
        })
        .catch(error => {
            console.error('Error loading saint data:', error);
            saintsGrid.innerHTML = `
                <div class="error-message-container">
                    <p class="error-message">Failed to load saint data for this year.</p>
                    <p class="error-message-detail">Reason: ${error.message}</p>
                </div>
            `;
        });
});