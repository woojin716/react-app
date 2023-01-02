import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';

import {calculateRange, sliceData} from '../../utils/table-pagination';

import '../styles.css';

import GithubIcon from '../../assets/icons/github_icon.svg';
import EmailIcon from '../../assets/icons/email_icon.svg';


function About () {
    return(
        <div className="dashboard-content-container">
            <h1> Contact Us ! </h1>   
            <div class="box">
                <div class="text">
                    <img 
                        src={GithubIcon}
                        alt='github-icon'
                        className='about-icon' />
                    <h2> Github </h2> 
                        <p>@etelpmoc </p>
                        <p> @woojin716</p>
                
                <div class="text">
                    <img 
                        src={EmailIcon}
                        alt='email-icon'
                        className='about-icon' />
                    <h2> Email </h2>
                    <p> ddddddd@gmail.com</p>
                </div>
            </div>
            </div>
        </div> 
    )
};

export default About;