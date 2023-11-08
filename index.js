/* write a script that accept username and password from the users,
validate username, validate password and then display the users details to the page */

function userdetails(){
    const userDatabase = {
        user1 : {
            name : "egwaoje Daniel",
            sex : "male",
            age : 31,
            email : "egwaoje.daniel@gmail.com"
        },
        user2 : {
            name : "egwaoje Daniel",
            sex : "male",
            age : 31,
            email : "egwaoje.daniel@gmail.com"
        },
        user3 : {
            name : "egwaoje Daniel",
            sex : "male",
            age : 31,
            email : "egwaoje.daniel@gmail.com"
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