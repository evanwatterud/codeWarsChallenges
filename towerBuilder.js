/*
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *
*/

function towerBuilder(nFloors) {
  return Array.apply(null, new Array(nFloors)).map(function(floor, i) {
    return ' '.repeat((((nFloors * 2) - 1) - ((i * 2) + 1)) / 2) + '*'.repeat((i * 2) + 1) + ' '.repeat((((nFloors * 2) - 1) - ((i * 2) + 1)) / 2)
  })
}
