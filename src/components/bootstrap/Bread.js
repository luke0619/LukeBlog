import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { NavLink } from "react-router-dom";
import classes from './Bread.module.css';

function Breadcrumbs(props) {
  let typeName;
  if(props.type === 'life') {
    typeName = "日常生活"
  }
  if(props.type === 'knowledge') {
    typeName = "知識筆記"
  }
  if(props.type === 'sports') {
    typeName = "運動紀錄"
  }
  if(props.type === 'journey') {
    typeName = "旅行紀念"
  }
  if(props.type === 'box') {
    typeName = "開箱分享"
  }
  if(props.type === 'photo') {
    typeName = "攝影作品"
  }


  return (
    <Breadcrumb>
      <NavLink to='/' className={classes.Nav}>首頁 </NavLink>
      / 
      <NavLink  className={classes.Nav} to={`/single/${typeName}`}>
        {typeName}
      </NavLink>
    </Breadcrumb>
  );
}

export default Breadcrumbs;