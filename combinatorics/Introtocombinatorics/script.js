function submitansone() {
    x=document.getElementById('ansone').value
    if (x=="24") {
        document.getElementById('ansonecheck').innerHTML="Your answer " + x +" is correct!"
    }
    else {
        document.getElementById('ansonecheck').innerHTML="Your answer " + x +" is wrong."
    }
}
function submitanstwo() {
    x=document.getElementById('anstwo').value
    if (x=="120") {
        document.getElementById('anstwocheck').innerHTML="Your answer " + x +" is correct!"
    }
    else {
        document.getElementById('anstwocheck').innerHTML="Your answer " + x +" is wrong."
    }
}
function submitansthree() {
    x=document.getElementById('ansthree').value
    if (x=="360") {
        document.getElementById('ansthreecheck').innerHTML="Your answer " + x +" is correct!"
    }
    else {
        document.getElementById('ansthreecheck').innerHTML="Your answer " + x +" is wrong."
    }
}