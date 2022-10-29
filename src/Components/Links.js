import React from "react";

import { Button } from 'primereact/button';

function Links() {
    return (
    <div  className="p-m-4">
      <div className="p-d-flex p-jc-center p-ai-center">
        <div className="p-d-flex p-flex-column" style={{ width: 50 + '%' }}>
        <a href="https://twitter.com/KingsCodes55" target="_blank">
          <Button className="p-p-3 p-m-2" id="twitter">
            <i className="pi pi-twitter px-2"></i>
            <span className="px-3">Twitter</span>
            </Button>
            </a>
            </div>
            </div>
            <div className="p-d-flex p-jc-center p-ai-center">
        <div className="p-d-flex p-flex-column" style={{ width: 50 + '%' }}>
        <a href="https://training.zuri.team/" target="_blank">
          <Button className="p-p-3 p-m-2" id="btn_zuri">
            <span className="px-3">Zuri Team</span>
            </Button>
            </a>
            </div>
            </div>
            <div className="p-d-flex p-jc-center p-ai-center">
        <div className="p-d-flex p-flex-column" style={{ width: 50 + '%' }}>
        <a href="http://books.zuri.team/" target="_blank">
          <Button className="p-p-3 p-m-2" id="btn_zuri">
            <span className="px-3">Zuri Books</span>
            </Button>
            </a>
            </div>
            </div>
            <div className="p-d-flex p-jc-center p-ai-center">
        <div className="p-d-flex p-flex-column" style={{ width: 50 + '%' }}>
        <a href="https://books.zuri.team/" target="_blank">
          <Button className="p-p-3 p-m-2" id="btn_zuri">
            <span className="px-3">Python Books</span>
            </Button>
            </a>
            </div>
            </div>
            <div className="p-d-flex p-jc-center p-ai-center">
        <div className="p-d-flex p-flex-column" style={{ width: 50 + '%' }}>
        <a href="https://background.zuri.team/" target="_blank">
          <Button className="p-p-3 p-m-2" id="btn_zuri">
            <span className="px-3">Background check for coders</span>
            </Button>
            </a>
            </div>
            </div>
            <div className="p-d-flex p-jc-center p-ai-center">
        <div className="p-d-flex p-flex-column" style={{ width: 50 + '%' }}>
        <a href="https://books.zuri.team/design-rules" target="_blank">
          <Button className="p-p-3 p-m-2" id="btn_zuri">
            <span className="px-3">Design Books</span>
            </Button>
            </a>
            </div>
            </div>
            </div>
    );
}

export default Links;