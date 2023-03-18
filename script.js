//your JS code here. If required.
function updateOutput() {
  // Create a promise that resolves with "Hello, world!" after 1 second
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });

  // Update the text of the HTML element with ID "output" when the promise resolves
  promise.then((result) => {
    document.getElementById("output").textContent = result;
  });
}
