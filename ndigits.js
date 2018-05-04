/** Calculate digits used for a book of n pages
 ** The numbers of digits follow a pattern.
 ** If the book have n pages, so the pattern is:

 [10^(n - n + 0) * 9] + [10^(n - n + 1) * 9] ... [10^(n - n + (n - 1)) * 9] +  [(n - 10^( n - n + ( n + 0))) + 1] * k

 where k = numbers of digits of the n pages.

 So i use a loop and the logic described, for get the digits.
*/

function calculate_digits(npags) {
  var r = 0, l = npags.toString().length;
  for(var k = 1, powOf = 0; k <= l; k++, powOf++) {
    r += k === l ? ((npags - Math.pow(10, powOf) + 1) * k) : (k * 9 * Math.pow(10, powOf));
  }
  return r;
}
