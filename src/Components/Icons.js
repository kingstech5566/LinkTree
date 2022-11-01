import React from "react";

import 'primeicons/primeicons.css';
function Icons() {
    return (
    <div className="p-d-flex p-fd-column p-p-24 p-g-64 p-h-72">
        <a href="https://app.slack.com/client/T042F7V19Q8" id="slack">
    <i className="pi pi-slack" style={{'fontSize': '2em'}}></i>
    </a>
    <a href="https://github.com/kingstech5566" id="github">
    <i className="pi pi-github" style={{'fontSize': '2em'}}></i>
    </a>
    </div>
    );
}

export default Links;