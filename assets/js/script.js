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


const reco = document.querySelectorAll('.reco span');

reco.forEach(txt =>{
    txt.innerHTML =txt.innerText
    
     .split('')
     
    .map((letter,idx)=> `<span style='transition-delay:${idx * 50}ms'>${letter}</span>`)
    
     .join('');

   
});



const letterLogo = document.querySelectorAll('.reco span span');
letterLogo.forEach((letter) =>{
   letter.addEventListener('mouseover' , ()=>{
    //    letter.style.color='red';
       letter.classList.toggle('transformUp')

       
   })
})

document.querySelector('.reco').addEventListener('mouseover',()=>{
    document.querySelector('.reco span').classList.toggle('rezak')
})

// ------------------vidoe----------------------
document.querySelector('.angledownV i').addEventListener('click',()=>{
    document.querySelector('.listV').classList.toggle('listVonoff')
})
document.querySelector('.angledownV i').addEventListener('click',()=>{
    document.querySelector('.angledownV i').classList.toggle('rotate')
})
// ------------------list 1----------------------
document.querySelector('.angleI1').addEventListener('click',()=>{
    document.querySelector('.listAlitems').classList.toggle('listalltimesm')
})
document.querySelector('.angleI1').addEventListener('click',()=>{
    document.querySelector('.angleI1').classList.toggle('rotate')
})
// ------------------list 2 ----------------------
document.querySelector('.angleI2').addEventListener('click',()=>{
    document.querySelector('.listAfter').classList.toggle('listalltimesm')
})
document.querySelector('.angleI2').addEventListener('click',()=>{
    document.querySelector('.angleI2').classList.toggle('rotate')
})
// ------------------list 3----------------------
document.querySelector('.angleI3').addEventListener('click',()=>{
    document.querySelector('.Premierep').classList.toggle('listalltimesm')
})
document.querySelector('.angleI3').addEventListener('click',()=>{
    document.querySelector('.angleI3').classList.toggle('rotate')
})
// ------------------list 4----------------------
document.querySelector('.angleI4').addEventListener('click',()=>{
    document.querySelector('.apple').classList.toggle('listalltimesm')
})
document.querySelector('.angleI4').addEventListener('click',()=>{
    document.querySelector('.angleI4').classList.toggle('rotate')
})
// ------------------list 5----------------------
document.querySelector('.angleI5').addEventListener('click',()=>{
    document.querySelector('.davinci').classList.toggle('listalltimesm')
})
document.querySelector('.angleI5').addEventListener('click',()=>{
    document.querySelector('.angleI5').classList.toggle('rotate')
})
// ------------------list 6----------------------
document.querySelector('.angleI6').addEventListener('click',()=>{
    document.querySelector('.motion').classList.toggle('listalltimesm')
})
document.querySelector('.angleI6').addEventListener('click',()=>{
    document.querySelector('.angleI6').classList.toggle('rotate')
})
// ------------------list 7----------------------
document.querySelector('.angleI7').addEventListener('click',()=>{
    document.querySelector('.davici2').classList.toggle('listalltimesm')
})
document.querySelector('.angleI7').addEventListener('click',()=>{
    document.querySelector('.angleI7').classList.toggle('rotate')
})
// ------------------list 8----------------------
document.querySelector('.angleI8').addEventListener('click',()=>{
    document.querySelector('.AddonsL').classList.toggle('listalltimesm')
})
document.querySelector('.angleI8').addEventListener('click',()=>{
    document.querySelector('.angleI8').classList.toggle('rotate')
})
// ------------------list 9----------------------
document.querySelector('.angleI9').addEventListener('click',()=>{
    document.querySelector('.vidmaker').classList.toggle('listalltimesm')
})
document.querySelector('.angleI9').addEventListener('click',()=>{
    document.querySelector('.angleI9').classList.toggle('rotate')
})




// ------------------------
document.querySelector('.closeL-sm i').addEventListener('click',()=>{
    document.querySelector('.container-list-sm').style.display='none';
   
});



document.querySelector('.logoToggle i').addEventListener('click',()=>{
    
    document.querySelector('.container-list-sm').style.display='block';
    

})
document.querySelector('.logoContact i').addEventListener('click',()=>{
    
    document.querySelector('.containerUser').style.display='block';

    

})
document.querySelector('.closeLogo i').addEventListener('click',()=>{
    
    document.querySelector('.containerUser').style.display='none';

    

})
// document.querySelector('.containerUser').addEventListener('click' , function(e){
//     e.stopPropagation()
// })


