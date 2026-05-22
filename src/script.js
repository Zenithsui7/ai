async function generateImage() {
  const prompt = document.getElementById("prompt-input").value;
  const outputImg = document.getElementById("output-image");
  const loadingText = document.getElementById("loading-text");

  if (!prompt) return alert("Please enter a prompt!");

  // Show loading
  loadingText.style.display = "block";
  outputImg.style.display = "none";

  const API_KEY = "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";

  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: prompt }),
    }
  );

  const blob = await response.blob();
  const imageUrl = URL.createObjectURL(blob);

  // Show image
  outputImg.src = imageUrl;
  outputImg.style.display = "block";
  loadingText.style.display = "none";
}
