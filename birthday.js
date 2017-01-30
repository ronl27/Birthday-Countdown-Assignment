//create a birthday countdown
// For every day, print how many days left.
//If it's more than 30 days, print a sad message.
//If it's less than 30 days, print a message sound excited!
//If it's less than 5 days, SCREAM IT!
//ONCE IT'S YOUR BIRTHDAY HAVE PARTY!
//60 days until my birthday. Such a long time... :(
//59 days until my birthday. Such a long time... :(
//58 days until my birthday. Such a long time... :(
//2 DAYS UNTIL MY BIRTHDAY!!!
//1 DAY UNTIL MY BIRTHDAY!!!
//♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*
//♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪
//*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«//

function daysuntilmybirthday (){
  // var daysuntilmybirthday = 60;
  var num = 60;
  while (num > 0){
    console.log(num + 'days until my birthday. Such a long time....:(')
    num = num - 1;
  }
  {
 if (num < 1)
    console.log('Happy Birthday!')
  }
}
daysuntilmybirthday()
