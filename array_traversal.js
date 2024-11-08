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
//calculation the sum of all elements in the array
function sumArray(arr){
  let sum=0;
  arr.foreach((number)=>{
    sum += number;
  })
  return sum ;
}
console.log('sum of array:',sumArray(numbers))
//check if an element exist in the array
function contain(arr,target){
for(let i=0 ; i<arr.length ; i++ ){
  if(arr[i]===target){
    return true;
  }
}
  return false
}
console.log('Array contain 30:',contain(numbers,30));
console.log('Array contain 100:',contain(numbers,100));
 //Time Complexity 
//0(1) -constant time
function getFisrtElement(arr){
  return arr[0]}
//0(n) - Linear time
function printAllElement(arr){
  arr.foreach((Element)=>console.log(Element))


