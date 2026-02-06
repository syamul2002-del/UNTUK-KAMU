let i = 0;
const slides = document.querySelectorAll('.slide');
const music = document.getElementById('music');

function next(){
  if(i === 0) music.play();

  slides[i].classList.remove("active");
  i++;
  slides[i].classList.add("active");

  typeSlide(slides[i]);
}



function jawab(){
  const avatar = document.getElementById("avatar");
  const popup = document.getElementById("popup");

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
let scale = 1;
let kaburCount = 0;

function kabur(){
  const no = document.getElementById("noBtn");
  const yes = document.getElementById("yesBtn");
  const text = document.getElementById("kaburText");

  kaburCount++;

  if(kaburCount <= 3){
    const x = Math.random()*60 - 30;
    const y = Math.random()*40 - 20;
    no.style.transform = `translate(${x}px, ${y}px)`;

    scale += 0.1; // membesar pelan
    yes.style.transform = `scale(${scale})`;

    text.style.display = "block";
  }else{
    no.style.display = "none";
  }
}


function jawabYa(){
  // ledakan hati
  for(let i=0;i<15;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤";
    h.style.left="50%";
    h.style.bottom="50%";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),1800);
  }

  // konfeti
  for(let i=0;i<20;i++){
    const c=document.createElement("div");
    c.className="confetti";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),1500);
  }

  tampilpopup(
    "💖 YEAY!",
    "Aku seneng banget 🤍<br>Makasih udah mau"
  );
}
function typeText(el, speed = 40){
  const text = el.dataset.text;
  el.textContent = "";
  let i = 0;

  // cursor baru muncul SAAT ngetik
  el.style.borderRight = "2px solid rgba(255,255,255,.8)";
  el.style.animation = "blink .8s step-end infinite";

  const typing = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if(i >= text.length){
      clearInterval(typing);
      el.style.borderRight = "none";
      el.style.animation = "none";
    }
  }, speed);
}


function typeSlide(slide){
  const texts = slide.querySelectorAll(".type");
  let delay = 0;

  texts.forEach(el => {
    setTimeout(() => typeText(el), delay);
    delay += el.dataset.text.length * 40 + 300;
  });
}

typeSlide(slides[0]);

