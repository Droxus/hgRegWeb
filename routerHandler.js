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
  } else {
    console.error("Failed to save data:", data);
  }
}

// Function to extract orderId from the URL and send a request
function cancelOrderRequest() {
  console.log("Cancel Order");

  // Ensure the HTML is added to the page
  addHtml();

  // Get the current URL
  const currentUrl = window.location.href;

  // Extract the part after '=' (since no key is provided, it's just the value)
  const orderId = currentUrl.split("=")[1]; // Split by '=' and take the second part
  console.log(orderId);

  if (orderId) {
    // Call the mock sendReq function with the orderId
    sendReq(orderId);

    // Show a success message in the dynamically added HTML
    document.getElementById(
      "message"
    ).innerText = `Order ${orderId} has been sent for cancellation.`;
  } else {
    console.error("Order ID not found in the URL");

    // Show error message if orderId is missing
    document.getElementById("message").innerText = "Order ID not found.";
  }
}
cancelOrderRequest();
