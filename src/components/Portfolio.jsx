import { useState } from 'react';
// import projects from '../projects'

function Portfolio({projects}) {
    return (
        <div className="project-container">
            <h2>Projects</h2>
            {/* .map will loop through each project and create a project div for each project. */}
            {projects.map((project) => (
                <div className="projects" key={`${project.title}`}>
                    <div className="project-items">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                    <div className="project-img">
                        <a href={`${project.websiteLink}`}>
                            <img src={`assets/img/screenshots/${project.name}.png`} alt={`Link to deployed website for ${project.title}`} />
                        </a>

                    </div>
                    <div className="project-repo">
                        <a href={`https://github.com/Milkytea6/${project.name}`}>
                            <div className='repo-link'>
                                <h3>{project.title} Repository Link</h3>
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Portfolio;