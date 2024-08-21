
const resumeLink = 'assets/pdf/resume-2024.pdf';

function Resume() {
    return (
        <div className="resume-container">
            <h2>Resume</h2>
            <iframe src={resumeLink} width="100%" height="600px" />
        </div>
    )
}
export default Resume;