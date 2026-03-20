const hardwareGrid = document.getElementById('hardwareGrid');

function renderHardwareProjects() {
    // Safety check to prevent the 'innerHTML' of null error
    if (!hardwareGrid) return;

    // Filter logic: includes Hardware and hybrid projects
    const hardwareProjects = projectCards.filter(p => 
        p.category === "Hardware" || p.category === "Both"
    );

    const projectHTML = hardwareProjects.map(project => `
        <article class="hardware-card">
            <div class="card-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="card-info">
                <time datetime="${project.date}">
                    ${project.date === "#" ? "In Progress" : project.date}
                </time>
                <div class="description-box">
                    <h3>${project.title}</h3>
                    <p>${project.subcategory}</p>
                </div>
                <a href="${project.link}" class="view-project-btn">View Project</a>
            </div>
        </article>
    `).join('');

    hardwareGrid.innerHTML = projectHTML;
}

// Initialize the render
renderHardwareProjects();