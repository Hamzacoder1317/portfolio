var typingEffect = new Typed(".lin3", {
    strings: ["Freelancer!", "Front end Developer", "Back end Developer", "Full Stack Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500

  });

  var typing = new Typed(".lin1", {
    strings: ["Stunning Imagery!", "Front end Developer", "Back end Developer", "Full Stack Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500

  });

  const navbar = document.querySelector(".navbar1");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) { // Adjust the scroll position as needed
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrollPercentage + '%';
  }

  window.addEventListener('scroll', updateProgressBar);

  const showButton = document.getElementById('showButton');

  window.addEventListener('scroll', () => {
    const scrollPercentage = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;

    if (scrollPercentage >= 40 && scrollPercentage <= 100) {
      showButton.style.display = 'block';
    } else {
      showButton.style.display = 'none';
    }
  });





  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.sidenav');
  //   var instances = M.Sidenav.init(elems, options);
  // });

  var form = document.getElementById("my-form");

async function handleSubmit(event) {
event.preventDefault();
var status = document.getElementById("my-form-status");
var data = new FormData(event.target);

try {
  const response = await fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    status.innerHTML = "Thanks for your submission!";
    status.style.opacity = 1; // Show the status message
    form.reset();
    setTimeout(function() {
      status.style.opacity = 0; // Hide the status message after 3 seconds
    }, 3000);
  } else {
    const responseData = await response.json();
    if (Object.hasOwnProperty.call(responseData, 'errors')) {
      status.innerHTML = responseData["errors"].map(error => error["message"]).join(", ");
    } else {
      status.innerHTML = "Oops! There was a problem submitting your form";
    }
    status.style.opacity = 1; // Show the status message
    setTimeout(function() {
      status.style.opacity = 0; // Hide the status message after 3 seconds
    }, 3000);
  }
} catch (error) {
  status.innerHTML = "Oops! There was a problem submitting your form";
  status.style.opacity = 1; // Show the status message
  setTimeout(function() {
    status.style.opacity = 0; // Hide the status message after 3 seconds
  }, 3000);
}
}

form.addEventListener("submit", handleSubmit);


document.addEventListener('DOMContentLoaded', function () {
          // Find the email element and the copy button
          var emailElement = document.getElementById('email-to-copy');
          var copyButton = document.getElementById('copy-button');
          var copiedMessage = document.getElementById('copied-message');

          // Add click event listener to the copy button
          copyButton.addEventListener('click', function () {
              // Create a range and select the text
              var range = document.createRange();
              range.selectNode(emailElement);
              window.getSelection().removeAllRanges();
              window.getSelection().addRange(range);

              // Use the Clipboard API to copy the text
              document.execCommand('copy');

              // Clear the selection
              window.getSelection().removeAllRanges();

              // Show the "Copied!" message
              copiedMessage.style.display = 'block';

              // Hide the "Copied!" message after 2 seconds
              setTimeout(function () {
                  copiedMessage.style.display = 'none';
              }, 2000);
          });
      });