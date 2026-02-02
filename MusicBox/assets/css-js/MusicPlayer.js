document.addEventListener("DOMContentLoaded", () => {
  const playlist = document.getElementById("playlist");
  const tracksData = [
    { title: "Animals", artist: "House of Rising Sun" },
    { title: "Imagine", artist: "John Lennon" }
  ];

  tracksData.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${track.title} - ${track.artist}`;
    playlist.appendChild(li);
  });
});
