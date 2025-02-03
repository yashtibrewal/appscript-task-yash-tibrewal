import React from 'react';
import styles from './HamburgerIcon.module.css';

const HamburgerIcon = () => {
    return (
        <button className={styles.hamburger_icon}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </button>
    )
}

export default HamburgerIcon;