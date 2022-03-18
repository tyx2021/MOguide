function factorial() {
    x=document.getElementById('factorialinput').value
    output=1
    for(i=1;i<=x;i++){
        output=output*i
    }
    document.getElementById('factorialoutput').innerHTML="The factorial of "+x+" is "+ output
    }
