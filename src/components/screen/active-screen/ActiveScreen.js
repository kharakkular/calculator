import classes from './ActiveScreen.module.css';

const ActiveScreen = props => {

    const { value } = props;
    return (
        <div className={classes.typedValue}>
            <span>{value === '' ? '0' : value}</span>
        </div>
    );
}

export default ActiveScreen;