import axios from "axios";

const displayFeedback = function (type, feedback) {
  const errorBlock = document.getElementById("errorBlock");
  const successBlock = document.getElementById("successBlock");
  if (type === "err") {
    errorBlock.classList.add("visible");
    errorBlock.innerHTML = `<p> ${feedback} </p>`;
  }

  setTimeout(closeFeedback, 5000);
};

const closeFeedback = function () {
  const errorBlock = document.getElementById("errorBlock");
  const successBlock = document.getElementById("successBlock");
  if (errorBlock.classList.contains("visible")) {
    errorBlock.classList.remove("visible");
  }
  if (successBlock.classList.contains("visible")) {
    successBlock.classList.remove("visible");
  }
};

const sendFormData = async function (name, email, message) {
  if (!name || !email || !message) {
    displayFeedback("err", "Please provide input to all fields");
    return;
  }

  await axios
    .post("http://localhost:8000/api/contact")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.response));
};

document.getElementById("submitButton").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Something nice");
  // const name = document.getElementById("name").value;
  // const email = document.getElementById("email").value;
  // const message = document.getElementById("message").value;
  // console.log(name, email, message);
  // alert("form submitted");
});
