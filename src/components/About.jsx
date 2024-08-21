import { useState } from 'react';

function About() {
    return (
        <div className='container'>
            <div className="about-container">
                <h2>About Me</h2>
                <p>I am a bootcamp student learning to code for my first time.
                    I have created and contributed to many projects over the last couple months that have tought me
                    a lot about the industry.
                    I want to learn how to develop websites, software, and/or games on my coding journey.
                    I am excited to see where coding can take my career and how I will evolve learning
                    these new skills.</p>
                <a href="https://github.com/Milkytea6">
                    <img src="assets/img/photo-chris-2.jpg"></img>
                </a>
            </div>
        </div>
    )
}
export default About;