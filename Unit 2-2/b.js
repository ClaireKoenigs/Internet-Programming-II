let arr = [9, 8 ,7, 6, 5, 4, 3]

arr.forEach((element)=>{
    console.log(element);
})

let arr2 = ['a', 'b', 'c', 'd', 'f']

let passFailArr = arr2.map((grade)=>{
    if (grade == 'f' || grade == 'd')
    {
        return 'fail';
    }
    else
    {
        return 'pass';
    }
})
console.log(passFailArr);

let arr3 = [10, 8 ,7, 6, 5, 4, 3]

let sorted = arr.sort((a, b)=>{
    return a - b; /*b - a reverses order (largest to smallest)*/
})
console.log(sorted);