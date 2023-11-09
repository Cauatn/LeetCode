/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    var email;
    var newEmails = [];
    var cont = 0;

    for(email in emails)
    {
        emailFormat = formatEmail(emails[email]);
        
        if(!(newEmails.includes(emailFormat))){
            newEmails.push(emailFormat)
            cont++
        }
            
    }

    return cont;
};

formatEmail = function (email){
    newEmail =[""];
    var i = 0;
    tamanho = email.length;

    while(i < tamanho)
    {
        if(email[i] != '.'){
            if(email[i] == '+'){
                while(email[i] != '@') i++;
            }
            newEmail = newEmail + email[i];
        }
            
        if(email[i] == '@'){
            while(i < tamanho) {
                i++;
                newEmail = newEmail + email[i];
            }
            break;
        }

        i++;
    }

    return newEmail;
}


console.log(
    numUniqueEmails(["test.email+alex@leetcode.com",
                "test.e.mail+bob.cathy@leetcode.com",
                "testemail+david@lee.tcode.com"]
                )
)
