//Question 115: Use a switch statement to log the days of the week based on a number (1-7).

//Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. It's particularly useful for scenarios like mapping numbers to days of the week.

function logDays_ofWeek(daynumber:number): void{
  switch (daynumber){
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      case 4:
        console.log("Thursday");
          break;
          case 5:
        console.log("Friday");
          break;
          case 6:
          console.log("Saturday");
            break;
            case 7:
            console.log("Sunday");
              break;
              default:
         console.log("Invalid day number");
         break;
  }
}
logDays_ofWeek(5);

//Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

//2Explain & TIP: You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.

function logSeason(month:number):void{
  switch (month){
    case 12 :
    case 1  :
    case 2  :
    console.log("winter");
    break;
   
    case 3 :
    case 4 :
    case 5 :
    console.log("spring");
    break;

      case 6 :
      case 7 :
      case 8 :
      console.log("summer");
      break;
   
    case 9 :
    case 10 :
    case 11 :
    console.log("autumn");
    break;
    default:
      console.log("Invalid month");
      break;
  }
}
logSeason(6);
//Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

//Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.

function logGrade(grade:string): void {
  switch (grade){
    case "A" : 
    console.log("Excellent");
    break;

    case "B" : 
    console.log("very good");
    break;

    case "C" : 
    console.log("good");
    break;

    case "D" : 
    console.log("Fair");
    break;

    case "E" : 
    console.log("poor");
    break;

    case "F" : 
    console.log("Fail");
    break;
    default:
      console.log("Invalid grade");
      break;
  }
}
logGrade("B");