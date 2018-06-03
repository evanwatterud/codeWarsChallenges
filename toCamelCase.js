/*
Complete the method/function so that it converts dash/underscore delimited words
into camel casing. The first word within the output should be capitalized only if
the original word was capitalized.
*/

function toCamelCase(str){
  return str.replace(/[-_]/g, ' ').split(' ').map((word, i) => {
    return i == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
  }).join('')
}
