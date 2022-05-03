import React from "react";
import addExpenses from './../../../app/assets/images/homepage/add-expenses-pic.png'; // with import
import balance from './../../../app/assets/images/homepage/balance-pic.png'; // with import
import expenses from './../../../app/assets/images/homepage/expenses-pic.png'; // with import
import extras from './../../../app/assets/images/homepage/extras-pic.png'; // with import
import payBack from './../../../app/assets/images/homepage/pay-back-pic.png'; // with import
import { Link } from "react-router-dom";

const ScreenshotContainer = () => {
    return (
        <div className="screenshot-container-wrap">
            <div className="balance-wrap">
                <h2>Track balances </h2>
                <p>Keep track of shared expenses, balances, and who owes who.</p>
                <div>
                    <img src={balance} alt="balance" />
                </div>
            </div>
            <div className="organize-wrap">
                <h2>Organize Expenses </h2>
                <p>Split expenses with any group: trips, housemates, friends, and family.</p>
                <div>
                    <img src={expenses} alt="balance" />
                </div>
            </div>
            <div className="add-expense-wrap">
                <h2>Add expenses easily </h2>
                <p>Quickly add expenses on the go before you forget who paid.</p>
                <div>
                    <img src={addExpenses} alt="balance" />
                </div>
            </div>
            <div className="pay-back-wrap">
                <h2>Pay friends back </h2>
                <p>Settle up with a friend and record any cash or online payment.</p>
                <div>
                    <img src={payBack} alt="balance" />
                </div>
            </div>
            <div className="extras-wrap">
                <div>
                    <div className="extras-info-wrap">
                        <h2>Get even more with PRO </h2>
                        <p>Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!</p>
                        <Link to="/signup">
                            <button className="extras-signup-btn">Sign up</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={extras} alt="balance" />
                </div>
            </div>
        </div>

    )
}

export default ScreenshotContainer; 