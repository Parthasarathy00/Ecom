<!-----------------js for toggle menu----------------->
<script>
var modal = document.getElementById('id01');
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display="none";
    }
}
</script>
<!-------Navigation bar-->
<script>
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
</script>


<!------slideshow container-->

<script>
	let slideIndex = 0;
	showSlides();
	
	function showSlides() {
	  let i;
	  let slides = document.getElementsByClassName("mySlides");
	  let dots = document.getElementsByClassName("dot");
	  for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	  }
	  slideIndex++;
	  if (slideIndex > slides.length) {slideIndex = 1}    
	  for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[slideIndex-1].style.display = "block";  
	  dots[slideIndex-1].className += " active";
	  setTimeout(showSlides, 2000); // Change image every 2 seconds
	}
	</script>
	

</body>
</html>
// Handle Login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUser = localStorage.getItem('username');
    const storedPass = localStorage.getItem('password');

    if (username === storedUser && password === storedPass) {
        alert('Login Successful!');
        window.location.href = 'pro.html';
    } else {
        alert('Invalid username or password');
    }
});

// Handle Registration
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    alert('Registration Successful!');
});
