// img Slider


let thumbOne = document.querySelector('.thumb1');
let thumbTwo = document.querySelector('.thumb2');
let thumbThree = document.querySelector('.thumb3');
let thumbFour = document.querySelector('.thumb4');
let thumbFive = document.querySelector('.thumb5');

function slideImage(image){
    document.querySelector('.imgPrincipal').src = image;
}

thumbOne.addEventListener('click', function(){slideImage('./img/thumb1.svg')});
thumbOne.addEventListener('click', function(){changeBg('./img/Backgrounds1.svg', 'no-repeat', 'fixed', 'cover', 'auto')});

thumbTwo.addEventListener('click', function(){slideImage('./img/thumb2.svg')});
thumbTwo.addEventListener('click',function(){changeBg('./img/Backgrounds2.svg', 'no-repeat', 'fixed', 'cover', 'auto')});

thumbThree.addEventListener('click', function(){slideImage('./img/thumb3.svg')});
thumbThree.addEventListener('click', function(){changeBg('./img/Backgrounds3.svg', 'no-repeat', 'fixed', 'cover', 'auto')});

thumbFour.addEventListener('click', function(){slideImage('./img/thumb4.svg')});
thumbFour.addEventListener('click', function(){changeBg('./img/Backgrounds4.svg')});

thumbFive.addEventListener('click', function(){slideImage('./img/thumb5.svg')});
thumbFive.addEventListener('click', function(){changeBg('./img/Backgrounds.svg', 'no-repeat', 'fixed', 'cover', 'auto')});


// change bg Color

function changeBg(imageBg,repeat,attachment, size, margin){
    let bgImage = document.getElementById('bgImage');
    bgImage.style.backgroundImage = `url('${imageBg}')`;
    bgImage.style.backgroundRepeat = repeat;
    bgImage.style.backgroundAttachment = attachment;
    bgImage.style.backgroundSize = size;
    bgImage.style.margin = margin;
    
}

