// // Form submission event listener
// document.getElementById("contact-form").addEventListener("submit", function(event) {
//     event.preventDefault();
//     // Get the message from the input field
//     var message = document.getElementById("message").value;
//     // Send the message to the Discord bot
//     sendMessageToDiscordBot(message);
// });

// // Function to send the message to the Discord bot
// function sendMessageToDiscordBot(message) {
//     // Your Discord bot's token
//     var botToken = "MTA2NjA1NjMxNTc3ODEyNTkyNA.GdYUbB.6eG3tYxiXx-6WFzDo4-rR3x7aJOzCdjI8GopA0";
//     // The ID of the Discord channel you want to send the message to
//     var channelId = "1066054133368500265/1066054133368500268";
//     // The message payload
//     var payload = {
//         "content": message
//     };
//     // Send the message to the Discord bot
//     fetch("https://discordapp.com/api/v6/channels/" + channelId + "/messages", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": "Bot " + botToken
//         },
//         body: JSON.stringify(payload)
//     })
//     .then(function(response) {
//         if (response.ok) {
//             // Message sent successfully
//             alert("Message sent!");
//         } else {
//             // An error occurred
//             alert("Error: " + response.statusText);
//         }
//     })
//     .catch(function(error) {
//         // An error occurred
//         alert("Error: " + error);
//     });
// }

const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

function readFunction1() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("read-more-button");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
      btnText.style.display = "none";
    }
  }

  function readFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("read-more-button2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnText.style.display = "none";
    }
  }

  function readFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("read-more-button3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnText.style.display = "none";
    }
  }