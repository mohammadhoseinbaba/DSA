//array traversal in java script

//sample array
const numbers =[2,3,4,7,10,15];
//basic traversal with a for loop
for(let i=0 ; i < numbers.length ; i++){
  console.log(numbers[i])}
//using foreach method
numbers.foreach((number)=>console.log(number))
//Example : finding the maximum value in an array 
function findmax(arr){
  let max = arr[0]
  for (let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max = arr[i];
    }
  }
  return max
}
console.log('The max number is :', findmax(numbers))
