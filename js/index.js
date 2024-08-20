var slideIndex;
  		function showSlides() {
      		var i;
      		var slides = document.getElementsByClassName("mySlides");
      		var dots = document.getElementsByClassName("dot");
      		for (i = 0; i < slides.length; i++) {
         		slides[i].style.display = "none";  
     		}
      		for (i = 0; i < dots.length; i++) {
          		dots[i].className = dots[i].className.replace(" active", "");
      		}
 
      		slides[slideIndex].style.display = "block";  
      		dots[slideIndex].className += " active";
      		slideIndex++;
      		if (slideIndex > slides.length - 1) {
        		slideIndex = 0
      		}    
      		setTimeout(showSlides, 3000);
  			}
  			showSlides(slideIndex = 0);
  			function currentSlide(n) {
    		showSlides(slideIndex = n);
  		}
		  function myFunction() {
			document.getElementById("myDropdown").classList.toggle("show");
		  }
		  
		  // Close the dropdown menu if the user clicks outside of it
		  window.onclick = function(event) {
			if (!event.target.matches('.dropbtn')) {
			  var dropdowns = document.getElementsByClassName("dropdown-content");
			  var i;
			  for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
				  openDropdown.classList.remove('show');
				}
			  }
			}
		  }
// Set the date we're counting down to
var countDownDate = new Date("Jun 23, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);