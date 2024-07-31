import { useState } from 'react';

function Project({ projects }) {
    return (
        <div className="project-container">
            <h2>Projects</h2>
            {/* .map will loop through each project and create a project div for each project. */}
            {projects.map((project) => (
                <div className="projects" key={`${project.title}`}>
                    <a href={`${project.websiteLink}`}>
                        <div className="project-items">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <img src={`src/assets/img/screenshots/${project.name}.png`} alt={`${project.title}`} />
                        </div>
                    </a>

                    <a href={`https://github.com/Milkytea6/${project.name}`}>
                        <div className="repo-items">
                            <h3>{project.title} Repository Link</h3>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Project;