document.addEventListener('DOMContentLoaded', function() {
    // Existing logic for main navigation (Home, About Us, Contact)
    const navLinks = document.querySelectorAll('.main-nav .nav-link');
    const contentSections = document.querySelectorAll('.main-content-area .content-section');

    function showContentSection(targetId) {
        contentSections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    function updateMainNavActiveLink(targetId) {
        navLinks.forEach(link => {
            // Check if the link's data-target matches the active content section ID
            if (link.getAttribute('data-target') === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Handle clicks on main navigation links (Home, About Us, Contact)
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Only prevent default for internal index.html links
            if (this.hasAttribute('data-target')) {
                event.preventDefault();
                const targetId = this.getAttribute('data-target');
                showContentSection(targetId);
                updateMainNavActiveLink(targetId);
                // Update URL hash for direct linking/bookmarking of sections
                if (history.replaceState) {
                    history.replaceState(null, '', window.location.pathname + window.location.search + '#' + targetId);
                } else {
                    window.location.hash = targetId;
                }
            }
        });
    });

    // Handle initial page load or direct link with hash for index.html
    // This runs only if the current page is index.html
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        function handleIndexHashChange() {
            const hash = window.location.hash.substring(1);
            if (hash && document.getElementById(hash) && document.getElementById(hash).classList.contains('content-section')) {
                showContentSection(hash);
                updateMainNavActiveLink(hash);
            } else {
                // Default to home-content if no hash or invalid hash
                showContentSection('home-content');
                updateMainNavActiveLink('home-content');
            }
        }
        handleIndexHashChange();
        window.addEventListener('hashchange', handleIndexHashChange);
    }

    // ---
    // Logic for Next/Back navigation buttons on saints-YYYY.html pages
    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');

    // Only proceed if the navigation buttons exist on the current page
    if (backButton && nextButton) {
        // Get the current year from the filename (e.g., saints-2013.html -> 2013)
        const path = window.location.pathname;
        const filename = path.substring(path.lastIndexOf('/') + 1); // e.g., saints-2013.html
        const match = filename.match(/saints-(\d{4})\.html/);

        let currentYear = null;
        if (match && match[1]) {
            currentYear = parseInt(match[1]);
        }

        if (currentYear) {
            const firstYear = 2000; // Navigation will now go back to 2000
            const lastYear = 2025;  // Your current last year

            // Set up Back button
            const prevYear = currentYear - 1;
            if (prevYear >= firstYear) {
                backButton.onclick = () => {
                    window.location.href = `saints-${prevYear}.html`;
                };
            } else {
                backButton.disabled = true; // Disable if it's the first year (2000)
            }

            // Set up Next button
            const nextYear = currentYear + 1;
            if (nextYear <= lastYear) {
                nextButton.onclick = () => {
                    window.location.href = `saints-${nextYear}.html`;
                };
            } else {
                nextButton.disabled = true; // Disable if it's the last year (2025)
            }
        } else {
            // If the year can't be parsed from the URL, disable buttons
            backButton.disabled = true;
            nextButton.disabled = true;
        }
    }
});