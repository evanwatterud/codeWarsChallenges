// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.
//
// perimeter(5)  should return 80
// perimeter(7)  should return 216

function perimeter(n) {
  return Array.apply(null, new Array(n + 2)).reduce(function(acc, curr, i) {
    return acc + fib(i, {})
  }, 0) * 4
}

function fib(n, memo) {
  memo = memo || {}

  if (memo[n]) return memo[n]
  if (n < 0) return 0
  if (n <= 1) return 1

  return memo[n] = fib(n-1, memo) + fib(n-2, memo)
}
