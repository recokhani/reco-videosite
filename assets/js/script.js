// const allitems = document.querySelector('.allItemes');
// const body = document.querySelector('body');

// allitems.addEventListener('mouseover', ()=>{
//     document.querySelector('.cont-drowp-alllist').classList.add('displayon');
// })
// allitems.addEventListener('click', ()=>{
//     document.querySelector('.cont-drowp-alllist').classList.add('displayon');
// })


//  body.addEventListener('click', ()=>{
//      document.querySelector('.cont-drowp-alllist').classList.remove('displayon');
    
//  })




// document.querySelector('.cont-drowp-alllist').addEventListener('click',function(e){
//     e.stopPropagation();
// })

// document.querySelector('#allitems-drowp').addEventListener('mouseover',()=>{
//     document.querySelector('#allitems-drowp').classList.add('bg-gray')
// })
// // document.querySelector('#allitems-drowp').addEventListener('mouseleave',()=>{
// //     document.querySelector('#allitems-drowp').classList.remove('bg-gray')
// // })



//  document.querySelector('.dropdown-menu').addEventListener('mouseover',function(e){
//     e.stopPropagation();
//  })
//  document.querySelector('#allitems-drowp').addEventListener('mouseover',function(e){
//     e.stopPropagation();
//  })

document.querySelector('#ourpro').addEventListener('mouseover', ()=>{
    document.querySelector('.containeroF-ourproducts').style.display="block"
})

 document.querySelector('.containeroF-ourproducts').addEventListener('click',function(e){
    e.stopPropagation();
 })


const body = document.querySelector('body');

 body.addEventListener('click', ()=>{
     document.querySelector('.containeroF-ourproducts').style.display='none';
    
 })

//  setTimeout(function(){
//     document.getElementById('reza').style.display = 'none';
//  }, 3000);  //5secs;
// window.setTimeout(doSomething, 1000); // 1000ms == 1 second
// var element = document.getElementById('reza');

// function doSomething() {
//     element.style.display = 'none';
// }


// document.querySelector('.cvTexton').addEventListener('mouseleave', ()=>{
//     document.querySelector('.text').style.display='none'
//  })
// const cvtext = document.querySelectorAll('.cvTexton')

// cvtext.forEach((cv)=>{
//     cv.addEventListener('mouseover', ()=>{
//         document.querySelector('.allCvText').style.display='block'
//     })
//     cv.addEventListener('mouseleave', ()=>{
//         document.querySelector('.allCvText').style.display='none'
//     })
// })


document.getElementById('partOne').addEventListener('mouseover' , ()=>{
    document.querySelector('.text').style.display='block'
})
document.getElementById('partOne').addEventListener('mouseleave' , ()=>{
    document.querySelector('.text').style.display='none'
})

document.getElementById('partTwo').addEventListener('mouseover' , ()=>{
    document.querySelector('.textO').style.display='block'
})
document.getElementById('partTwo').addEventListener('mouseleave' , ()=>{
    document.querySelector('.textO').style.display='none'
})
document.getElementById('partthr').addEventListener('mouseover' , ()=>{
    document.querySelector('.textT').style.display='block'
})
document.getElementById('partthr').addEventListener('mouseleave' , ()=>{
    document.querySelector('.textT').style.display='none'
})
document.getElementById('partfo').addEventListener('mouseover' , ()=>{
    document.querySelector('.textTR').style.display='block'
})
document.getElementById('partfo').addEventListener('mouseleave' , ()=>{
    document.querySelector('.textTR').style.display='none'
})



document.querySelector('.iconFootage i').addEventListener('click',()=>{
    document.querySelector('.dropListfootage').classList.toggle('dropListfootageOn')
})


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})