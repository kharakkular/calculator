import { useState } from 'react';
import classes from './Screen.module.css';

const Screen = props => {
    
    const [typedValue, setTypedValue] = useState(0);
    
    return (
        <div className={classes.screen}>
            <div className={classes.result}></div>
            <div className={classes.typedValue}>
                <span>=</span>
                <span>{typedValue}</span>
            </div>
        </div>
    );
}

export default Screen;