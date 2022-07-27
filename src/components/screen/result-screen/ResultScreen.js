import classes from './ResultScreen.module.css';

const ResultScreen = props => {

    const { total } = props;

    return (
        <div className={classes.resultContainer}>
            <span className={classes.equalSign}><i className="fa-solid fa-equals"></i></span>
            <div className={classes.result}>{total}</div>
        </div>
    )
}

export default ResultScreen;