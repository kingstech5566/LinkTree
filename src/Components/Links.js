import React from "react";
import './Links.css';

import { Button } from 'primereact/button';

function Links({ links }) {

  return (
    <div>
      <div className="p-d-flex p-jc-center p-ai-center p-m-2 p-ta-center">
        <div className="p-d-flex p-flex-column">
          <a href="https://twitter.com/KingsCodes55">
            <Button className="p-p-3 p-m-2" id="twitter">
              <i className="pi pi-twitter p-px-2"></i>
              <span className="p-px-3">link.name</span>
            </Button>
          </a>
        </div>
      </div>
      <div className="p-d-flex p-jc-center p-ai-center p-m-2 p-ta-center">
        <div className="p-d-flex p-flex-column">
          <a href="https://training.zuri.team/">
            <Button className="p-p-3 p-m-2" id="btn_zuri">
              <span className="p-px-3">Zuri Team</span>
            </Button>
          </a>
        </div>
      </div>
      <div className="p-d-flex p-jc-center p-ai-center p-m-2 p-ta-center">
        <div className="p-d-flex p-flex-column">
          <a href="http://books.zuri.team/">
            <Button className="p-p-3 p-m-2" id="books">
              <span className="p-px-3">Zuri Books</span>
            </Button>
          </a>
        </div>
      </div><div className="p-d-flex p-jc-center p-ai-center p-m-2 p-ta-center">
        <div className="p-d-flex p-flex-column">
          <a href="https://books.zuri.team/">
            <Button className="p-p-3 p-m-2" id="book_python">
              <span className="p-px-3">Python Books</span>
              <p><i></i></p>
            </Button>
          </a>
        </div>
      </div>
      <div className="p-d-flex p-jc-center p-ai-center p-m-2 p-ta-center">
        <div className="p-d-flex p-flex-column">
          <a href="https://background.zuri.team/">
            <Button className="p-p-3 p-m-2" id="pitch">
              <span className="p-px-3">Background check for coders</span>
            </Button>
          </a>
        </div>
      </div>
      <div className="p-d-flex p-jc-center p-ai-center p-m-2 p-ta-center">
        <div className="p-d-flex p-flex-column">
          <a href="https://books.zuri.team/design-rules">
            <Button className="p-p-3 p-m-2" id="book_design">
              <span className="p-px-3">Design Books</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;