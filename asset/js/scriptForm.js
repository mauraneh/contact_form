const btncheck = document.querySelector('#remarkbtn');
const textremark = document.querySelector('#remarktext');

btncheck.addEventListener('click', function(){
    if (btncheck.checked){
        textremark.style.display = 'block';
    }
    else{
        textremark.style.display = 'none';
    }
});


