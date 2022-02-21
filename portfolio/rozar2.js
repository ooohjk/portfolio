
let n = 1;
let m = 1;

$('#bars').click(function() {
    
    n++;

    if (n % 2 == 0) {
        
        $('#header1').css('transform', 'translate(0, 0)')
                     .css('opacity', '1');
        $('#bars > i').css('color', 'white');
        
    } else {
        
        $('#header1').css('transform', 'translate(-100%, 0)')
                     .css('opacity', '0');
        $('#bars > i').css('color', 'black');
        
    }
    
});

$('#home').click(function() {
    
    $('html, body').animate({
        scrollTop: $('#section1').position().top
    }, 1000);
    
});

$('#profile').click(function() {
    
    $('html, body').animate({
        scrollTop: $('#section2').position().top
    }, 1000);
    
});

$('#skill').click(function() {
    
    $('html, body').animate({
        scrollTop: $('#section3').position().top
    }, 1000);
    
});

$('#project').click(function() {
    
    m++;
    
    if (m % 2 == 0) {
        
        $('#java, #database, #server').css('visibility', 'visible');
                            //  .css('opacity', '1');
        
    } else {
        
        $('#java, #database, #server').css('visibility', 'hidden');
                            //  .css('opacity', '0');
        
    }
    
});

$('#server').click(function() {
    
    $('html, body').animate({
        scrollTop: $('#section4').position().top
    }, 1000);
    
});

$('#database').click(function() {
    
    $('html, body').animate({
        scrollTop: $('#section5').position().top
    }, 1000);
    
});

$('#java').click(function() {
    
    $('html, body').animate({
        scrollTop: $('#section6').position().top
    }, 1000);
    
});

$('.prev').mouseover(function() {
    
    $('.prev > i').css('opacity', '0.7')
    
});

$('.prev').mouseout(function() {
    
    $('.prev > i').css('opacity', '0.2')
    
});

$('.next').mouseover(function() {
    
    $('.next > i').css('opacity', '0.7')
    
});

$('.next').mouseout(function() {
    
    $('.next > i').css('opacity', '0.2')
    
});

const prevButton1 = document.querySelector('#sec4pr'); 
const nextButton1 = document.querySelector('#sec4nt'); 
const carousel1 = document.querySelector('#sec4car2');
const img1 = document.querySelectorAll('#sec4car2 > img');

let index1 = 0; 

prevButton1.addEventListener('click', () => { 
    if (index1 === 0) return; 
    index1 -= 1; 
    carousel1.style.transform = `translate3d(-${600 * index1}px, 0, 0)`; 
}); 

nextButton1.addEventListener('click', () => { 
    if (index1 === img1.length-1) return; 
    index1 += 1; 
    carousel1.style.transform = `translate3d(-${600 * index1}px, 0, 0)`; 
});

const prevButton2 = document.querySelector('#sec5pr'); 
const nextButton2 = document.querySelector('#sec5nt'); 
const carousel2 = document.querySelector('#sec5car2');
const img2 = document.querySelectorAll('#sec5car2 > img');

let index2 = 0; 

prevButton2.addEventListener('click', () => { 
    if (index2 === 0) return; 
    index2 -= 1; 
    carousel2.style.transform = `translate3d(-${600 * index2}px, 0, 0)`; 
}); 

nextButton2.addEventListener('click', () => { 
    if (index2 === img2.length-1) return; 
    index2 += 1; 
    carousel2.style.transform = `translate3d(-${600 * index2}px, 0, 0)`; 
});


const prevButton3 = document.querySelector('#sec6pr'); 
const nextButton3 = document.querySelector('#sec6nt'); 
const carousel3 = document.querySelector('#sec6car2');
const img3 = document.querySelectorAll('#sec6car2 > img');

let index3 = 0; 

prevButton3.addEventListener('click', () => { 
    if (index3 === 0) return; 
    index3 -= 1; 
    carousel3.style.transform = `translate3d(-${600 * index3}px, 0, 0)`; 
}); 

nextButton3.addEventListener('click', () => { 
    if (index3 === img3.length-1) return; 
    index3 += 1; 
    carousel3.style.transform = `translate3d(-${600 * index3}px, 0, 0)`; 
});


$('#sec6Div3').mouseover(() => {

    $('#sec6Div3 div').css('transform', 'translate(0px, -120px)')
                      .css('transition', 'all 1s');

});

$('#sec6Div3').mouseout(() => {

    $('#sec6Div3 div').css('transform', 'translate(0px, 0px)')
                      .css('transition', 'all 1s');

});

$('#sec5Div3').mouseover(() => {

    $('#sec5Div3 div').css('transform', 'translate(0px, -280px)')
                      .css('transition', 'all 2s');

});

$('#sec5Div3').mouseout(() => {

    $('#sec5Div3 div').css('transform', 'translate(0px, 0px)')
                      .css('transition', 'all 2s');

});

$('#sec4Div3').mouseover(() => {

    $('#sec4Div3 div').css('transform', 'translate(0px, -30px)')
                      .css('transition', 'all 1s');

});

$('#sec4Div3').mouseout(() => {

    $('#sec4Div3 div').css('transform', 'translate(0px, 0px)')
                      .css('transition', 'all 1s');

});

