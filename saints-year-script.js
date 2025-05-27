document.addEventListener('DOMContentLoaded', function() {
    const saintsGrid = document.querySelector('.saints-grid');
    const saintDetailView = document.getElementById('saint-detail-view');
    const backButton = saintDetailView.querySelector('.back-button');
    const currentYearSection = document.querySelector('.year-content-section.active'); // Assuming only one active year section

    // Extract the year from the current HTML file name (e.g., saints-2000.html -> 2000)
    const yearMatch = window.location.pathname.match(/saints-(\d{4})\.html/);
    const year = yearMatch ? yearMatch[1] : null; // Get the year, e.g., "2000"

    if (!year) {
        saintsGrid.innerHTML = '<p>Error: Could not determine the year for saint data.</p>';
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
        document.getElementById('detail-saint-name-date').textContent = `${saint.name} (Canonized: ${saint.canonization_date})`;

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

    // Back button functionality
    backButton.addEventListener('click', () => {
        saintDetailView.classList.remove('active');
        currentYearSection.classList.add('active');
    });

    // Fetch saint data
    fetch(jsonFilePath)
        .then(response => {
            if (!response.ok) {
                // Check for 404 or other HTTP errors
                if (response.status === 404) {
                     throw new Error(`Saint data for ${year} not found at ${jsonFilePath}.`);
                }
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (Object.keys(data).length === 0) {
                saintsGrid.innerHTML = '<p>No saint data available for this year yet.</p>';
                return;
            }
            for (const saintId in data) {
                if (data.hasOwnProperty(saintId)) {
                    const saint = data[saintId];
                    const card = createSaintCard(saintId, saint);
                    saintsGrid.appendChild(card);
                }
            }
        })
        .catch(error => {
            console.error('Error loading saint data:', error);
            saintsGrid.innerHTML = `<p>Failed to load saint data for this year: ${error.message}</p>`;
        });
});