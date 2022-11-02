import React from "react";
import './Profile.css'

import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

function Profile({ name, bio, avatar}) {
  console.log(name, bio, avatar);
  return (
    <div className="p-m-4">
      <div className="p-d-flex p-jc-center p-ai-center" id="profile_img">
        <Avatar image="kingsley.jpg" size="xlarge" className="p-overlay-badge">
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