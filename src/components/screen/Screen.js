import { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';

import classes from './Screen.module.css';

const Screen = props => {
    
    const keyPressed = useSelector(state => state.calculator.buttonPressed);
    const number = useSelector(state => state.calculator.number);
    const [typedValue, setTypedValue] = useState(number);
 
    useEffect(()=> {
        setTypedValue(number);
    }, [number,keyPressed]);

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