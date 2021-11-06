import React from 'react'
import './Style.css'

function Stylesheet(props) {
    let className=props.isvalue ? 'red':'green';
    return (
        <div>
            <h1 className={`${className} size`}>Hello to style</h1> {/* we can apply two class in same element */}
        </div>
    )
}

export default Stylesheet
