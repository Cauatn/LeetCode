/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var ultimoChar = s.length - 1;
    var cont = 0;

    while(s[ultimoChar] == " ")
    {
        ultimoChar--;
    }

    while(s[ultimoChar] != " ")
    {
        cont++;
        ultimoChar--;

        if(ultimoChar == -1){
            ultimoChar++;
            break;
        }
        
    }

    console.log(cont)

    return cont;
};
