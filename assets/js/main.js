function sendForm() {
    console.clear()
    let fName = document.getElementById("fname").value
    let lName = document.getElementById("lname").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let country = document.getElementById("country").value
    let address = document.getElementById("address").value
    let message = document.getElementById("message").value
    console.log("First Name:" + " " + fName)
    console.log("Last Name:" + " " + lName)
    console.log("Email:" + " " + email)
    console.log("Phone:" + " " + phone)
    console.log("Country:" + " " + country)
    console.log("Address:" + " " + address)
    console.log("Message:" + " " + message)
    document.getElementById("formHide").style = "display: none;"
    document.getElementById("formShow").style = "display: flex;" 
}

let video = document.getElementById("video")

video.addEventListener("click", 
    function(){
        video.muted = !video.muted // video muted
        if (video.muted) {
            document.getElementById("mute").style = "display: initial;"
        } else {
            document.getElementById("mute").style = "display: none;"
        }
    })


