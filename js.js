function setUpEvents(){
    // add
    const sumBtn = document.getElementById("sumEquals");
    const displaySum = document.getElementById("displaySum");

    // subtract
    const diffBtn = document.getElementById("diffEquals")
    const displayDiff=document.getElementById("displayDiff");

    sumBtn.addEventListener('click', function(){
        add();
    });
    diffBtn.addEventListener('click', function(){
        subtract();
    });

    function add() {
        let a = document.getElementById("addendA").value;
        let b = document.getElementById("addendB").value;
        let sum = parseInt(a)+parseInt(b);
        displaySum.innerHTML="Sum = "+sum;             
    };

    function subtract(){
        let a = document.getElementById("subtractA").value;
        let b = document.getElementById("subtractB").value;
        let diff = parseInt(a)-parseInt(b);
        displayDiff.innerHTML="Difference = "+diff;
    }

    function multiply(){

    }

    function power(){

    }

    function factorial(){

    }    
}

window.onload=function(){
    setUpEvents();
}

