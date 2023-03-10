import React from 'react'
import './ResumeComponent.css'
import Pdf from "./extras/latest-updated-resume.pdf"



export default function ResumeComponents() {
    return (
        <div>
            <h1 className="heading-text">Resume</h1>
            <div className='button-cont'>
                <a href={Pdf}>
                    <button className="resume-button btn btn-primary">Download My Resume</button>
                </a>
            </div>
        </div>
    )
}
