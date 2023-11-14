const url = "https://api.adviceslip.com/advice";
const advices = document.querySelector("#advices");
const knapp = document.querySelector("#knapp");

async function getAdvice(api) {
  try {
    const response = await fetch(api);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    throw new Error("Something went wrong!", error);
  }
}

async function adviceContent() {
  try {
    const data = await getAdvice(url);
    const adviceId = document.querySelector("#advice-id");
    const advice = document.querySelector("#advice-content");

  
    if (data.slip) {
      adviceId.innerHTML = data.slip.id;
      advice.innerHTML = data.slip.advice;
      advices.appendChild(adviceId);
      advices.appendChild(advice);
    } else {
      console.error("No advice found in the response.");
    }
  } catch (error) {
    console.error("Error getting advice content:", error);
  }
}

adviceContent()

knapp.addEventListener("click", adviceContent);
