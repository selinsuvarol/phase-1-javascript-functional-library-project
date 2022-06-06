const check = (data) => {
    return (data instanceof Array) ? data : Object.values(data);
}

const myEach = (array, alert) => {
    const newArray = check(array);
  for (let i = 0; i < newArray.length; i++) {
    alert(newArray[i]);
  }return array;
}

const myReduce = (array, callback, initialValue) => {
    let newArray = check(array);
    if (initialValue==false || initialValue==undefined) {
        initialValue = newArray[0];
        newArray = newArray.slice(1);
      }
    for (let i = 0; i < newArray.length; i++) {
    initialValue = callback(initialValue, newArray[i], newArray);
    }
    return initialValue;
}

const myMap = (array, callback) => {
    const newArray = check(array);
    const newArray2 = [];
    for (let i = 0; i < newArray.length; i++) {
        newArray2.push(callback(newArray[i]));
    }
    return newArray2;
}

const myFind = (array, callback) => {
    const newArray = check(array);
    for (let i = 0; i < newArray.length; i++) {
        if (callback(newArray[i])) {
            return newArray[i];
        }
    } return undefined;
}

const myFilter = (array, callback) => {
    const newArray = check(array);
    const newArray2 = [];
    for (let i = 0; i < newArray.length; i++) {
        if (callback(newArray[i])) {
            newArray2.push(newArray[i]);
        }
    }  return newArray2;
}

const mySize = (array) => {
    const newArray = check(array);
    return newArray.length;
}
const myFirst = (array,index=0) => {
    const newArray = check(array);
    const newArray2 = [];
    if(index!=0){
        for(let i=0; i<index; i++){
            newArray2.push(newArray[i]);
        }return newArray2;
    }else if(index==0){
        return newArray[0];
    }
}
function myLast(array, n=0) {
    if (n == 0 || n == 1) {
        return array[mySize(array)-1]; 
    }
    let res = []; 
    for (let i = mySize(array) - n; i < mySize(array); i++) {
        res.push(array[i]); 
    }
    return res; 
}

function myKeys(object) {
    return Object.keys(object); 
}

function myValues(object) {
    return Object.values(object); 
}