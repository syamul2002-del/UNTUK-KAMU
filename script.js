let i = 0;
const slides = document.querySelectorAll('.slide');
const music = document.getElementById('music');

function openEnvelope(){
  const envelope = document.querySelector('.envelope');
  const overlay = document.getElementById('envelopeOverlay');
  const mainCard = document.getElementById('mainCard');
  
  envelope.classList.add('open');
  
  // Play music from second 9
  music.currentTime = 9;
  music.volume = 0.4;
  music.play().catch(() => {});
  
  setTimeout(() => {
    overlay.classList.add('hide');
    mainCard.style.display = 'block';
    
    // Start typing effect on first slide after envelope opens
    typeSlide(slides[0]);
  }, 400);
  
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 1000);
}

function next(){
  slides[i].classList.remove("active");
  i++;

  if(i < slides.length){
    slides[i].classList.add("active");
    typeSlide(slides[i]);
  }
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
    const text = el.getAttribute("data-text");
    if(!text) return;

    setTimeout(() => {
      typeText(el, text);
    }, delay);

    delay += text.length * 40 + 300;
  });
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

function perjuangkanPopup(){
  const popup = document.getElementById("perjuangkanPopup");
  
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
}

function closePerjuangkanPopup(){
  document.getElementById("perjuangkanPopup").classList.remove("show");
}

function temanPopup(){
  const popup = document.getElementById("temanPopup");
  
  for(let i=0;i<15;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.innerHTML="🤍";
    h.style.left="50%";
    h.style.bottom="50%";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),1800);
  }

  setTimeout(()=>{
    popup.classList.add("show");
  },500);
}

function closeTemanPopup(){
  document.getElementById("temanPopup").classList.remove("show");
}
