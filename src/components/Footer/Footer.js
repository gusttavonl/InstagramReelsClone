import { ChatBubbleOutline, Favorite, MoreHoriz, Telegram } from '@material-ui/icons';
import React from 'react';
import './Footer.css';


function Footer() {
  return (
    
    <div className="footer">
        <div className="footerIcons">
            <Favorite />
            <ChatBubbleOutline />
            <Telegram />
            <MoreHoriz />
        </div>
        <div className="footerStatus">
            <Favorite /> 160
            <ChatBubbleOutline /> 30
        </div>
    </div>
  );
}
 
export default Footer;