const softwareGrid = document.getElementById('softwareGrid');

function renderSoftwareProjects() {
    // Filter for Software specific projects
    const softwareProjects = projectCards.filter(p => 
        p.category === "Software" || p.category === "Both"
    );

    const projectHTML = softwareProjects.map(project => `
        <article class="software-card">
            <div class="card-image-pages">
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

    softwareGrid.innerHTML = projectHTML;
}

renderSoftwareProjects();