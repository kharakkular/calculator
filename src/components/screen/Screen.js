import { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';

import ActiveScreen from "./active-screen/ActiveScreen";
import classes from './Screen.module.css';

const Screen = props => {
    
    const number = useSelector(state => state.calculator.currentNumber);
    const equation = useSelector(state => state.calculator.equation);
    const total = useSelector(state => state.calculator.total);
    const [typedValue, setTypedValue] = useState();
 
    useEffect(()=> {
        setTypedValue(equation.join(''));
    }, [number, equation]);

    return (
        <div className={classes.screen}>
            <div className={classes.result}>{total}</div>
            <ActiveScreen value={typedValue} />
        </div>
    );
}

export default Screen;