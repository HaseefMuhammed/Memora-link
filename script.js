// setTimeout(function(){
//     window.location.replace('https://forms.gle/BWF6ofAcHLFZG8fZ8');
// }, 3000);
// console.log("Current version_10")

// // slider codes 

function login(){
    let username = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    if (username == "haseef" && password == "haseef@ats"){
        window.location.href = "haseef.html";
    }else{
        alert("Incorrect username or password");
    }
}

ScrollReveal().reveal('.anm1', {
    scale: 0.85, duration: 1000
},);

ScrollReveal().reveal('.flip', {
    rotate: {
        x: 20,
        z: 20
    }
});
