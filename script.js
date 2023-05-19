

const showBtn =document.getElementById('showSectionButton');

    showBtn.addEventListener('click', function(){
        const section = document.getElementById('hiddenSection');
        const arrowBtn = document.getElementById('arrowIcon');

        // Arrow Icon rotate
        if(arrowBtn.style.transform == "rotate(0deg)"){
               arrowBtn.style.transform = "rotate(180deg)"; 
        }
        else{
            arrowBtn.style.transform = "rotate(0deg)"; 
        }
        // toggle menu
        if(section.style.opacity == '0'){
            section.style.opacity = '1';
            section.style.height = '50vh';
            
        }
        else{
            section.style.opacity ='0';
             section.style.height = '0';
        }
       
    })

  