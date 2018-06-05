/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.
*/

function tickets(peopleInLine){
  var reserve = { 25: 0, 50: 0 }
  for (var i in peopleInLine) {
    if (peopleInLine[i] - 25 == 75) {
      if (!(reserve[25] > 0 && reserve[50] > 0) && !(reserve[25] > 2)) {
        return 'NO'
      } else {
        if (reserve[50] > 0) {
          reserve[25] -= 1
          reserve[50] -= 1
        } else {
          reserve[25] -= 3
        }
      }
    } else if (peopleInLine[i] - 25 == 25) {
      if (!(reserve[25] > 0)) {
        return 'NO'
      } else {
        reserve[25] -= 1
        reserve[50] += 1
      }
    } else {
      reserve[25] += 1
    }
  }
  return 'YES'
}
