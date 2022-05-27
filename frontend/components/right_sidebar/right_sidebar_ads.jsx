import React from "react";
import About from "../about/about";

const RightSidebarAds = () => {
  return (
    <div className="right-sidebar-ads-wrap">
      <div>
        <h1>SPLITWISE ON THE GO</h1>
        <p>Get the free Splitwise app and add IOUs from anywhere:</p>
        <div className="apple-store-wrap">
          <img src={window.app_store_pic} alt="apple store" />
        </div>
        <div className="google-store-wrap">
          <img src={window.google_play_pic} alt="google store" />
        </div>
        <p>+ third party apps for</p>
        <p> <a href="">Windows Phone</a></p>
        <About />
      </div>
    </div>
  )
}

export default RightSidebarAds; 

























































































































































