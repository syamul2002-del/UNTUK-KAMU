let i = 0;
const slides = document.querySelectorAll('.slide');
const music = document.getElementById('music');

function next(){
  if(i === 0) {
    music.volume = 0.4;
    music.play().catch(() => {});
  }

  slides[i].classList.remove("active");
  i++;

  if(i < slides.length){
    slides[i].classList.add("active");
    typeSlide(slides[i]);
  }
}

function playMusic(){
  music.volume = 0.4;
  music.play().catch(() => {});
}

/* =========================
   TYPING EFFECT (FIX AMAN)
========================= */

function typeText(element, text, speed = 50, callback){
  let index = 0;
  element.textContent = "";

  const typing = setInterval(() => {
    if(index < text.length){
      element.textContent += text.charAt(index);
      index++;
    }else{
      clearInterval(typing);
      if(callback) callback();
    }
  }, speed);
}

function typeSlide(slide){
  const texts = slide.querySelectorAll(".type");
  let delay = 0;

  texts.forEach(el => {
    const text = el.dataset.text;
    if(!text) return; // biar gak error

    setTimeout(() => {
      typeText(el, text);
    }, delay);

    delay += text.length * 40 + 300;
  });
}

typeSlide(slides[0]);

/* =========================
   TOMBOL GA MAU KABUR
========================= */

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

    scale += 0.1;
    yes.style.transform = `scale(${scale})`;

    text.style.display = "block";
  }else{
    no.style.display = "none";
  }
}

/* =========================
   JAWAB YA (POPUP + EFEK)
========================= */

function jawab(){
  const popup = document.getElementById("popup");

  // efek hati
  for(let i=0;i<15;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤";
    h.style.left="50%";
    h.style.bottom="50%";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),1800);
  }

  setTimeout(()=>{
    popup.classList.add("show");
  },500);

  // kirim email ke Formspree
  fetch("https://formspree.io/f/mykdgoly", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Dia menekan tombol MAU 💖"
    })
  }).catch(() => {});
}

function closePopup(){
  document.getElementById("popup").classList.remove("show");
}
