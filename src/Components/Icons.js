import React from "react";
import './Icons.css';

import 'primeicons/primeicons.css';

function Icons() {
    return (
    <div className="p-d-flex" id="icons">
        <a href="https://app.slack.com/client/T042F7V19Q8" id="slack">
    <i className="pi pi-slack" style={{'fontSize': '2em'}}></i>
    </a>
    <a href="https://github.com/kingstech5566" id="github">
    <i className="pi pi-github" style={{'fontSize': '2em'}}></i>
    </a>
    </div>
    );
}

export default Icons;