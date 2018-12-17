var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalButtonNo = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta')
//console.dir(backdrop);
//console.dir(selectPlanButtons);
//console.dir(backdrop.style.backgroundImage) or console.dir(backdrop.style[background-image]);

for(var i = 0; i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', function(){
        //modal.style.display = 'block';
        //backdrop.style.display = 'block';
        //modal.className = 'open'; // this will actually overwrite the complete class list
        modal.classList.add('open');
        backdrop.style.display = "block";
        setTimeout(function(){
            backdrop.classList.add('open');   
         }, 10);
    });
}

/* modalButtonNo.addEventListener('click', function(){
    modal.style.display = 'none';
    backdrop.style.display = 'none';
});

backdrop.addEventListener('click', function(){
    modal.style.display = 'none';
    backdrop.style.display = 'none';
    mobileNav.style.display = 'none';   
});

or */

function closeModal(){
   // modal.style.display = 'none';
   // backdrop.style.display = 'none';
   if(modal){
   modal.classList.remove('open');
}
   backdrop.classList.remove('open');
   setTimeout(function(){
       backdrop.style.display = "none";
   }, 200);
}

if(modalButtonNo){
modalButtonNo.addEventListener('click', closeModal);
}


backdrop.addEventListener('click', function(){
    //mobileNav.style.display = 'none';  
    mobileNav.classList.remove('open');
    closeModal(); 
});


toggleButton.addEventListener('click', function(){
    //mobileNav.style.display = 'block';
    //backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.style.display = "block";
    setTimeout(function(){
       backdrop.classList.add('open');   
    }, 10);
     
});

ctaButton.addEventListener('animationstart', function(event){
    console.log('Animation started', event);
})
ctaButton.addEventListener('animationend', function(event){
    console.log('Animation ended', event);
})
ctaButton.addEventListener('animationiteration', function(event){
    console.log('Animation iteration', event);
})