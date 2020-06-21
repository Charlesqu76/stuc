let arr = [2, 2,43, 12, 54, 23, 20, 41, 200, 42, 2,100,1222]


//冒泡排序
function bubbling(arr) {
    for (let i = 0, arrLen = arr.length; i < arrLen; i++) {
        for (let j = 0; j < arrLen - i; j++){
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
// console.log(bubbling(arr), 'bubbling')

//插入排序
function insertSort(arr){
    let newArr = [];
    newArr.push(arr[0]);
    for (let i = 1, arrLen = arr.length; i < arrLen; i++ ){
        let newarrLen = newArr.length;
        for (let j = 0; j < newarrLen; i++){
            if ( arr[i] <  newArr[j]){
                newArr.unshift(arr[i]);
                break
            }else{
                if (j === newarrLen -1){
                    newArr.push(arr[i]);
                    break
                }
            }
        }
    }
    return newArr
}
console.log(insertSort(arr), 'insertSort');

//选择排序
function selectionSort(arr){
    for (let i=0, arrLen = arr.length; i < arrLen; i++){
        let minIndex = i;
        for (let j = i; j < arrLen; j++){
            if (arr[minIndex] > arr[j]){
                minIndex = j;
                console.log(minIndex)
            }
        }
        // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}
// console.log(selectionSort(arr), 'selectionSort');