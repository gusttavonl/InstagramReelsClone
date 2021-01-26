import { Avatar } from '@material-ui/core';
import { LibraryMusic } from '@material-ui/icons';
import React from 'react';
import './Info.css';


function Info() {
  return (
    
    <div className="info">
        <div className="infoTitle">
            <Avatar src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
            <p className="infoTitleName">gustavoNoronha0</p>
            <p className="infoTitleFollow">- Seguir</p>
        </div>
        <div className="infoMusic">
            <LibraryMusic />
            <p>Numb - Linkin Park</p>
        </div>
    </div>
  );
}
 
export default Info;