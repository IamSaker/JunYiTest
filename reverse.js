function reverseWords (str) {
    strArr = str.split(' ');

    strArrReverse = strArr.map(str => {
        let newStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
    })
    return strArrReverse.join(' ');
}