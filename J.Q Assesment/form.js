

function pass() {
    var pas = document.getElementById("input").value
    
    if(pas.length<=5){
       var erro =document.getElementById("error").innerHTML="Weak"
       document.getElementById("error").style.color="red"

    }
    else if (pas.length>5 && pas.length<=8) {
        var erro =document.getElementById("error").innerHTML="Normal"
        document.getElementById("error").style.color="blue  "
    }
    else{
        var erro =document.getElementById("error").innerHTML="Good"
        document.getElementById("error").style.color="green"
    }
}