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
});