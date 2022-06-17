var timelineHeight = document.querySelector('.timeline-content').clientHeight;
var timelineScrollBar = document.querySelector('.timeline-content__scrollbar');


document.addEventListener('scroll', function(e) {

    //Specify the screen position the scrollbar should "stick" to 
    //when scrolling through timeline (vertical center of page)
    var documentFocusHeight = window.innerHeight / 2;

    //Calculate padding to offset the scrollbar overflow
    var offsetHeight = document.querySelector('.experience-tile--content').clientHeight / 2;
    var timelineHeight = document.querySelector('.timeline-content').getBoundingClientRect().height;
    var timelineBottom = document.querySelector('.timeline-content').getBoundingClientRect().bottom;
    var percentScroll = (timelineBottom / timelineHeight * 100) + "%";

    //Calculate where the scrollbar should stick to when scrolling through the timeline
    timelineScrollBar.style.bottom = "calc(" + percentScroll + " - " + documentFocusHeight + "px)";
   
    //Bounds checking for scrollbar overflow
    if (parseInt(getComputedStyle(timelineScrollBar).bottom, 10) > (timelineHeight - offsetHeight)) {
        timelineScrollBar.style.bottom = "100%";
    }

    //Bounds checking for scrollbar underflow
    else if (parseInt(getComputedStyle(timelineScrollBar).bottom, 10) < offsetHeight) {
        timelineScrollBar.style.bottom = "8em";
    }

    //Highlight bullet points when they pass through the screen focus boundary
    document.querySelectorAll('.experience-tile--bullet').forEach(bullet => {
       if ((bullet.getBoundingClientRect().top / window.innerHeight) < 0.5) {
        bullet.classList.add("bullet--active");
       }
       else {
        bullet.classList.remove("bullet--active");
       }
      })
  });