$(document).ready(() => {
    
    const signUpBtn = $("#login");

    signUpBtn.on("click", event => {

        event.preventDefault();

        const eMail = $("#eMail");
        const passWord = $("#passWord");

        const userInfo = {
            email: eMail.val().trim(),
            password: passWord.val().trim()
        }

        console.log(userInfo)

        
logInUser(userInfo.email, userInfo.password);

function logInUser(email, password){
            console.log(email, password)
        $.post("/api/auth/login", {
            email: email,
            password: password

        }, function(data){
            console.log(data)
        })
    }
    })
})