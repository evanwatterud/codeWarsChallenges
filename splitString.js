/*
Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing
second character of the final pair with an underscore ('_').
*/

function solution(str){
  var pairs = []
  var arr = str.split('').reverse()
  for (var i = 0; i < str.length; i++) {
    if (i % 2 == 1) {
      pairs.push(arr.pop() + arr.pop())
    }
  }
  if (arr.length == 1) {
    pairs.push(arr.pop() + '_')
  }

  return pairs
}
