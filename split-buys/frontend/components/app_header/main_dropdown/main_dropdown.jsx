import React from "react";

const MainDropDown = (props) => {
    
    return (
        <>
            <div className="dropdown">
                <button className="dropdown-toggle">{props.user.username}  <span>&#9660;</span></button>
                <div className="dropdown-menu">
                    <a href="#">Add Expense</a>
                    <a href="#">Add Friend</a>
                    <a href="#" onClick={() => props.logout()}>Log Out</a>
                </div>
            </div>
        </>
    )
}

export default MainDropDown; 