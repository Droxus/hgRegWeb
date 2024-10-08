console.log("Hello router handler!");

// Function to add a message div to the page
function addHtml(message) {
  // Create a div to show the cancellation message
  const div = document.querySelector("#app");

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  const messageDiv = document.createElement("div");
  messageDiv.id = "message";
  messageDiv.innerText = message; // Set initial message
  document.body.appendChild(messageDiv); // Add the div to the page
}

// Function to send the cancellation request
async function sendReq(orderId) {
  console.log(`Order ${orderId} is being canceled.`);

  const url =
    "https://hg-registration-bot-cd9ed03a6bc5.herokuapp.com/cancelorder";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId: orderId }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Data saved successfully:", data);
      addHtml(`Ваш заказ отменен.`);
    } else {
      console.error("Failed to save data:", data);
      addHtml(`Ваш заказ отменен.`);
    }
  } catch (error) {
    console.error("Error:", error);
    addHtml(`Ваш заказ отменен.`);
  }
}

// Function to extract orderId from the URL and send a request
function handleOrderCancellation() {
  // Get the current URL
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("cancelorderid"); // Adjusted to get the correct parameter

  if (orderId) {
    sendReq(orderId);
  }
}

// Call the function to handle the order cancellation
handleOrderCancellation();
