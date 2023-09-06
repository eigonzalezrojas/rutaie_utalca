'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

  });

}



/**
 * header sticky functionality
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 20 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 800 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


window.addEventListener('load', function(){
  var currentItem = null;
  var acordion = document.querySelector('.acord_container');
 
  acordion.onmouseenter = function(e){
   var items = document.querySelectorAll('.item_wrap');
    for(var i = 0; i<items.length; i++){
      if(!items[i].classList.contains('col_50')){
        items[i].classList.remove('col_30');
        items[i].classList.add('col_25');
      }
    }
  };
  
  acordion.onmouseover = function(e){
    if(currentItem){
      return;
    }
    var e = e || window.event;
    var target = e.target;  
    while(target != this){
       if(target.classList.contains('item_wrap')) break;
       target = target.parentNode;
    }
    if(target == this) return;
    
    currentItem = target;
    //action
  if(target.classList.contains('col_25')){
      target.classList.remove('col_25');
      target.classList.add('col_50');
      }else if(target.classList.contains('col_30')){
        target.classList.remove('col_30');
        target.classList.add('col_50');
      }else{
        target.classList.add('col_50');
      }
    target.querySelector('.item_text').classList.add('active');           
    target.querySelector('.item_btn').classList.add('active');     
    target.querySelector('.h1').classList.add('active');
  }
  
  acordion.onmouseout = function(e){
    var e = e || window.event;
    var target = e.target;
    if(!currentItem){
      return;
    }
    var relatedTarget =  e.relatedTarget;
    if(relatedTarget){
      while(relatedTarget){
        if(relatedTarget == currentItem) return;
        relatedTarget = relatedTarget.parentNode;
      }
    }
    while(target != this){
       if(target.classList.contains('item_wrap')) break;
       target = target.parentNode;
    }
    //action
    if(target.classList.contains('col_50')){
      target.classList.remove('col_50');
      target.classList.add('col_25');
    }
     target.querySelector('.item_text').classList.remove('active');
     target.querySelector('.item_btn').classList.remove('active');
    target.querySelector('.h1').classList.remove('active');
    currentItem = null;
  };
  
  acordion.onmouseleave = function(){
    var items = document.querySelectorAll('.item_wrap');
    for(var i = 0; i<items.length; i++){
      if(items[i].classList.contains('col_25')){
        items[i].classList.remove('col_25');
        items[i].classList.add('col_30');
      }
    }
  }
});