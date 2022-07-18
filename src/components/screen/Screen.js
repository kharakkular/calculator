import classes from './Screen.module.css';

const Screen = props => {
    return (
        <div className={classes.screen}>
            <div className={classes.result}></div>
            <div className={classes.typedValue}>
                <span>=</span>
                <span>123</span>
            </div>
        </div>
    );
}

export default Screen;