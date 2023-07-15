function toggleNav() {
  const navigation = document.getElementById("navigation");
  const menuBar = document.getElementById("menu-bar");

  navigation.classList.toggle("responsive");

  if (navigation.style.transform === "translateX(-100%)") {
    navigation.style.transform = "translateX(0)";
    menuBar.style.transform = "translateX(30%)";
  } else {
    navigation.style.transform = "translateX(-100%)";
    menuBar.style.transform = "translateX(0)";
  }
}

  $(function(){
    $('.carousel-item').eq(0).addClass('active');
    var total = $('.carousel-item').length;
    var current = 0;
    $('#moveRight').on('click', function(){
      var next=current;
      current= current+1;
      setSlide(next, current);
    });
    $('#moveLeft').on('click', function(){
      var prev=current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide= current;
      if(next>total-1){
       slide=0;
        current=0;
      }
      if(next<0){
        slide=total - 1;
        current=total - 1;
      }
             $('.carousel-item').eq(prev).removeClass('active');
             $('.carousel-item').eq(slide).addClass('active');
        setTimeout(function(){
  
        },800);
      console.log('current '+current);
      console.log('prev '+prev);
    }


    var videoPlayer = document.getElementById('videoPlayer');
    var screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      videoPlayer.removeAttribute('autoplay');
      videoPlayer.setAttribute('controls', '');
    }
    if (!videoPlayer.hasAttribute('autoplay')) {
      videoPlayer.setAttribute('controls', '');
    }
  
  });

  window.addEventListener("resize", function() {
    var img_home = document.querySelector('.img_home_bg');
    var img_second = document.querySelector('img_second');
    var img_contact = document.querySelector('img_contact');
    var screenWidth = window.innerWidth;
  
    if (screenWidth <= 768) {
      img_home.src = 'images/phone_main.jpg';
      img_second.src = "images/phone_second.jpg"
      img_contact.src = "images/phone_contact.jpg"
    } else {
      img_home.src = 'images/home_bg2.png';
      img_second.src = "images/second_main.png"
      img_contact.src = "images/contact.jpg"
    }
  });


