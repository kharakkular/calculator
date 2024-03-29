import { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';

import ActiveScreen from "./active-screen/ActiveScreen";
import ResultScreen from './result-screen/ResultScreen';
import classes from './Screen.module.css';

const Screen = props => {
    
    const number = useSelector(state => state.calculator.currentNumber);
    const equation = useSelector(state => state.calculator.equation);
    let total = useSelector(state => state.calculator.total);
    const [typedValue, setTypedValue] = useState();
 
    useEffect(()=> {
        setTypedValue(equation.join(''));
    }, [number, equation]);

    return (
        <div className={classes.screenContainer}>
            <div className={classes.screen}>
                <ResultScreen total={total} />
                <ActiveScreen value={typedValue} />
            </div>
        </div>
    );
}

export default Screen;