function initComparisons() {
    let x, i;

    x = document.getElementsByClassName("img-explore-overlay");
    for (i = 0; i < x.length; i++) {

      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider, img, clicked = 0, w, h;

      /* Ширина и высота картинки */

      w = 720;  
      h = 700;

      console.log(w)
      console.log(h)

      img.style.width = (w / 2 + 80) + "px";

      slider = document.createElement("DIV");
      slider.setAttribute("class", "img-explore-slider");

      img.parentElement.insertBefore(slider, img);

      slider.style.top = (h / 2) - (40 / 2) + "px";       /* (+80) стартовое положение слайдера в макете */
      slider.style.left = (w / 2 + 80) - (40 / 2) + "px"; /* (40/2) радиус слайдера */
                                                          /* Пришлось отказаться от offsetWidth и offsetHeight */
      slider.addEventListener("mousedown", slideReady);   /* Они постоянно выдавали разные знеачения при обновлении страницы */
                                                          /* Возможно нужно было попробовать как-то кешировать изначальные значения. Попробовать, если останется время */
      window.addEventListener("mouseup", slideFinish);

      slider.addEventListener("touchstart", slideReady);

      window.addEventListener("touchstop", slideFinish);
      function slideReady(e) {

        e.preventDefault();

        clicked = 1;

        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {

        clicked = 0;
      }
      function slideMove(e) {
        let pos;

        if (clicked == 0) return false;

        pos = getCursorPos(e)

        if (pos < 0) pos = 0;
        if (pos > w) pos = w;

        slide(pos);
      }
      function getCursorPos(e) {
        let a, x = 0;
        e = e || window.event;

        a = img.getBoundingClientRect();

        x = e.pageX - a.left;

        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        img.style.width = x + "px";
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }
  initComparisons()