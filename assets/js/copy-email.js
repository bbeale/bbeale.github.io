function copyEmail() {

  // Copy text into clipboard
  navigator.clipboard.writeText("beale.ben@gmail.com");

  let container = document.getElementById("contactContainer");

  // Create a new <div> element
  let copyAlertDiv = document.createElement("div");
  container.appendChild(copyAlertDiv);

  // Set some attributes and content for the new div
  copyAlertDiv.innerHTML = "Email copied to clipboard!";
  copyAlertDiv.className = "auto-close alert alert-dark";
  copyAlertDiv.style.cssText = "position: sticky; top: 0;";

  // Create the button to dismiss the alert and append to the alert div
  let button = document.createElement("button");
  let span = document.createElement("span");
  span.setAttribute("aria-hidden", "true")
  button.className = "close"
  span.innerHTML ="&times;";
  button.setAttribute("type", "button");
  button.setAttribute("data-dismiss", "alert");
  button.setAttribute("aria-label", "Close");

  // Append to DOM
  button.appendChild(span)
  copyAlertDiv.appendChild(button);
  container.appendChild(copyAlertDiv);
}
