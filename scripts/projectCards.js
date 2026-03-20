const projectCards = [
    {
        title: "RC Car",
        category: "Both",
        subcategory: "Embedded Systems",
        image: "#",
        link: "#",
        date: "2025-12-11"
    },

    {
        title: "DC Power Supply",
        category: "Hardware",
        subcategory: "Chip Design",
        image: "#",
        link: "#",
        date: "#"
    },

    {
        title: "CocoLab",
        category: "Software",
        subcategory: "Website and Service Design",
        image: "#",
        link: "#",
        date: "2026-03-20"
    },

    {
        title: "Speaker System PCBs",
        category: "Hardware",
        subcategory: "PCB Design",
        image: "#",
        link: "#",
        date: "#"
    },

    {
        title: "Personal Portfolio",
        category: "Software",
        subcategory: "Web Design",
        image: "#",
        link: "#",
        date: "#"
    },

    {
        title: "Portal and Projects",
        category: "Software",
        subcategory: "Web Design",
        image: "#",
        link: "#",
        date: "#"
    },

    {
        title: "CommanderCon",
        category: "Software",
        subcategory: "Back-End Web Development",
        image: "#",
        link: "#",
        date: "#"
    }
]

const projectGrid = document.querySelector('.project-grid');

function displayRecentProjects() {
    // error handler
    if (!projectGrid) {
        return;
    }
    // Sort method where # placeholder is set as 0 and converting string into int in miliseconds from 1970
    const recentOnes = projectCards
        .sort((a, b) => {
            const dateA = a.date === "#" ? new Date(0) : new Date(a.date);
            const dateB = b.date === "#" ? new Date(0) : new Date(b.date);
            return dateB - dateA;
        })
        .slice(0, 3);

    // Creates the innerHTML
    const projectHTML = recentOnes.map(project => `
        <article class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <div class="card-content">
                <h3>${project.title}</h3>
                <p class="subcategory">${project.subcategory}</p>
                <time datetime="${project.date}">
                    ${project.date === "#" ? "Coming Soon" : project.date}
                </time>
                <a href="${project.link}">View Project</a>
            </div>
        </article>
    `).join('');

    // Injects the html
    projectGrid.innerHTML = projectHTML;
}

displayRecentProjects();