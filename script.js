// Handle Application Form Submission
document.getElementById("applicationForm")?.addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent form default submission

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    age: document.getElementById("age").value,
    interests: document.getElementById("interests").value,
  };

  try {
    const response = await fetch("http://localhost:3000/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      document.getElementById("responseMessage").textContent = "Application submitted successfully!";
      document.getElementById("applicationForm").reset();
    } else {
      throw new Error("Failed to submit application.");
    }
  } catch (error) {
    document.getElementById("responseMessage").textContent = "Error: " + error.message;
  }
});

// Handle Media Submission Form Submission
document.getElementById("mediaForm")?.addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const photo = document.getElementById("photo").files[0];
  const video = document.getElementById("video").files[0];

  const formData = {
    name: name,
    email: email,
    message: message,
    photoName: photo ? photo.name : null,
    videoName: video ? video.name : null,
  };

  try {
    const response = await fetch("http://localhost:3000/mediaSubmissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      document.getElementById("responseMessage").textContent = "Media submission successfully submitted!";
      document.getElementById("mediaForm").reset();
    } else {
      throw new Error("Failed to submit media.");
    }
  } catch (error) {
    document.getElementById("responseMessage").textContent = "Error: " + error.message;
  }
});
// Sample data for photos and videos
const workUpdatesMedia = [
  { type: "photo", src: "work_photo1.jpg", alt: "Work Update Photo 1" },
  { type: "video", src: "work_video1.mp4", alt: "Work Update Video 1" }
];

const studentNewsMedia = [
  { type: "photo", src: "news_photo1.jpg", alt: "Student News Photo 1" },
  { type: "video", src: "news_video1.mp4", alt: "Student News Video 1" }
];

// Function to dynamically render media
function renderMedia(mediaArray, containerId) {
  const container = document.getElementById(containerId);
  mediaArray.forEach(media => {
    let mediaElement;
    if (media.type === "photo") {
      mediaElement = document.createElement("img");
      mediaElement.src = media.src;
      mediaElement.alt = media.alt;
    } else if (media.type === "video") {
      mediaElement = document.createElement("video");
      mediaElement.src = media.src;
      mediaElement.alt = media.alt;
      mediaElement.controls = true;
    }
    container.appendChild(mediaElement);
  });
}

// Populate media galleries
renderMedia(workUpdatesMedia, "workUpdatesGallery");
renderMedia(studentNewsMedia, "studentNewsGallery");

// Feedback button interaction
document.getElementById("feedbackBtn").addEventListener("click", function () {
  alert("Feedback feature coming soon! Stay tuned.");
});
