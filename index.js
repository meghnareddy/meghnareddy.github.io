window.onload = function(){
    registerEvents();
}

function registerEvents(){
    document.getElementById('tinput').addEventListener('input', onTextInput);
    document.querySelectorAll('nav ol li').forEach(
        function(e){e.addEventListener('click', onNavBtnClick)}
    );
    
    document.getElementById('evalcompute').addEventListener('click', onEvalCompute);
    document.getElementById('setloc').addEventListener('click', setDocLoc);
    
    
}

function onTextInput(e){
    var v = e.target.value; 
    var outele = document.getElementById('fout');
    outele.innerHTML = v; 
}


function onNavBtnClick(e){

    var btn = e.target.id; 
    console.log(btn);
    switch(btn){
        case 'csinnerhtml':
            document.getElementById('evalex').style.display = "none";
            document.getElementById('unvalidatedred').style.display = "none";
            // document.location = "#formattedout"
            document.getElementById('formattedout').style.display = "block";
            break; 
        case 'cseval':
            document.getElementById('formattedout').style.display = "none";
            document.getElementById('unvalidatedred').style.display = "none";
            document.location = "#cseval"
            document.getElementById('evalex').style.display = "block";
            break; 
        case 'csredirects': 
            document.getElementById('formattedout').style.display = "none";
            document.getElementById('evalex').style.display = "none";
            document.location = "#"
            document.getElementById('unvalidatedred').style.display = "block";
            break; 
    }
}

function onEvalCompute(e){
    const a = document.getElementById("ina").value; 
    const b = document.getElementById('inb').value; 
    const c = eval(a + b);   // Dangerous  & Weak typed concatenation instead of addition 
    document.getElementById('evalout').innerHTML = c;  //Dangeorus 
}

window.onhashchange = function(e) {
    const hash = window.location.hash; 
    const loc = hash.slice(1);
    console.log("hash change", hash);
    // window.location = loc; 
}

function setDocLoc(e){
    const hash = window.location.hash; 
    console.log("hash change", hash);
    const loc = hash.slice(1);
    window.location = loc
}