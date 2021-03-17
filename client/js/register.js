$(document).ready(() => {
    
    const signUpBtn = $("#login");

    signUpBtn.on("click", event => {

        event.preventDefault();

        const username = $("#userName");
        const eMail = $("#eMail");
        const passWord = $("#passWord");

        const userInfo = {
            name: username.val().trim(),
            email: eMail.val().trim(),
            password: passWord.val().trim()
        }

        console.log(userInfo)

        
signUpUser(userInfo.name, userInfo.email, userInfo.password);

function signUpUser(name, email, password){
            console.log(name, email, password)
        $.post("/api/auth/register", {
            name: name,
            email: email,
            password: password

        }, function(data){
            console.log(data)
        })
    }
    })
})