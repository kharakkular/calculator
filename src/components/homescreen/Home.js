// import { Fragment } from "react";

import { useState } from 'react';
import { useSelector } from 'react-redux';

import store from '../../store';
import Keypad from '../keypad/Keypad';
import Screen from '../screen/Screen';
import classes from './Home.module.css';

const Home = (props) => {

    const keyValue = useSelector(store => store.calculator.buttonPressed);

    console.log({keyValue});

    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <Screen />
                <Keypad />
            </div>
        </div>
    );
}

export default Home;