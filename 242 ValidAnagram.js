/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     ht = new Map()
     ht2 = new Map()

     if(s.length != t.length)
          return false

     for(i in t) {
          if(ht2.has(s[i]))
               ht2.set(s[i], ht2.get(s[i]) + 1)
          else
               ht2.set(s[i], 1)
          if(ht.has(t[i]))
               ht.set(t[i], ht.get(t[i]) + 1)
          else
               ht.set(t[i], 1)
     }

     iterator = ht.keys()

     for(const key of iterator) {
          if(ht.has(key)) {
               if(ht2.get(key) != ht.get(key))
                    return false
          }
          else
               return false

     }

     console.log(...ht.entries())
     console.log(...ht2.entries())

     return true
};

console.log(isAnagram("anagram","nagaram"))
