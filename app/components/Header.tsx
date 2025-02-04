import React from 'react';
import styles from "../page.module.css";
import HamburgerIcon from "./icons/HamburgerIcon";
import CircleFlower from "./icons/CircleFlower";
import SearchIcon from "./icons/Search";
import LoveIcon from "./icons/Love";
import BagIcon from "./icons/Bag";
import ProfileIcon from "./icons/Profile";
import MoreIcon from "./icons/More";

const Header = () => {
    return <div style={{display:'flex', justifyContent:'space-between', marginLeft:'12px', marginRight:'12px', alignItems:'center', height:'48px'}}>
      <div style={{display:'flex', gap:'16px'}}>
        <span className={styles.show_xs}><HamburgerIcon></HamburgerIcon></span>
        <CircleFlower></CircleFlower>
      </div>
      <h1 style={{alignSelf:'center'}}>LOGO</h1>
      <div style={{display:'flex', gap:'16px'}}>
        <SearchIcon></SearchIcon>
        <LoveIcon></LoveIcon>
        <BagIcon></BagIcon>
        <ProfileIcon></ProfileIcon>
        <span style={{display:'flex', alignItems:'center', gap:'4px'}}>ENG<MoreIcon></MoreIcon></span>
      </div>
    </div>
}

export default Header;