console.log("Hello router handler!");

function addHtml() {
  // Create a div to show the cancellation message
  const messageDiv = document.createElement("div");
  messageDiv.id = "message";
  messageDiv.innerText = "Processing your cancellation..."; // Initial message
  document.body.appendChild(messageDiv); // Add the div to the page
}

async function sendReq(orderId) {
  console.log(`Order ${orderId} is being canceled.`);

  // The actual request logic
  const url =
    "https://hg-registration-bot-cd9ed03a6bc5.herokuapp.com/cancelorder";

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
    document.getElementById(
      "message"
    ).innerText = `Order ${orderId} has been sent for cancellation.`;
  } else {
    console.error("Failed to save data:", data);
    document.getElementById("message").innerText =
      "Failed to cancel the order.";
  }
}

// Function to extract orderId from the URL and send a request
function cancelOrderRequest() {
  console.log("Cancel Order");

  // Ensure the HTML is added to the page
  addHtml();

  // Get the current URL
  const currentUrl = window.location.href;

  // Extract the orderId parameter from the URL
  const orderId = new URLSearchParams(window.location.search).get(
    "cancelOrderId"
  ); // Change 'cancelOrderId' to the actual parameter name
  console.log(orderId);

  if (orderId) {
    // Call the sendReq function with the orderId
    sendReq(orderId);
  } else {
    console.error("Order ID not found in the URL");
    document.getElementById("message").innerText = "Order ID not found.";
  }
}

// Run the cancelOrderRequest function
cancelOrderRequest();
