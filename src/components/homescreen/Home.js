// import { Fragment } from "react";

// import { useState } from 'react';
// import { useSelector } from 'react-redux';

// import store from '../../store';
import { useRef, useState } from 'react';
import Keypad from '../keypad/Keypad';
import Screen from '../screen/Screen';
import classes from './Home.module.css';

const Home = (props) => {

    const [themeText, setThemeText] = useState('Dark');
    const onToggleRef = useRef();
    const offToggleRef = useRef();

    const handleClick = () => {
        if(offToggleRef.current.style.display !== "none") {
            offToggleRef.current.style.display = "none";
            onToggleRef.current.style.display = "inline";
            document.documentElement.style.setProperty('--color-primary', 'rgb(240, 239, 239)');
            document.documentElement.style.setProperty('--color-text-primary', 'rgb(212, 82, 30)');
            document.documentElement.style.setProperty('--shadow--primary', 'rgb(211, 128, 95)');
            document.documentElement.style.setProperty('--color-border-primary', 'rgb(234, 234, 234)');
            document.documentElement.style.setProperty('--shadow--primary-active', 'rgb(0,0,0.2)');
            document.documentElement.style.setProperty('--color-text-secondary', 'white');

        } else {
            offToggleRef.current.style.display = "inline";
            onToggleRef.current.style.display = "none";
            document.documentElement.style.setProperty('--color-primary', 'rgb(57,67,81)');
            document.documentElement.style.setProperty('--color-text-primary', 'white');
            document.documentElement.style.setProperty('--shadow--primary', 'rgb(0,0,0.2)');
            document.documentElement.style.setProperty('--color-border-primary', 'rgb(57,67,90)');
            document.documentElement.style.setProperty('--shadow--primary-active', 'rgb(0,0,0.2)');
            document.documentElement.style.setProperty('--color-text-secondary', 'black');
        }
        console.log('Clicked');
    }

    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div onClick={handleClick} className={classes.theme}>
                    <span ref={onToggleRef} className={classes.toggleOn}><i className="fa-solid fa-toggle-on"></i></span>
                    <span ref={offToggleRef} className={classes.toggleOff}><i className="fa-solid fa-toggle-off"></i></span>
                </div>
                <Screen />
                <Keypad />
            </div>
        </div>
    );
}

export default Home;