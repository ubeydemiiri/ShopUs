    document.addEventListener("DOMContentLoaded", function () {
        let carouselInner = document.querySelector(".carousel-inner-custom");
        let indicators = document.querySelectorAll(".carousel-indicators-custom button");
        let index = 0;
        let totalItems = document.querySelectorAll(".carousel-item-custom").length;
        let visibleItems = 3;

        function updateCarousel() {
            let offset = -index * (100 / visibleItems);
            carouselInner.style.transform = `translateX(${offset}%)`;
            
            indicators.forEach((btn, i) => {
                btn.classList.toggle("active", i === index);
            });
        }

        indicators.forEach((btn, i) => {
            btn.addEventListener("click", function () {
                index = i;
                updateCarousel();
            });
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "ArrowRight") {
                index = (index + 1) % (totalItems - visibleItems + 1);
                updateCarousel();
            }
            if (e.key === "ArrowLeft") {
                index = (index - 1 + (totalItems - visibleItems + 1)) % (totalItems - visibleItems + 1);
                updateCarousel();
            }
        });
    });


    function playVideo() {
        const iframe = document.getElementById('youtube-video');
        iframe.src += "&autoplay=1";
        document.querySelector('.play-button').style.display = 'none';
    }

    // script.js

document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
  
    // Hide preloader and show content after 3 seconds
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
      content.style.display = "block";
  
      // Fade in the content
      setTimeout(() => {
        content.style.opacity = "1";
      }, 100);
    }, 3000);
  });

  // وظيفة لفتح القسم المنبثق
  function openModal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-background").style.display = "block";
  }

  // وظيفة لإغلاق القسم المنبثق
  function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal-background").style.display = "none";
  }

  const modeSwitch = document.getElementById('modeSwitch');
  const body = document.body;
  
  modeSwitch.addEventListener('change', function() {
      if (this.checked) {
          body.classList.add('dark-mode');
      } else {
          body.classList.remove('dark-mode');
      }
  });
  
  AOS.init();

  