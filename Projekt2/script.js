var mybutton = document.getElementById("TopKnapp");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 600|| document.documentElement.scrollTop > 600) {
      TopKnapp.style.display = "block";
    } else {
      TopKnapp.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }