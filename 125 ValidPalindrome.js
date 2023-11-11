/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     i = 0
     n = ""

     while(s[i]) {
         temp = s[i].charCodeAt(0)
          if((temp >= 65 &&  temp <= 90) || (temp >= 48 && temp <= 57) || (temp >= 97 && temp <= 122)){
               n = n + s[i].toLowerCase()
          }
         i += 1
     }

     i = 0
     j = n.length - 1

     while(i != j && (i < n.length) && (j > -1)) {
          
          if(n[i] != n[j])
               return false
               
          i += 1
          j -= 1
     }

     return true
 
 };
