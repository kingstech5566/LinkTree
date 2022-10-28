import React from "react";

import { Button } from 'primereact/button';

function Links() {
    return (
        <div className="p-d-flex p-jc-center">
  <div className="p-d-flex p-flex-column" style={{ width: 70 + '%' }}>
    <a href="https://twitter.com/KingsCodes55" target="_blank">
    <Button className="p-p-3 p-m-2" id="twitter">
      <i className="pi pi-twitter px-2"></i>
      <span className="px-3">Twitter</span>
    </Button>
    </a>
    </div>
    </div>
    );
}

export default Links;