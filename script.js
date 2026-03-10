let i = 0;
const slides = document.querySelectorAll('.slide');
const music = document.getElementById('music');

/* =========================
   ENVELOPE OPEN
========================= */

function openEnvelope(){
  const envelope = document.querySelector('.envelope');
  const overlay = document.getElementById('envelopeOverlay');
  const mainCard = document.getElementById('mainCard');

  envelope.classList.add('open');

  music.currentTime = 9;
  music.volume = 0.4;
  music.play().catch(() => {});

  setTimeout(() => {
    overlay.classList.add('hide');
    mainCard.style.display = 'block';
    typeSlide(slides[0]);
  }, 400);

  setTimeout(() => {
    overlay.style.display = 'none';
  }, 1000);
}

/* =========================
   SLIDE CONTROL
========================= */

function next(){
  slides[i].classList.remove("active");
  i++;

  if(i < slides.length){
    slides[i].classList.add("active");
    typeSlide(slides[i]);
  }
}

/* =========================
   TYPING EFFECT
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
    const text = el.getAttribute("data-text");
    if(!text) return;

    setTimeout(() => {
      typeText(el, text);
    }, delay);

    delay += text.length * 40 + 300;
  });
}

/* =========================
   EFEK HATI
========================= */

function heartEffect(symbol="❤"){
  for(let i=0;i<15;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.innerHTML=symbol;
    h.style.left="50%";
    h.style.bottom="50%";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),1800);
  }
}

/* =========================
   JAWAB YA
========================= */

function jawab(){
  const popup = document.getElementById("popup");

  heartEffect("❤");

  setTimeout(()=>{
    popup.classList.add("show");
  },500);

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

/* =========================
   POPUP PERJUANGKAN
========================= */

function perjuangkanPopup(){
  const popup = document.getElementById("perjuangkanPopup");

  heartEffect("❤");

  setTimeout(()=>{
    popup.classList.add("show");
  },500);

  // kirim ke email
  fetch("https://formspree.io/f/mykdgoly", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({
      message: "Dia menekan tombol BOLEH PERJUANGKANMU 💘"
    })
  }).catch(() => {});
}

function closePerjuangkanPopup(){
  document.getElementById("perjuangkanPopup").classList.remove("show");
}
/* =========================
   TOMBOL TEMAN KABUR
========================= */

let temanClickCount = 0;

function kaburTeman(){

  const noBtn = document.getElementById("temanNoBtn");
  const yesBtn = document.querySelector("#temanChoice .yes");

  temanClickCount++;

  if(temanClickCount >= 3){

    // tombol temenan hilang
    noBtn.style.display = "none";

    // tombol boleh jadi besar
    yesBtn.style.transform = "scale(1.8)";
    yesBtn.style.transition = "0.3s";
    yesBtn.innerText = "Yaudah Boleh 💖";

    return;
  }

  // tombol kabur random
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;

  noBtn.style.position = "relative";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.style.transition = "0.2s";
}