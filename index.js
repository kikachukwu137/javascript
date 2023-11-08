/*In this last section, we'll consolidate all you have learnt this week, with some mini projects

* Create a webpage that validates a user and returns user details
    * Accept details using prompts
    * Use an object to store user details
    * Validate user details
    * Username must be less than ten
    * Password must be greater than six
    * User must confirms password
    * If username and password do not match, alert the user
    * Display user details
    * /
*/
 //* Accept details using prompts

function userdetails(){
    const userDatabase = {
        user1 : {
            name : "egwaoje Daniel",
            sex : "male",
            age : 31,
            email : "egwaoje.daniel@gmail.com"
        },
        user2 : {
            name : "Aduka winner",
            sex : "female",
            age : 30,
            email : "winner@gmail.com"
        },
        user3 : {
            name : "Adekunle Daniel",
            sex : "male",
            age : 27,
            email : "adekunledaniel@gmail.com"
        }
    }
    
    let username = prompt("PLEASE ENTER YOUR USERNAME")
    while(validateUsername(username) == false){
        if (username == null){
            return
        }
        username = prompt("ENTER VALID USERNAME")

    }



    let password = prompt("PLEASE ENTER YOUR PASSWORD")
    while(validatePassword(password) == false){
        if(password == null){
            return
        }
        password = prompt("ENTER A VALID PASSWORD OF NOT LESS THAN SIX CHARACTER")
    }

    let confirmPassword = prompt("ENTER YOUR PASSWORD AGAIN")
    while(confirmPassword !== password){
        if(confirmPassword == null){
            return 
        }
        confirmPassword = prompt("ENTER A MATCHING PASSWORD")
        

    }

    const user = userDatabase[username]
    if (user == undefined){
        alert("user not found")
    }
    alert(`
        The details are as follows:
        Name : ${user.name},
        sex : ${user.sex},
        Age : ${user.age},
        email : ${user.email}
               
    
    `)

}
userdetails()
alert("welcome")





function validatePassword(password){
    if (password == null){
        return false
    }if(password.length < 6){
        return false
    }else {
        return true
    }
}






function validateUsername(username){
    if (username == null){
        return false
    }
    if(username.length > 10 ){
        return false
    }else{
        return true
    }

}