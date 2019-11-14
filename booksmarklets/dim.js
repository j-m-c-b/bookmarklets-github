function dim(){
    if(document.querySelectorAll('.costumeCarlDim').length === 0)
    {    let eStyle = document.createElement('style');    
        let bright = 80;    
        eStyle.innerHTML = `html{ filter: brightness(${bright}%); }`;    
        eStyle.className = 'costumeCarlDim';    
        document.body.appendChild(eStyle);    
        document.body.addEventListener('keypress', 
        (e)=>{  
            let regex = /\d+/g;        
            let string = document.querySelectorAll('.costumeCarlDim')[0].innerHTML;        
            let matches = string.match(regex);        
            matches = parseFloat(matches);        
            if(e.key ==='ñ' &&  matches < 95){            
                let bright = matches + 5;            
                document.querySelectorAll('.costumeCarlDim')[0].innerHTML = `html{    filter: brightness(${bright}%);}`;       
            } else if(e.key ==='l' && matches > 5){            
                let bright = matches - 5;            
                document.querySelectorAll('.costumeCarlDim')[0].innerHTML = `html{    filter: brightness(${bright}%);}`;        
            }    
        });
    }
}
dim();
