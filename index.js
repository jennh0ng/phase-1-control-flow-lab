// function scuberGreetingForFeet(feet){
//   // Write your code here!

//   if (feet <= 400) {
//     return "This one is on me!";
//     }
//     else if (feet > 2000 && feet < 2500) {
//       return "I will gladly take your thirty bucks.";
//     }
//     else if (feet > 2500) {
//       return "No can do.";
//     }
// }

// function ternaryCheckCity(input){
//   // Write your code here!

//   return input === 'NYC' ? 'Ok, sounds good.' : 'No go.';
// }

// function switchOnCharmFromTip(tip) {
//   // Write your code here!

// switch (tip) {
//   case 'generous':
//     return 'Thank you so much.';
//   case 'not as generous':
//     return 'Thank you.';
//   default:
//     return 'Bye.';
//   }
// }


// write your function using if and if else statements

function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  }
  else if (feet > 2000 && feet < 2499) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (feet > 2500 ) {
    return 'No can do.';
  }
}

// write your function using ternary operator


function ternaryCheckCity(city) {
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous': return 'Thank you so much.';
    break;
    case 'not as generous': return 'Thank you.';
    break;
    default: return 'Bye.';
  } 
}
