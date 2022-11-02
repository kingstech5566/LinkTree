import React from "react";

import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

function Profile({ name, bio, avatar}) {
  console.log(name, bio, avatar);
  return (
    <div className="p-m-4">
      <div className="p-d-flex p-jc-center p-ai-center">
        <Avatar image="kingsley.jpg" size="xlarge" shape="circle" className="p-overlay-badge">
          <Badge value="." severity="info" />
        </Avatar>
      </div>
      <div className="p-d-flex p-jc-center">
        <p><b>name</b></p>
      </div>
    </div>
  );
}

export default Profile;