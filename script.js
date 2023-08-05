const images = document.querySelectorAll('#galery img');
let imgActive = 0;
images[imgActive].classList.add('show');

//Masquer les photos sauf la 1ere
for(let i = 1; i < images.length; i += 1) {
    images[i].classList.add('hidden')
}

//Click sur bouton suivant
document.querySelector('#next').addEventListener('click', function(){
    next();
});

//Fonction pour photo suivante
const next = function(){
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive += 1;
    if (imgActive >= images.length) {
        imgActive = 0;
    }
    images[imgActive].classList.remove('hidden');
    setTimeout(function(){
        images[imgActive].classList.add('show');
    }, 300);
};

//Click sur bouton precedent
document.querySelector('#prev').addEventListener('click', function(){
    prev();
});

//Fonction pour photo precedente
const prev = function(){
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive -= 1;
    if (imgActive < 0) {
        imgActive = images.length - 1;
    }
    images[imgActive].classList.remove('hidden');
    setTimeout(function(){
        images[imgActive].classList.add('show');
    }, 300);
};


//Gestion touches Clavier
window.addEventListener('keydown', function(e) {
    if ( e.key == 'ArrowRight'){
        next();
    }
    if ( e.key == 'ArrowLeft'){
        prev();
    }
});