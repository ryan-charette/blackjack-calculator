let count = 0;
let decision = "Bet";

function cardCounter(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if(count <= 0) {
    decision = "Hold"
  }
  console.log(count + " " + decision);
}