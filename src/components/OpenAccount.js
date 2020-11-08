import React from 'react';
import { Link } from "react-router-dom";
import { Transactions } from './Transactions';
import userIcon from '../assets/profile.png'
import Back from '../assets/Back.svg'

import './openAccount.css';
import { connect } from 'react-redux';


class OpenAccount extends React.Component {
    render() {
        return (
            <div>
                <div className="account-detail">
                    <div className="handle-page">
                        <Link to="/">
                            <button className="back-button">
                                <img src={Back} alt="previous page button"/>
                            </button>
                        </Link>
                        <img src={userIcon} alt="profile icon" className="profile-icon"
                        width="32" height="32"/>
                    </div>
                    <h4 className="header-four">You’re owed</h4>
                    <div className="price">
                        <span className="currency">&#163;</span>
                        <span className="amount">{this.props.amount}</span>
                    </div>
                    <button className="add-button"></button>
                </div>
                <div className="transactions-container">
                    <Transactions />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        amount: state.amount
    }
}

export default connect(mapStateToProps)(OpenAccount);