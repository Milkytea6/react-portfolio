
const resumeLink = 'assets/pdf/resume-sep-2024.pdf';

function Resume() {
    return (
        <div className="resume-container">
            <h2>Resume</h2>
            <iframe src={resumeLink} width="100%" height="600px" />
            <h2 className="bootcamp-title">Rutgers Coding Bootcamp Credential</h2>
            <a href="https://docs.credentials.rutgers.edu/a1b866a3-f115-40af-96c1-26e41be8ad6d">
                <img className="bootcamp-img" src="assets/img/screenshots/rutgers-coding-bootcamp.png"></img>
            </a>
        </div>
    )
}
export default Resume;