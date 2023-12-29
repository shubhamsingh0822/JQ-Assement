

function pass() {

    // ########################################################## password input section ################################################


    var pas = document.getElementById("input").value

    // ################################################################ for week password ###################################################
    
    if(pas.length<=5){
       var erro =document.getElementById("error").innerHTML="Weak"
       document.getElementById("error").style.color="red"
       document.getElementById("error").style.backgroundColor="white"

    }

    // ################################################################ for normal password ###################################################


    else if (pas.length>5 && pas.length<=8) {
        var erro =document.getElementById("error").innerHTML="Normal"
        document.getElementById("error").style.color="blue  "
        document.getElementById("error").style.backgroundColor="beige"
    }

    // ################################################################ for strong password ###################################################
   
    
    else{
        var erro =document.getElementById("error").innerHTML="Good"
        document.getElementById("error").style.color="green"
        document.getElementById("error").style.backgroundColor="azure"

    }
}