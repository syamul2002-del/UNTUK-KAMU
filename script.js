let i = 0;
const slides = document.querySelectorAll('.slide');
const music = document.getElementById('music');

function next(){
  if(i === 0) music.play();
  slides[i].classList.remove('active');
  i++;
  slides[i].classList.add('active');
}

function jawab(){
  const avatar=document.getElementById("avatar");
  const popup=document.getElementById("popup");

  avatar.classList.remove("love");
  void avatar.offsetWidth;
  avatar.classList.add("love");

  for(let j=0;j<6;j++){
    const h=document.createElement('div');
    h.className='heart';
    h.innerHTML='❤';
    h.style.left=(45+Math.random()*10)+'vw';
    h.style.bottom='45%';
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),1800);
  }

  setTimeout(()=>{
    popup.classList.add("show");
  },500);
}

function closePopup(){
  document.getElementById("popup").classList.remove("show");
}
function playMusic(){
  music.volume = 0.4;
  music.play();
}
