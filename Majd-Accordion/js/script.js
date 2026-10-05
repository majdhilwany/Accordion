document.querySelectorAll('.item').forEach(function(item){
var btn=item.querySelector('.q');
btn.addEventListener('click',function(){var opening=!item.classList.contains('open');
document.querySelectorAll('.item').forEach(function(o){o.classList.remove('open');o.querySelector('.q').setAttribute('aria-expanded','false');});
if(opening){item.classList.add('open');btn.setAttribute('aria-expanded','true');}});});
