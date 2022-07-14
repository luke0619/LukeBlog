import Modal from '../UI/Modal';
import React from 'react';
import classes from './Resume.module.css';

import couple from '../../assets/couple.jpg';
import sun from '../../assets/sun.png';


const Resume = (props) => {

    return (
        <Modal onClose={props.onClose}>
            <div className={classes.popup_content}>
                <div className={classes.popup_left}>
                    <img src={couple} alt="Luke photo" className={classes.popup_img1}/>
                    <img src={sun} alt="Luke photo" className={classes.popup_img2}/>
                </div>            
                <div className={classes.popup_right}>
                    <a onClick={props.onClose} className={classes.popup_close}>&times;</a>
                    <div className={classes.popup_title}>自傳</div>
                    <p className={classes.popup_text}>我是孫立飛，來自臺北市，父親於中華科技大學就職，從小接觸到電腦，喜歡寫網頁，目前仍在努力自我學習當中，除了寫網頁之外，我另外還有學習Git、PhotoShop，之後的目標是希望往全端工程師發展。我在2022年六月畢業於輔仁大學資訊管理學系，在課餘時間我會自行在Udemy進行自我學習，在大三做專題的時候曾取得育秀盃佳作的成績，在做專題的過程中我更確信自己對網頁有著相當的熱忱，這也是我想應徵製作網頁相關工作的原因。</p>
                </div>
                
            </div>
        </Modal>
    )
}

export default Resume;