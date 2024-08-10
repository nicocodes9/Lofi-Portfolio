// function animateText(elementId) {
//   const element = document.getElementById(elementId);
//   const text = element.textContent;
//   const words = text.split(" ");

//   element.textContent = "";

//   words.forEach((word, index) => {
//     const span = document.createElement("span");
//     span.textContent = word + " ";
//     span.classList.add("fade-in"); // Add a class for CSS animation
//     element.appendChild(span);

//     // Optional: Add delay for each word
//     span.style.animationDelay = `${index * 0.2}s`; // Adjust delay as needed
//   });
// }

// // Example usage:
//  // Replace 'myText' with the ID of your element

function animateText(elementId) {
  const element = document.getElementById(elementId);
  const text = element.textContent;
  const words = text.split(" ");

  element.textContent = "";

  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    span.style.opacity = "0"; // Initial opacity
    element.appendChild(span);

    // Add a short delay for initial appearance
    setTimeout(() => {
      span.style.opacity = "1";
    }, index * 50); // Adjust delay as needed
  });
}
animateText("textContainer");
