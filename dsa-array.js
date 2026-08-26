//Q. Remove duplicates from sorted array and 
// arrange the unique elements in ascending order.

let arr = [0,0,1,1,1,2,2,3,3,4];

let j=1
for(let i = 0; i< arr.length-1;i++){
    if(arr[i] !== arr[i+1]){
         arr[j] = arr[i+1]
        j++
    }
}
console.log("messi",j,arr)