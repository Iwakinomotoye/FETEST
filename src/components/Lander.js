import Accounts from './Accounts';
import { Transactions } from './Transactions';

import './lander.css';
import userIcon from '../assets/profile.png';

export function Lander() {
    return (
        <div className="landing">
            <img src={userIcon} alt="profile icon" className="profile-icon"
            width="32" height="32"/>
            <div className="page-body">
                <h1 className="heading-one">Morning Lee</h1>
                <Accounts/>
                <Transactions/>
            </div>
        </div>
    )
}