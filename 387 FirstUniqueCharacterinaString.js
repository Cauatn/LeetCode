/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    var ht = new Map();


    for(elemnt in s){
        if(ht.has(s[elemnt]) == false){
            ht.set(s[elemnt], 1);
        } else {
           ht.set(s[elemnt], ht.get(s[elemnt]) + 1);
        }
    }
    
    //console.log([...ht.entries()])

    for(elemnt in s){
        if(ht.get(s[elemnt]) == 1)
            return elemnt;
    }

    return -1;

};

//console.log(firstUniqChar("aabb"));
