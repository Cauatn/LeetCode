/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    var email;
    var newEmails = [];

    for(email in emails)
    {
        emailFormat = formatEmail(emails[email]);
        
        if(!(newEmails.includes(emailFormat)))
            newEmails.push(emailFormat)
    
        email++;
    }    

    return newEmails.length;
};

formatEmail = function (email){
    newEmail =[""];

    for(letter in email)
    {   
        if(email[letter] != '.') {

            if(email[letter] == '+') {
                while(email[letter] != '@') {letter++};
            }

            if(email[letter] == '@') {
                while(email[letter] != undefined) {newEmail = newEmail + email[letter++]};
                break;
            }

            newEmail = newEmail + email[letter];
        }
    }

    return newEmail;
}


/*
    console.log(
        numUniqueEmails(["test.email+alex@leetcode.com",
                    "test.e.mail+bob.cathy@leetcode.com",
                    "testemail+david@lee.tcode.com"]
                )
)*/
