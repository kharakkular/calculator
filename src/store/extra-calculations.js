export const calculatingTotalValue = (arrayValue) => {
    const arr = [...arrayValue];
    let arrLength = arr.length;
    let total = 0;
    console.log('...... from while loop', {arr: [...arrayValue]});
    while(arrLength > 2){
        let tempTotal = 0;
        const multiply = arr.includes('*');
        if(multiply) {
            const multiplyIndex = arr.findIndex(a => a === '*');
            const preNum = +arr[multiplyIndex-1];
            const postNum = arr[multiplyIndex+1] === '' ? 1 : +arr[multiplyIndex+1];
            tempTotal = preNum * postNum;
            arr.splice(multiplyIndex-1,3,tempTotal);
            arrLength -= 2;
            if(arrLength > 2){
                continue;
            }
        }
        const minus = arr.includes('-');
        const minusIndex = arr.findIndex(a => a === '-');
        if(minus && arr[minusIndex+1] !== undefined) {
            let preNum = +arr[minusIndex-1];
            console.log('Value from minus', {postNum: arr[minusIndex+1]});
            let postNum = +arr[minusIndex+1];
            tempTotal = preNum - postNum;
            arr.splice(minusIndex-1, 3, tempTotal);
            arrLength -= 2;
            if(arrLength > 2){
                continue;
            }
        }
        const add = arr.includes('+');
        if(add){
            const addIndex = arr.findIndex(a => a === '+');
            const preNum = +arr[addIndex-1];
            const postNum = +arr[addIndex+1];
            tempTotal = preNum + postNum;
            arr.splice(addIndex-1, 3, tempTotal);
            arrLength -= 2;
            if(arrLength > 2) {
                continue;
            }
        }
        total += tempTotal;
    }
    return total;
}