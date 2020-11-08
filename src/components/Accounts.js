import React from 'react';
import { Link } from 'react-router-dom';

import './accounts.css';
import userIcon from "../assets/profile-min.png";
import { connect } from "react-redux";

class Accounts extends React.Component {
    passAccount(account) {
        this.props.dispatch({type: 'ADD_AMOUNT', payload: account})
    }

    render() {
        return (
            <div className="accounts">
                <h3 className="heading-three">Your accounts</h3>
                <div className="account-container">
                    <div className="account-list">
                        {this.props.accounts.map((account, index) => {
                            return (
                                <Link to="/account-detail" key={index}
                                onClick={() => this.passAccount(account)} className="account">
                                    <h4 className="header-four">You’re owed</h4>
                                    <div className="price">
                                        <span className="currency">&#163;</span>
                                        <span className="amount">{account}</span>
                                    </div>
                                    <img src={userIcon} alt="user icon" className="user-icon"
                                    width="20" height="20"/>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps)(Accounts);