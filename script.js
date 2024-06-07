function sliderMembers(){
    const slider = document.querySelector(".member-list");
    const prevButton = document.querySelector('.member-slider__control__arrow-1');
    const nextButton = document.querySelector('.member-slider__control__arrow-2');
    const textCurrent = document.querySelector('.member-slider__control__numbers--current');  
    
    const slides = Array.from(slider.children);
    const slideCount = slides.length;    
    let slideIndex = 0;
    let slideWidth = slides[0].offsetWidth;
    let slideMargin = 20;
    let slideCountInPage = Math.floor(slider.offsetWidth/slideWidth);    
    let isPlus = 0;
    prevButton.addEventListener('click', function(){showPreviousSlide(); clearInterval(timerAutoPlay);} );
    nextButton.addEventListener('click', function(){showNextSlide(); clearInterval(timerAutoPlay);});
    
    function showPreviousSlide() {        
        if (slideIndex>0)
        slideIndex = slideIndex-1;        
        updateSlider();
    }

    
    function showNextSlide() {        
        if (slideIndex<(slideCount/slideCountInPage-1))
        slideIndex = slideIndex+1;
        updateSlider();
    }

    
    function updateSlider() { 
        let marginWidth=slideCountInPage*slideWidth;
        let marginGap = (slideCountInPage)*slideMargin;
        let endPos=-1*slideIndex*(marginGap+marginWidth);

        slider.classList.add('animation-onset-grid');
        setTimeout(function(){slider.classList.remove('animation-onset-grid');}, 3000);
        

        slider.style.marginLeft = endPos + "px";        
        if ((slideIndex+1)*slideCountInPage<=slideCount)
            textCurrent.innerHTML=(slideIndex+1)*slideCountInPage;
            else
            textCurrent.innerHTML=slideCount;    
        
    }
    function autoPlay()
    {
        if (slideIndex==0)
            isPlus=true;
        if (slideIndex==slideCount/slideCountInPage-1)
            isPlus=false;

        if (isPlus)
            showNextSlide();
        if (!isPlus)
            showPreviousSlide();
        
    }
    let timerAutoPlay=setInterval(function() {autoPlay()}, 4000);
    
    updateSlider();
}

function sliderStages() {

    const slider = document.querySelector(".stages-points");
    const prevButton = document.querySelector('.stages-points__slider__control__arrow-1');
    const nextButton = document.querySelector('.stages-points__slider__control__arrow-2');
    const columnCurrent = document.querySelector('.stages-points__slider__control__points');  
    
    const slides = Array.from(slider.children);
    const pointsCurrent = Array.from(columnCurrent.children);
    const slideCount = 4;    
    let slideIndex = 0;
    
    prevButton.addEventListener('click', function(){showPreviousSlide();} );
    nextButton.addEventListener('click', function(){showNextSlide();});
    
    function showPreviousSlide() {
        
        if (slideIndex>0)
            slideIndex = slideIndex-1;        
        updateSlider();
    }

    
    function showNextSlide() {
        
        if (slideIndex<=3)
            slideIndex = slideIndex+1;
        updateSlider();
    }    
   
    function updateSlider() {
        switch(slideIndex) {
            case 0:                
                slides[0].classList.add('animation-onset');
                slides[1].classList.add('animation-onset');

                if (slides[2].classList.contains('animation-onset'))
                    slides[2].classList.remove('animation-onset')
                if (slides[3].classList.contains('animation-onset'))
                    slides[3].classList.remove('animation-onset')
                
                slides[0].style.display='block';
                slides[1].style.display='block';


                pointsCurrent[0].classList.add('stages-points__slider__control__points--current');
                if (pointsCurrent[1].classList.contains('stages-points__slider__control__points--current'))
                    pointsCurrent[1].classList.remove('stages-points__slider__control__points--current');
                
                prevButton.style.opacity = '0.2';
                nextButton.style.opacity = '1';
              break;
          
            case 1:  
                slides[0].style.display='none';
                slides[1].style.display='none';                
                //slides[2].style.gridRow='2';
                slides[2].style.gridRowStart= '1';
                slides[2].style.gridRowEnd='3';   

                if (slides[0].classList.contains('animation-onset'))
                    slides[0].classList.remove('animation-onset');
                if (slides[1].classList.contains('animation-onset'))
                    slides[1].classList.remove('animation-onset');
                if (slides[4].classList.contains('animation-onset'))
                    slides[4].classList.remove('animation-onset');
                if (slides[5].classList.contains('animation-onset'))
                    slides[5].classList.remove('animation-onset');

                slides[2].classList.add('animation-onset');
                slides[3].classList.add('animation-onset');           

                slides[2].style.display='block';
                slides[3].style.display='block';
                slides[4].style.display='block';
                slides[5].style.display='block';
                slides[6].style.display='none'; 


                if (pointsCurrent[0].classList.contains('stages-points__slider__control__points--current'))
                    pointsCurrent[0].classList.remove('stages-points__slider__control__points--current');
               
                    pointsCurrent[1].classList.add('stages-points__slider__control__points--current');
                if (pointsCurrent[2].classList.contains('stages-points__slider__control__points--current'))
                    pointsCurrent[2].classList.remove('stages-points__slider__control__points--current');
                

                prevButton.style.opacity = '1';
                nextButton.style.opacity = '1';
              break;
            case 2:
                 
                slides[2].style.display='none';
                //slides[3].style.display='none';                
                slides[6].style.display='none'; 

                if (slides[2].classList.contains('animation-onset'))
                    slides[2].classList.remove('animation-onset');
                //if (slides[3].classList.contains('animation-onset'))
                    //slides[3].classList.remove('animation-onset');
                if (slides[6].classList.contains('animation-onset'))
                    slides[6].classList.remove('animation-onset');
           
            
                slides[3].classList.add('animation-onset');
                slides[4].classList.add('animation-onset');
                slides[3].style.display='block';
                slides[4].style.display='block';     
                
                if (pointsCurrent[1].classList.contains('stages-points__slider__control__points--current'))
                    pointsCurrent[1].classList.remove('stages-points__slider__control__points--current');
                pointsCurrent[2].classList.add('stages-points__slider__control__points--current');
                if (pointsCurrent[3].classList.contains('stages-points__slider__control__points--current'))
                    pointsCurrent[3].classList.remove('stages-points__slider__control__points--current');
              

                prevButton.style.opacity = '1';
                nextButton.style.opacity = '1';
              break;
            case 3:
                 
              slides[3].style.display='none';
              slides[4].style.display='none';
              //slides[3].style.display='none';                
              slides[6].style.display='none'; 

              if (slides[3].classList.contains('animation-onset'))
                  slides[3].classList.remove('animation-onset');
              if (slides[4].classList.contains('animation-onset'))
                  slides[4].classList.remove('animation-onset');
              if (slides[6].classList.contains('animation-onset'))
                  slides[6].classList.remove('animation-onset');
         
          
              slides[5].classList.add('animation-onset');
              //slides[5].classList.add('animation-onset');
              slides[5].style.display='block';
              //slides[4].style.display='block';     
              
              if (pointsCurrent[2].classList.contains('stages-points__slider__control__points--current'))
                  pointsCurrent[2].classList.remove('stages-points__slider__control__points--current');
              pointsCurrent[3].classList.add('stages-points__slider__control__points--current');
              if (pointsCurrent[4].classList.contains('stages-points__slider__control__points--current'))
                  pointsCurrent[4].classList.remove('stages-points__slider__control__points--current');
            

              prevButton.style.opacity = '1';
              nextButton.style.opacity = '1';
            break;
            case 4:
                slides[3].style.display='none';
                slides[4].style.display='none';
                slides[5].style.display='none';
                slides[6].style.gridColumn='1';
                if (slides[4].classList.contains('animation-onset'))
                    slides[4].classList.remove('animation-onset');
                if (slides[5].classList.contains('animation-onset'))
                    slides[5].classList.remove('animation-onset');
                
                slides[6].classList.add('animation-onset');
                slides[6].style.display='block';
                
                

                
                if (pointsCurrent[3].classList.contains('stages-points__slider__control__points--current'))
                    pointsCurrent[3].classList.remove('stages-points__slider__control__points--current');
                pointsCurrent[4].classList.add('stages-points__slider__control__points--current');

                prevButton.style.opacity = '1';
                nextButton.style.opacity = '0.2';
              break;           
            default:              
              break;
          }
         
                
    }
    
}
function runningLine(){
    let windowWidth=window.innerWidth;
    //let lineWidth= 4580;
    let lineWidth= 2378;
    let offsetAnimation = Math.floor((lineWidth*100)/windowWidth)*-1;
    const runningLines = document.querySelectorAll('.running-line span');
    console.log(windowWidth);
    console.log(offsetAnimation);
    const runLine =  [
        { transform: 'translateX(0)'},
        { transform: 'translateX('+offsetAnimation+'%)'},
       ];
    const runLineTiming = {
        duration: 10000,
        iterations: Infinity,
      };
    for (let i=0; i<2; i++) {
        runningLines[i].animate(runLine, runLineTiming)
           
    }
}


if( window.innerWidth <= 1366 ){
    document.addEventListener("DOMContentLoaded", sliderStages);
}
document.addEventListener("DOMContentLoaded", sliderMembers);
document.addEventListener("DOMContentLoaded", runningLine);
    