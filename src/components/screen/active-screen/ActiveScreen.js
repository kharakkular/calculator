import classes from './ActiveScreen.module.css';

const ActiveScreen = props => {

    const { value } = props;
    // console.log({value});
    return (
        <div className={classes.typedValue}>
            <span className={classes.equalSign}><i className="fa-solid fa-equals"></i></span>
            <span>{value === '' ? '0' : value}</span>
        </div>
    );
}

export default ActiveScreen;