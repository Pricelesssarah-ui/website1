//scroll button part

let scrolltop = document.querySelector('.scrolltop');
window.addEventListener('scroll', function(){
    if(pageYOffset > 300){
        scrolltop.style.display = 'block';
    }
    else {
        scrolltop.style.display = 'none';
    }
})
scrolltop.addEventListener('click', function(){
    scrollTo(0,0);
})


let toggle = document.querySelector('.icon1');
let nav = document.querySelector('.navbar-nav');

toggle.addEventListener('click', () => {
    if(nav.style.display == 'block'){
        nav.style.display = "none";
    }
    else {
        nav.style.display = "block";
    }
   
})


//Our Menu

 let showAll = document.querySelector('.btn-show');
 let starters = document.querySelector('.btn-starters');
 let salad = document.querySelector('.btn-salad');
 let specialty = document.querySelector('.btn-specialty');


 let containerAll = document.querySelector('.container-all');
 let containerStarters = document.querySelector('.container-starters');
 let containerSalad = document.querySelector('.container-salad');
 let containerSpecialty = document.querySelector('.container-specialty');


showAll.addEventListener('click', () => {
    containerAll.style.display = 'block';
    containerStarters.style.display = 'none';
    containerSalad.style.display = 'none';
    containerSpecialty.style.display = 'none';
    showAll.classList.add('active-2');
    starters.classList.remove('active-2');
    salad.classList.remove('active-2');
    specialty.classList.remove('active-2');
})

starters.addEventListener('click', () => {
    containerAll.style.display = 'none';
    containerStarters.style.display = 'block';
    containerSalad.style.display = 'none';
    containerSpecialty.style.display = 'none';
    showAll.classList.remove('active-2');
    starters.classList.add('active-2');
    salad.classList.remove('active-2');
    specialty.classList.remove('active-2');
})
salad.addEventListener('click', () => {
    containerAll.style.display = 'none';
    containerStarters.style.display = 'none';
    containerSalad.style.display = 'block';
    containerSpecialty.style.display = 'none';
    showAll.classList.remove('active-2');
    salad.classList.add('active-2');
    starters.classList.remove('active-2');
    specialty.classList.remove('active-2');
})

specialty.addEventListener('click', () => {
    containerAll.style.display = 'none';
    containerStarters.style.display = 'none';
    containerSalad.style.display = 'none';
    containerSpecialty.style.display = 'block';
    showAll.classList.remove('active-2');
    specialty.classList.add('active-2');
    starters.classList.remove('active-2');
    salad.classList.remove('active-2');
})



//Our Special

let list1 = document.querySelector('.listBtn1');
let list2 = document.querySelector('.listBtn2');
let list3 = document.querySelector('.listBtn3');
let list4 = document.querySelector('.listBtn4');
let list5 = document.querySelector('.listBtn5');

let txt1 = document.querySelector('.txt1');
let txt2 = document.querySelector('.txt2');
let txt3 = document.querySelector('.txt3');
let txt4 = document.querySelector('.txt4');
let txt5 = document.querySelector('.txt5');

let image1 = document.querySelector('.image1');
let image2 = document.querySelector('.image2');
let image3 = document.querySelector('.image3');
let image4 = document.querySelector('.image4');
let image5 = document.querySelector('.image5');

list1.addEventListener('click', () => {
    txt1.style.display = 'block';
    txt2.style.display = 'none';
    txt3.style.display = 'none';
    txt4.style.display = 'none';
    txt5.style.display = 'none';

    image1.style.display = 'block';
    image2.style.display = 'none';
    image3.style.display = 'none';
    image4.style.display = 'none';
    image5.style.display = 'none';

    list1.classList.add('activeListBtn');
    list2.classList.remove('activeListBtn');
    list3.classList.remove('activeListBtn');
    list4.classList.remove('activeListBtn');
    list5.classList.remove('activeListBtn');
})


list2.addEventListener('click', () => {
    txt1.style.display = 'none';
    txt2.style.display = 'block';
    txt3.style.display = 'none';
    txt4.style.display = 'none';
    txt5.style.display = 'none';

    image1.style.display = 'none';
    image2.style.display = 'block';
    image3.style.display = 'none';
    image4.style.display = 'none';
    image5.style.display = 'none';

    list1.classList.remove('activeListBtn');
    list2.classList.add('activeListBtn');
    list3.classList.remove('activeListBtn');
    list4.classList.remove('activeListBtn');
    list5.classList.remove('activeListBtn');
})

list3.addEventListener('click', () => {
    txt3.style.display = 'block';
    txt1.style.display = 'none';
    txt2.style.display = 'none';
    txt4.style.display = 'none';
    txt5.style.display = 'none';

    image3.style.display = 'block';
    image1.style.display = 'none';
    image2.style.display = 'none';
    image4.style.display = 'none';
    image5.style.display = 'none';

    list1.classList.remove('activeListBtn');
    list2.classList.remove('activeListBtn');
    list3.classList.add('activeListBtn');
    list4.classList.remove('activeListBtn');
    list5.classList.remove('activeListBtn');
})

list4.addEventListener('click', () => {
    txt4.style.display = 'block';
    txt1.style.display = 'none';
    txt2.style.display = 'none';
    txt3.style.display = 'none';
    txt5.style.display = 'none';

    image4.style.display = 'block';
    image1.style.display = 'none';
    image2.style.display = 'none';
    image3.style.display = 'none';
    image5.style.display = 'none';

    list1.classList.remove('activeListBtn');
    list2.classList.remove('activeListBtn');
    list3.classList.remove('activeListBtn');
    list4.classList.add('activeListBtn');
    list5.classList.remove('activeListBtn');
})

list5.addEventListener('click', () => {
    txt5.style.display = 'block';
    txt1.style.display = 'none';
    txt2.style.display = 'none';
    txt3.style.display = 'none';
    txt4.style.display = 'none';
    

    image5.style.display = 'block';
    image1.style.display = 'none';
    image2.style.display = 'none';
    image3.style.display = 'none';
    image4.style.display = 'none';
    

   list1.classList.remove('activeListBtn');
    list2.classList.remove('activeListBtn');
    list3.classList.remove('activeListBtn');
    list4.classList.remove('activeListBtn');
    list5.classList.add('activeListBtn');
})