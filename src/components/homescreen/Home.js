// import { Fragment } from "react";

import Button from '../button/Button';
import Keypad from '../keypad/Keypad';
import Screen from '../screen/Screen';
import classes from './Home.module.css';

const Home = (props) => {
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