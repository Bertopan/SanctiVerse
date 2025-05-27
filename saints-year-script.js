document.addEventListener('DOMContentLoaded', function() {

    const saintsGridSection = document.querySelector('.year-content-section.active');
    const saintDetailView = document.getElementById('saint-detail-view');
    const backButton = document.querySelector('.back-button');

    // Only proceed if these elements exist (i.e., we are on a saint year page)
    if (saintsGridSection && saintDetailView) {
        const detailImage = document.getElementById('detail-saint-image');
        const detailNameDate = document.getElementById('detail-saint-name-date');
        const detailHistory = document.getElementById('detail-saint-history');
        let currentSaintsData = {}; // This will store the loaded data for the current year

        // Function to extract the year from the URL (e.g., saints-2000.html -> 2000)
        function getCurrentYear() {
            const pathSegments = window.location.pathname.split('/');
            const filename = pathSegments[pathSegments.length - 1]; // e.g., "saints-2000.html"
            const yearMatch = filename.match(/saints-(\d{4})\.html/);
            return yearMatch ? yearMatch[1] : null; // Returns "2000" or null
        }

        // Function to fetch saint data for the current year
        async function loadSaintsData(year) {
            if (!year) {
                console.error("Could not determine the year from the URL.");
                return;
            }
            const dataUrl = `assets/data/saints-${year}.json`;
            try {
                const response = await fetch(dataUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status} for ${dataUrl}`);
                }
                currentSaintsData = await response.json();
                console.log(`Loaded data for year ${year}:`, currentSaintsData);
                renderSaintGrid(); // Render the grid after data is loaded
                showSaintFromHashOnLoad(); // Check hash after grid is rendered
            } catch (error) {
                console.error("Error loading saint data:", error);
                // Display a user-friendly message if data fails to load
                saintsGridSection.innerHTML = '<p class="error-message">Failed to load saint data for this year. Please try again later.</p>';
            }
        }

        // Function to dynamically render the saint grid
        function renderSaintGrid() {
            const saintsGrid = saintsGridSection.querySelector('.saints-grid');
            if (!saintsGrid) {
                console.error("Saints grid container not found!");
                return;
            }
            saintsGrid.innerHTML = ''; // Clear existing content (like old placeholders)

            // Iterate over the loaded saintsData and create cards
            for (const slug in currentSaintsData) {
                if (currentSaintsData.hasOwnProperty(slug)) {
                    const saint = currentSaintsData[slug];

                    const cardLink = document.createElement('a');
                    cardLink.href = `#`; // Still prevent default, handle with JS
                    cardLink.classList.add('saint-card');
                    cardLink.setAttribute('data-slug', slug);

                    const img = document.createElement('img');
                    img.src = saint.image_url;
                    img.alt = saint.name;
                    img.loading = 'lazy'; // Add lazy loading for images

                    const pName = document.createElement('p');
                    pName.classList.add('saint-name');
                    pName.textContent = saint.name;

                    cardLink.appendChild(img);
                    cardLink.appendChild(pName);
                    saintsGrid.appendChild(cardLink);
                }
            }
            addCardClickListeners(); // Re-attach listeners after rendering
        }

        // Function to add click listeners to newly rendered saint cards
        function addCardClickListeners() {
            const saintCards = saintsGridSection.querySelectorAll('.saint-card');
            saintCards.forEach(card => {
                card.removeEventListener('click', handleSaintCardClick); // Prevent duplicate listeners
                card.addEventListener('click', handleSaintCardClick);
            });
        }

        // Event handler for saint card clicks
        function handleSaintCardClick(event) {
            event.preventDefault(); // Prevent default link behavior (no page reload)

            const slug = this.getAttribute('data-slug');
            const saint = currentSaintsData[slug]; // Get data from the 'currentSaintsData' object

            if (saint) {
                // Populate the detail view with saint's data
                detailImage.src = saint.image_url;
                detailImage.alt = saint.name;
                detailNameDate.innerHTML = `${saint.name}<br><small>(${saint.canonization_date})</small>`;

                // Clear previous history and add new paragraphs
                detailHistory.innerHTML = '';
                saint.history.split('\n').forEach(paragraphText => {
                    if (paragraphText.trim() !== '') {
                        const p = document.createElement('p');
                        p.textContent = paragraphText.trim();
                        detailHistory.appendChild(p);
                    }
                });

                // Hide the grid and show the detail view
                saintsGridSection.classList.remove('active');
                saintDetailView.classList.add('active');

                // Optionally, scroll to the top of the detail view
                saintDetailView.scrollIntoView({ behavior: 'smooth' });

                // Update URL hash for direct linking/back button
                if (history.replaceState) {
                    history.replaceState(null, '', window.location.pathname + window.location.search + '#' + slug);
                } else {
                    window.location.hash = slug;
                }

            } else {
                console.error('Saint data not found for slug:', slug);
                // Optionally display an error message or fallback content
            }
        }

        // Handle back button click
        if (backButton) {
            backButton.addEventListener('click', function() {
                // Hide the detail view and show the grid
                saintDetailView.classList.remove('active');
                saintsGridSection.classList.add('active');

                // Scroll back to the top of the grid
                saintsGridSection.scrollIntoView({ behavior: 'smooth' });

                // Remove hash from URL
                if (history.replaceState) {
                    history.replaceState(null, '', window.location.pathname + window.location.search);
                } else {
                    window.location.hash = '';
                }
            });
        }

        // Handle direct URL with hash on page load (e.g., saints-2000.html#maria-faustina-kowalska)
        function showSaintFromHashOnLoad() {
            const hash = window.location.hash.substring(1); // Get hash without '#'
            if (hash) {
                // Ensure currentSaintsData is populated before trying to find the saint
                if (Object.keys(currentSaintsData).length > 0) {
                    const saint = currentSaintsData[hash];
                    if (saint) {
                        // Populate the detail view
                        detailImage.src = saint.image_url;
                        detailImage.alt = saint.name;
                        detailNameDate.innerHTML = `${saint.name}<br><small>(${saint.canonization_date})</small>`;

                        detailHistory.innerHTML = '';
                        saint.history.split('\n').forEach(paragraphText => {
                            if (paragraphText.trim() !== '') {
                                const p = document.createElement('p');
                                p.textContent = paragraphText.trim();
                                detailHistory.appendChild(p);
                            }
                        });

                        // Hide grid and show detail view
                        saintsGridSection.classList.remove('active');
                        saintDetailView.classList.add('active');

                        // Scroll to the top of the detail view instantly on load
                        saintDetailView.scrollIntoView({ behavior: 'instant' });
                    } else {
                        console.warn(`Saint with slug '${hash}' not found in current year's data. Displaying grid.`);
                        // If hash doesn't match a saint, default to showing the grid
                        saintDetailView.classList.remove('active');
                        saintsGridSection.classList.add('active');
                    }
                } else {
                    // Data not yet loaded, try again after data is loaded (handled by loadSaintsData -> renderSaintGrid -> showSaintFromHashOnLoad)
                    console.log("Data not yet loaded, will retry showSaintFromHashOnLoad after data fetch.");
                }
            } else {
                // No hash, ensure grid is active
                saintDetailView.classList.remove('active');
                saintsGridSection.classList.add('active');
            }
        }

        // Initial setup for the year page: Load data, then render grid and check hash
        const year = getCurrentYear();
        if (year) {
            loadSaintsData(year);
        } else {
            console.error("Could not determine year for saint data loading. Ensure HTML filename is saints-YYYY.html");
            saintsGridSection.innerHTML = '<p class="error-message">This page could not load correctly. Please return to the <a href="index.html">Home Page</a>.</p>';
        }

        // Re-evaluate on hash change (e.g., if user uses browser's back/forward buttons on detail view)
        window.addEventListener('hashchange', showSaintFromHashOnLoad);
    }
});