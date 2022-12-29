import React from 'react';
import {useState, useEffect} from 'react';

import './styles.css';
import NotificationIcon from '../../assets/icons/notification.svg';
import SettingsIcon from '../../assets/icons/settings.svg';

function DashboardHeader ({ btnText, onClick}) {
    const search = useState('')[0];
    return(
        <div className='dashbord-header-container'>
            <div className='dashboard-header-search'>
                <input
                    type='text'
                    value={search}
                    placeholder='Search block number or tx hash'
                    className='dashboard-content-input'
                    onChange={e => onClick(e)} />
                </div>

            <div className='dashbord-header-right'>
                <img 
                    src={NotificationIcon}
                    alt='notification-icon'
                    className='dashbord-header-icon' />
                <img 
                    src={SettingsIcon}
                    alt='settings-icon'
                    className='dashbord-header-icon' />

            </div>
        </div>
    )
}

export default DashboardHeader;