// Initialize the typing animation
const typingAnimationElement = document.getElementById('typing-animation');

// Create an array of typing text
const typingTexts = [
						'Engineer ',
                        'Coder ',
						'Java Backend Developer  ',
						'Java Full-Stack Developer  ',
						];

// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
// Loop through each character and add it to the element
for (let i = 0; i < text.length; i++) {
		setTimeout(() => {
		typingAnimationElement.textContent += text[i];
		}, i * 200); // Increase the delay to slow down the typing animation
	}

// Once the animation is complete, reset the text and start over
setTimeout(() => {
			typingAnimationElement.textContent = '';
			playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
			}, text.length * 200);
		}

// Start the typing animation loop
playTypingAnimation(typingTexts[0]);


// code for resume section active class identification
const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.tab-grid.resume-box');

// resume section when click on tab-list
resumeLists.forEach((list,idx) => {
  list.addEventListener('click', () => {

    //Code for activation Experience, Skills, Education
    const activeTab = document.querySelector('.resume-list.active');
    if (activeTab) activeTab.classList.remove('active'); // remove active from current
    list.classList.add('active'); // add active to clicked tab

    //Code for Populating values inside Experience, Skills, Education
    const activeTabo = document.querySelector('.tab-grid.resume-box.active');
    if (activeTabo) activeTabo.classList.remove('active');
    resumeBoxs[idx].classList.add('active');
  });
});


//Light mode colouring code

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () =>{  
    darkModeIcon.classList.toggle('bx-sun');
    darkModeIcon.classList.toggle('bx-moon');
    document.body.classList.toggle('dark-mode');

}

// Contact form other site redirection handling through below code

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    
if (response.ok) {
      status.innerHTML = `
        <p style="
          color: limegreen;
          width: 100%;
          max-width: 400px;
          padding: 1rem;
          margin: 2rem auto;
          text-align: center;
          font-size: 1.5rem;
          background-color: #e6ffe6;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 255, 0, 0.2);
        ">
          ✅ Thanks! Your message has been sent.
        </p>
      `;
      form.reset();
    } else {
      status.innerHTML = `
        <p style="
          color: red;
          width: 100%;
          max-width: 400px;
          padding: 1rem;
          margin: 2rem auto;
          text-align: center;
          font-size: 1.5rem;
          background-color: #ffe6e6;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
        ">
          ❌ Oops! Something went wrong. Please try again.
        </p>
      `;
    }

    // Remove the message after 10 seconds
    setTimeout(() => {
      status.innerHTML = '';
    }, 10000);
});


// Code for active session

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset  && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
};
