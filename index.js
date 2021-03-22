window.onload = function(){
    registerEvents();
}

function registerEvents(){
    document.getElementById('tinput').addEventListener('input', onTextInput)
    document.querySelectorAll('nav ol li').forEach(
        e => e.addEventListener('click', onNavBtnClick)
    )
    
    document.getElementById('evalcompute').addEventListener('click', onEvalCompute)
    
    
}

function onTextInput(e){
    let v = e.target.value; 
    let outele = document.getElementById('fout');
    outele.innerHTML = v; 
}


function onNavBtnClick(e){

    let btn = e.target.id; 
    console.log(btn);
    switch(btn){
        case 'csinnerhtml':
            document.getElementById('evalex').style.display = "none";
            
            // document.location = "#formattedout"
            document.getElementById('formattedout').style.display = "block";
            break; 
        case 'cseval':
            document.getElementById('formattedout').style.display = "none";
            document.location = "#cseval"
            document.getElementById('evalex').style.display = "block";
            break; 
        case 'csredirects': 
            document.getElementById('formattedout').style.display = "none";
            document.location = "#cseval"
            document.getElementById('evalex').style.display = "block";
            break; 
    }
}

function onEvalCompute(e){
    let a = document.getElementById("ina").value; 
    let b = document.getElementById('inb').value; 
    let c = eval(a + b);   // Dangerous  & Weak typed concatenation instead of addition 
    document.getElementById('evalout').innerHTML = c;  //Dangeorus 
}