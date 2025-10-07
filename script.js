<script>
  // 🔹 Tarjimalar
  const translations = {
    uz: { 
      title:"Exclusive Academy – O'quv Markazi", 
      logo:"Exclusive Academy", 
      hero_title:"Exclusive Academy – kelajak kaliti ✨", 
      hero_text:"Exclusive Academy – bu nafaqat bilim olish joyi, balki kelajak sari dadil qadam qo‘yadigan maydon.", 
      see_courses:"📚 Kurslarimizni ko‘rish",
      name:"Ismingiz", 
      phone:"Telefon raqamingiz", 
      send:"Yuborish",
      course_en:"Ingliz tili", 
      course_ielts:"IELTS", 
      course_ru:"Rus tili", 
      course_kr:"Koreys tili", 
      course_mob:"Mobilografiya",
      course_prez:"Prezident maktabiga tayyorlov", 
      course_math:"Matematika", 
      course_law:"Huquq",
      address:"Manzil: Xorazm, Uzbekistan", 
      rights:"© 2025 Exclusive Academy – Barcha huquqlar himoyalangan" 
    },
    ru: { 
      title:"Exclusive Academy – Учебный Центр", 
      logo:"Эксклюзив Академия", 
      hero_title:"Exclusive Academy – ключ к будущему ✨", 
      hero_text:"Exclusive Academy – это не только место получения знаний, но и пространство для уверенного шага в будущее...", 
      see_courses:"📚 Смотреть курсы",
      name:"Ваше имя", 
      phone:"Ваш телефон", 
      send:"Отправить",
      course_en:"Английский язык", 
      course_ielts:"IELTS", 
      course_ru:"Русский", 
      course_kr:"Корейский", 
      course_mob:"Мобилография",
      course_prez:"Подготовка в президентскую школу", 
      course_math:"Математика", 
      course_law:"Право",
      address:"Адрес: Хорезм, Узбекистан", 
      rights:"© 2025 Exclusive Academy – Все права защищены" 
    },
    en: { 
      title:"Exclusive Academy – Learning Center", 
      logo:"Exclusive Academy", 
      hero_title:"Exclusive Academy – The Key to Future ✨", 
      hero_text:"Exclusive Academy is not just a place for learning, but a space to take confident steps toward the future...", 
      see_courses:"📚 View our courses",
      name:"Your Name", 
      phone:"Your Phone", 
      send:"Send",
      course_en:"English", 
      course_ielts:"IELTS", 
      course_ru:"Russian", 
      course_kr:"Korean", 
      course_mob:"Mobileography",
      course_prez:"Prep for Presidential School", 
      course_math:"Mathematics", 
      course_law:"Law",
      address:"Address: Khorezm, Uzbekistan", 
      rights:"© 2025 Exclusive Academy – All rights reserved" 
    }
  };

  // 🔹 Til o'zgartirish
  function setLanguage(lang){
    document.querySelectorAll("[data-key]").forEach(el=>{
      const key = el.getAttribute("data-key");
      if(translations[lang][key]) el.innerText = translations[lang][key];
    });
    // Form inputlar
    document.getElementById("name").placeholder = translations[lang].name;
    document.getElementById("phone").placeholder = translations[lang].phone;
    document.querySelector("button[type='submit']").innerText = translations[lang].send;
    // Title
    document.title = translations[lang].title;
    // Saqlash
    localStorage.setItem("lang", lang);
  }

  window.addEventListener("load", ()=>{
    const lang = localStorage.getItem("lang") || "uz";
    setLanguage(lang);
  });

  // 📌 Telefon input faqat raqam
  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function(){
    this.value = this.value.replace(/\D/g,'');
  });

  // 📌 Formani tekshirish
  const contactForm = document.querySelector("form");
  contactForm.addEventListener("submit", function(e){
    if(!document.getElementById("name").value.trim() || !phoneInput.value.trim()){
      e.preventDefault(); 
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
    }
  });

  // 🔹 Dark / Light mode
  const darkBtn = document.getElementById("darkToggle");
  darkBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode");
  });

  // 🔹 Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
    });
  });

  // 🔹 Kurs kartalari animatsiyasi
  const items = document.querySelectorAll('.course-card, section, form');
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.opacity=1;
        entry.target.style.transform="translateY(0)";
      }
    });
  }, {threshold:0.2});
  items.forEach(item=>{
    item.style.opacity=0;
    item.style.transform="translateY(40px)";
    item.style.transition="all 0.6s ease-out";
    observer.observe(item);
  });
</script>
