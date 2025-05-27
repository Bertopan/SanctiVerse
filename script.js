document.addEventListener('DOMContentLoaded', function() {
    // --- SAINTS DATA (THIS IS YOUR CORE DATABASE FOR SAINTS) ---
    // You'll need to populate this array with all your saint data.
    // I've included the saints canonized in 2000, sorted by date, with placeholder images
    // for those without readily available direct URLs.
    // For your 5 AM deadline, focus on filling out 'name', 'image_url' (even if placeholder),
    // 'slug', and 'year_canonized'.
    const saintsData = [
        // --- Canonized on April 30, 2000 ---
        {
            name: "Saint Maria Faustina Kowalska",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/d/de/Maria_Faustyna_Kowalska.jpg",
            slug: "maria-faustina-kowalska",
            year_canonized: 2000,
            canonization_date: "April 30"
        },

        // --- Canonized on May 21, 2000: Martyrs of Mexico (25 individuals) ---
        // These are martyrs of the Cristero War. Individual images for all 25 are scarce.
        // I've provided one common image, and placeholders for the rest.
        {
            name: "Saint Cristóbal Magallanes Jara",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/San_Cristobal_Magallanes.jpg/220px-San_Cristobal_Magallanes.jpg",
            slug: "cristobal-magallanes-jara",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Román Adame Rosales",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=R.Adame", // Placeholder
            slug: "roman-adame-rosales",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Rodrigo Aguilar Alemán",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=R.Aguilar", // Placeholder
            slug: "rodrigo-aguilar-aleman",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Julio Álvarez Mendoza",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=J.Alvarez", // Placeholder
            slug: "julio-alvarez-mendoza",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Luis Batis Sáinz",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=L.Batis", // Placeholder
            slug: "luis-batis-sainz",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Agustín Caloca Cortés",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=A.Caloca", // Placeholder
            slug: "agustin-caloca-cortes",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Mateo Correa Magallanes",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.Correa", // Placeholder
            slug: "mateo-correa-magallanes",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Atilano Cruz Alvarado",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=A.Cruz", // Placeholder
            slug: "atilano-cruz-alvarado",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Miguel de la Mora",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.de+la+Mora", // Placeholder
            slug: "miguel-de-la-mora",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Pedro Esqueda Ramírez",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=P.Esqueda", // Placeholder
            slug: "pedro-esqueda-ramirez",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Margarito Flores García",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.Flores", // Placeholder
            slug: "margarito-flores-garcia",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint José Isabel Flores Varela",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=J.I.Flores", // Placeholder
            slug: "jose-isabel-flores-varela",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint David Galván Bermúdez",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=D.Galvan", // Placeholder
            slug: "david-galvan-bermudez",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Salvador Lara Puente",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=S.Lara", // Placeholder
            slug: "salvador-lara-puente",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Pedro de Jesús Maldonado Lucero",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=P.Maldonado", // Placeholder
            slug: "pedro-de-jesus-maldonado-lucero",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Jesús Méndez Montoya",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=J.Mendez", // Placeholder
            slug: "jesus-mendez-montoya",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Manuel Morales",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.Morales", // Placeholder
            slug: "manuel-morales",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Justino Orona Madrigal",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=J.Orona", // Placeholder
            slug: "justino-orona-madrigal",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Sabás Reyes Salazar",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=S.Reyes", // Placeholder
            slug: "sabas-reyes-salazar",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint José María Robles Hurtado",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=J.M.Robles", // Placeholder
            slug: "jose-maria-robles-hurtado",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint David Roldán Lara",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=D.Roldan", // Placeholder
            slug: "david-roldan-lara",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Toribio Romo González",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Toribio_Romo_Gonzalez.jpg/220px-Toribio_Romo_Gonzalez.jpg",
            slug: "toribio-romo-gonzalez",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Jenaro Sánchez Delgadillo",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=J.Sanchez", // Placeholder
            slug: "jenaro-sanchez-delgadillo",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint Tranquilino Ubiarco Robles",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=T.Ubiarco", // Placeholder
            slug: "tranquilino-ubiarco-robles",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint David Uribe Velasco",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=D.Uribe", // Placeholder
            slug: "david-uribe-velasco",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        // Other individuals canonized May 21, 2000
        {
            name: "Saint José María de Yermo y Parres",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=J.Yermo", // Placeholder
            slug: "jose-maria-de-yermo-y-parres",
            year_canonized: 2000,
            canonization_date: "May 21"
        },
        {
            name: "Saint María de Jesús Sacramentado Venegas de la Torre",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.Venegas", // Placeholder
            slug: "maria-de-jesus-sacramentado-venegas-de-la-torre",
            year_canonized: 2000,
            canonization_date: "May 21"
        },

        // --- Canonized on October 1, 2000: Martyrs of China (120 individuals) ---
        // This is a large group. I've included the group entry with a group image,
        // and then individual placeholders for the *remaining* saints you need to hit ~207.
        // For your project, if you don't have individual images for all 120,
        // you might simplify this by having one "Martyrs of China" entry,
        // or just a few key names from the group, and then use placeholders for the rest.
        // To reach 207, you'll need to add approx. 179 more entries beyond the May 21st group + Faustina.
        // I will provide generic placeholders for the remaining number to get you to ~207 total if you use this list.
        {
            name: "The 120 Martyrs of China (Group)",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Martyrs_of_China_group.jpg/330px-Martyrs_of_China_group.jpg",
            slug: "martyrs-of-china-group",
            year_canonized: 2000,
            canonization_date: "October 01",
            is_group: true,
            description: "A group of 120 martyrs, including Chinese laypeople, priests, and religious of various European orders, who died between 1648 and 1930."
        },
        // IMPORTANT: For the remaining 119 Martyrs of China (if you're trying to list them individually),
        // and other unlisted saints to reach 207, you MUST manually add them here.
        // I'll provide 10 generic placeholders as an example of how you'd continue filling it out.
        // You'll need to replicate this for the remaining 109 Chinese Martyrs + any others.
        { name: "Martyr of China 1", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.1", slug: "martyr-china-1", year_canonized: 2000, canonization_date: "October 01" },
        { name: "Martyr of China 2", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.2", slug: "martyr-china-2", year_canonized: 2000, canonization_date: "October 01" },
        { name: "Martyr of China 3", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.3", slug: "martyr-china-3", year_canonized: 2000, canonization_date: "October 01" },
        { name: "Martyr of China 4", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.4", slug: "martyr-china-4", year_canonized: 2000, canonization_date: "October 01" },
        { name: "Martyr of China 5", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.5", slug: "martyr-china-5", year_canonized: 2000, canonization_date: "October 01" },
        { name: "Martyr of China 6", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.6", slug: "martyr-china-6", year_canonized: 2000, canonization_date: "October 01" },
        { name: "Martyr of China 7", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.7", slug: "martyr-china-7", year_canonized: 2000, canonization_date: "October 01" },
        { name: "Martyr of China 8", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.8", slug: "martyr-china-8", year_canonized: 2000, canonization_date: "October 01" },
        { name: "Martyr of China 9", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.9", slug: "martyr-china-9", year_canonized: 2000, canonization_date: "October 01" },
        { name: "Martyr of China 10", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.10", slug: "martyr-china-10", year_canonized: 2000, canonization_date: "October 01" },
        // ... YOU MUST ADD THE REMAINING 109 MARTYRS OF CHINA HERE MANUALLY ...
        // And then any other saints canonized in 2000 that were not part of these groups.

        // Other individuals canonized October 1, 2000
        {
            name: "Saint Katharine Drexel",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/2/25/St_Katharine_Drexel_color.jpg",
            slug: "katharine-drexel",
            year_canonized: 2000,
            canonization_date: "October 01"
        },
        {
            name: "Saint Josephine Bakhita",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/St._Josephine_Bakhita_%281%29.jpg/800px-St._Josephine_Bakhita_%281%29.jpg",
            slug: "josephine-bakhita",
            year_canonized: 2000,
            canonization_date: "October 01"
        },
        {
            name: "Saint María Josefa del Corazón de Jesús Sancho de Guerra",
            image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.J.Sancho", // Placeholder
            slug: "maria-josefa-sancho-de-guerra",
            year_canonized: 2000,
            canonization_date: "October 01"
        },

        // --- Add any other saints canonized in 2000 that you find, sorted by date. ---
        // The most commonly cited large canonizations in 2000 are the ones above.
        // If you are trying to reach exactly 207, you'll need to find more names/groups.
    ];

    // Select all main navigation links and content sections
    const navLinks = document.querySelectorAll('.main-nav .nav-link');
    const yearLinks = document.querySelectorAll('.year-nav .year-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Function to show a specific content section
    function showSection(sectionId) {
        // Hide all content sections by removing 'active' class and setting display to 'none'
        contentSections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });

        // Show the target section by adding 'active' class and setting display to 'block'
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.style.display = 'block';

            // If it's a saints section, dynamically render the grid from data
            if (targetSection.id.startsWith('saints-')) {
                const saintsGrid = targetSection.querySelector('.saints-grid');
                if (saintsGrid) {
                    const year = parseInt(sectionId.replace('saints-', '').replace('-content', ''));
                    // Filter saints for the current year, and sort them by canonization_date if present
                    let saintsForThisYear = saintsData.filter(saint => saint.year_canonized === year);

                    // Sort saints by canonization_date (if available) to maintain order
                    saintsForThisYear.sort((a, b) => {
                        const dateA = new Date(`2000 ${a.canonization_date}`); // Use 2000 as year for sorting
                        const dateB = new Date(`2000 ${b.canonization_date}`);
                        return dateA - dateB;
                    });

                    renderSaintsGrid(saintsGrid, saintsForThisYear); // CALL NEW RENDERING FUNCTION
                }
            }

            // Scroll to the top of the displayed section for better UX
            window.scrollTo({
                top: targetSection.offsetTop - (document.querySelector('.main-header').offsetHeight + document.querySelector('.year-navigation-wrapper').offsetHeight), // Adjust for sticky header/year nav
                behavior: 'smooth'
            });
        }
    }

    // Function to manage active classes on navigation links
    function setActiveLink(clickedLink) {
        // Remove 'active' from all main navigation links
        navLinks.forEach(link => link.classList.remove('active'));
        // Remove 'active-year' from all year navigation links
        yearLinks.forEach(link => link.classList.remove('active-year'));

        // Add the appropriate active class to the clicked link
        if (clickedLink.classList.contains('nav-link')) {
            clickedLink.classList.add('active');
        } else if (clickedLink.classList.contains('year-link')) {
            clickedLink.classList.add('active-year');
        }
    }

    // --- NEW FUNCTION: RENDER Saints Grid into 5-4-5 pattern from data ---
    // This function now generates the HTML for each saint from the provided saintsArray
    function renderSaintsGrid(gridContainer, saintsArray) {
        gridContainer.innerHTML = ''; // Clear the existing content

        let rowIndex = 0;
        let cardIndex = 0;

        while (cardIndex < saintsArray.length) {
            const rowWrapper = document.createElement('div');
            rowWrapper.classList.add('saints-row');

            const numCardsInRow = (rowIndex % 2 === 0) ? 5 : 4; // 5 cards for even rows, 4 for odd

            if (numCardsInRow === 5) {
                rowWrapper.classList.add('saints-row-5');
            } else {
                rowWrapper.classList.add('saints-row-4');
            }

            for (let i = 0; i < numCardsInRow && cardIndex < saintsArray.length; i++) {
                const saint = saintsArray[cardIndex];

                // Create the <a> element (saint-card)
                const saintCardLink = document.createElement('a');
                saintCardLink.href = `saint-detail.html?saint=${saint.slug}`; // Use the slug for the detail page
                saintCardLink.classList.add('saint-card');

                // Create the <img> element
                const img = document.createElement('img');
                img.src = saint.image_url;
                img.alt = saint.name;
                img.loading = 'lazy'; // Add lazy loading for performance with many images

                // Create the <p> element for the name
                const pName = document.createElement('p');
                pName.classList.add('saint-name');
                pName.textContent = saint.name;

                // Append image and name to the link
                saintCardLink.appendChild(img);
                saintCardLink.appendChild(pName);

                // Append the link to the row wrapper
                rowWrapper.appendChild(saintCardLink);
                cardIndex++;
            }
            gridContainer.appendChild(rowWrapper);
            rowIndex++;
        }
    }

    // Handle clicks on main navigation links (Home, About, Contact)
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            setActiveLink(this); // Set active class for the clicked main nav link

            const targetId = this.getAttribute('data-target');
            showSection(targetId);

            // Update URL hash without reloading the page
            history.pushState(null, '', `#${targetId}`);
        });
    });

    // Handle clicks on year navigation links (Saints of 2000, 2001, etc.)
    yearLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            setActiveLink(this); // Set active class for the clicked year link

            const year = this.getAttribute('data-year');
            const targetId = `saints-${year}-content`; // Construct the ID for the content section
            showSection(targetId);

            // Update URL hash without reloading the page
            history.pushState(null, '', `#${targetId}`);
        });
    });

    // --- Initial Page Load and URL Hash Handling ---
    const initialHash = window.location.hash.substring(1); // Get hash from URL (e.g., "saints-2000-content")

    if (initialHash && document.getElementById(initialHash)) {
        // If a valid hash is present in the URL on load, show that section
        showSection(initialHash);

        // Find and set the active class on the corresponding navigation link
        const correspondingLink = document.querySelector(
            `.main-nav .nav-link[data-target="${initialHash}"], ` + // For Home, About, Contact
            `.year-nav .year-link[data-year="${initialHash.replace('saints-', '').replace('-content', '')}"]` // For year links
        );

        if (correspondingLink) {
            setActiveLink(correspondingLink);
        } else {
            // Fallback if corresponding link not found, e.g., if hash is directly typed for a non-linked section
            document.querySelector('.main-nav .nav-link[data-target="home-content"]').classList.add('active');
            showSection('home-content');
            history.replaceState(null, '', '#home-content'); // Clean up URL if invalid hash
        }
    } else {
        // If no hash or an invalid hash, default to showing the 'home-content' section
        showSection('home-content');
        document.querySelector('.main-nav .nav-link[data-target="home-content"]').classList.add('active');
        history.replaceState(null, '', '#home-content'); // Set default hash in URL
    }
});