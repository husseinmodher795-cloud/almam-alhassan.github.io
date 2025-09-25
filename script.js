document.addEventListener("DOMContentLoaded", function () {
  // زر الرجوع داخل الشعار
  const backButton = document.querySelector(".back-button");
  if (backButton) {
    backButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "index.html";
    });
  }

  // تأثير دخول الصفحة
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1.5s ease-in-out";
    document.body.style.opacity = 1;
  }, 100);

  // تغيير لون العنوان عند المرور عليه
  const title = document.querySelector("h1");
  if (title) {
    title.addEventListener("mouseover", () => {
      title.style.color = "#ffcc00";
    });
    title.addEventListener("mouseout", () => {
      title.style.color = "#f0c040";
    });
  }

  // تنبيه عند مغادرة الصفحة
  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "هل أنت متأكد أنك تريد مغادرة الصفحة؟";
  });

  // زر تغيير حجم الخط
  const increaseBtn = document.getElementById("increase-font");
  const decreaseBtn = document.getElementById("decrease-font");
  if (increaseBtn) {
    increaseBtn.addEventListener("click", () => {
      document.body.style.fontSize = "20px";
    });
  }
  if (decreaseBtn) {
    decreaseBtn.addEventListener("click", () => {
      document.body.style.fontSize = "16px";
    });
  }

  // زر تبديل الوضع الليلي والنهاري
  const toggleBtn = document.getElementById("toggle-mode");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const body = document.body;
      if (body.style.backgroundColor === "white") {
        body.style.backgroundColor = "#000";
        body.style.color = "#fff";
      } else {
        body.style.backgroundColor = "white";
        body.style.color = "#000";
      }
    });
  }

  // مؤثر صوتي عند التنقل (يتطلب ملف click.mp3)
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      const audio = new Audio("click.mp3");
      audio.play();
    });
  });
});
