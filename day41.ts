//Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

//Explain & TIP: The continue statement can be used to skip over an iteration in a loop. It's particularly handy when you want to ignore specific cases without stopping the entire loop.

for(let i = 1; i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

//Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

//Explain & TIP: The break statement terminates the loop immediately. This is useful for stopping a loop when a certain condition is met, even if the loop's original termination condition hasn't been reached yet.

let counter : number = 10;
while(counter > 0){
//if(counter == 5){
  //  break;
//}
console.log(counter)
counter--
}

//Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

//Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found.

function logVowels(str:string): void{
    const vowels = "aeiouAEIOU";
    for(const char of str){
        if(vowels.includes(char)){
            console.log(`First vowel found: ${char}`);
            break;
        }
        console.log(char);
    }
}
logVowels("bcdefghi");










