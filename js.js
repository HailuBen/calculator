function setUpEvents(){
    const sumBtn = document.getElementById("sumEquals");
    const displaySum = document.getElementById("displaySum");

    sumBtn.addEventListener('click', function(){
        add();
    });
    function add() {
        let a = document.getElementById("addendA").value;
        let b = document.getElementById("addendB").value;
        let sum = parseInt(a)+parseInt(b);
        displaySum.innerHTML+=sum;
        // let arr = [a,b];
        // let result = arr.reduce((sum, current) => sum + current, 0);
        // alert(result);               
    };

    function subtract(){
        
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

