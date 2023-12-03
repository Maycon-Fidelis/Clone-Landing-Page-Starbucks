const click = document.querySelector('.header_hidden_button');
const header_hidden_li = document.querySelector('.header_hidden_li');
const header_hidden_button_close = document.querySelector('.header_hidden_button_close');
const header_hidden_button = document.querySelector('.header_hidden_button');
const header_hidden_button_close_a = document.querySelector('.header_hidden_button_close')

click.onclick = function(){
    header_hidden_li.classList.add('active');
    header_hidden_button_close.classList.add('active');
    header_hidden_button.classList.add('active');
}

header_hidden_button_close_a.onclick = function() {
    header_hidden_li.classList.remove('active');
    header_hidden_button_close.classList.remove('active');
    header_hidden_button.classList.remove('active');
}
