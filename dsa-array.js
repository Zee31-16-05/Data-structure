//Q. Remove duplicates from sorted array and 
// arrange the unique elements in ascending order.

// let arr = [0,0,1,1,1,2,2,3,3,4];

// let j=1
// for(let i = 0; i< arr.length-1;i++){
//     if(arr[i] !== arr[i+1]){
//          arr[j] = arr[i+1]
//         j++
//     }
// }
// console.log("messi",j,arr)

//Q.2 merge two sorted array.

// let result = []
// let arr1 = [1,3,5]
// let arr2 = [2,4,6,8]
// let j=0
// for(let i =0; i <= arr1.length || i <= arr2.length;){

//     if(arr1[i] < arr2[j]){
//         result.push(arr1[i])
//         i++
//     }
//     else{
//         if(i >= arr1.length) {
//             result.push(arr2[j])
//             j++
//             i++
//         }
//         else{
//             result.push(arr2[j])
//             j++
//         }

//     }
// }
// console.log(result)

//doing it in most efficient way. stock buy and sell when the profit is maximum then sell and when the price is minimum then buy.
let stockPrice = [7, 1, 5, 3, 6, 4]
let min = stockPrice[0]
let maxProfit = 0

stockPrice.forEach((item) => {
    if (item < min) {
        min = item
    }
    let diff = item - min
    if (diff > maxProfit) {
        maxProfit = diff
    }
})
console.log(maxProfit, min)