<script>
  // 트랙 배열
  const tracksData = [
    { title: "House of the Rising Sun", artist: "Animals", src: "MusicBox/assets/mp3/Animals-houseof-rising-sun.mp3", cover: "MusicBox/assets/images/model001.jpg", icon: "🎸" },
    { title: "In A Gadda Da Vida", artist: "Iron Butterfly", src: "MusicBox/assets/mp3/Iron-Butterfly-In-A-Gadda-Da-Vida.mp3", cover: "MusicBox/assets/images/model002.jpg", icon: "🎤" },
    { title: "To Leave Something Behind", artist: "Rowe", src: "MusicBox/assets/mp3/Sean-Rowe-To-Leave-Something-Behind.mp3", cover: "MusicBox/assets/images/model003.jpg", icon: "🎧" },
  ];

  // DOM 요소 참조 (변수 선언은 함수보다 먼저!)
  const audio = document.getElementById("audio");
  const cover = document.getElementById("cover");
  const trackTitle = document.getElementById("trackTitle");
  const trackArtist = document.getElementById("trackArtist");
  const playlist = document.getElementById("playlist");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const repeatBtn = document.getElementById("repeatBtn");
  const muteBtn = document.getElementById("muteBtn");
  const progressBar = document.getElementById("progressBar");
  const currentTimeEl = document.getElementById("currentTime");
  const durationEl = document.getElementById("duration");
  const volumeSlider = document.getElementById("volumeSlider");
  const volumeValue = document.getElementById("volumeValue");
  const player = document.getElementById("music");
  const musicBtn = document.getElementById("musicBtn");
  const menuLinks = document.querySelectorAll(".sidebar a");

  let currentIndex = 0;
  let isShuffle = false;
  let isRepeat = false;

  // 플레이리스트 생성
  function buildPlaylist() {
    console.log("플레이리스트 생성 시작");
    playlist.innerHTML = "";
    tracksData.forEach((track, index) => {
      const li = document.createElement("li");
      li.classList.add("playlist-item");

      const img = document.createElement("img");
      img.src = track.cover;
      img.alt = track.title;
      img.classList.add("playlist-cover");

      const icon = document.createElement("span");
      icon.classList.add("playlist-icon");
      icon.textContent = track.icon;

      const text = document.createElement("span");
      text.classList.add("playlist-text");
      text.textContent = `${index + 1}. ${track.title} - ${track.artist}`;

      li.appendChild(img);
      li.appendChild(icon);
      li.appendChild(text);

      li.addEventListener("click", () => {
        loadTrack(index);
        audio.play().catch(err => console.error("재생 실패:", err));
        playPauseBtn.textContent = "⏸";
      });

      playlist.appendChild(li);
    });
  }

  // 트랙 로드
  function loadTrack(index) {
    currentIndex = index;
    const track = tracksData[index];
    audio.src = track.src;
    cover.src = track.cover;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    playPauseBtn.textContent = "▶️";

    document.querySelectorAll(".playlist-item").forEach(el => el.classList.remove("active"));
    const playlistItems = document.querySelectorAll(".playlist-item");
    if (playlistItems[index]) playlistItems[index].classList.add("active");
  }

  // ✅ DOM 준비 후 실행
  document.addEventListener("DOMContentLoaded", () => {
    buildPlaylist();
    loadTrack(0);
    audio.volume = volumeSlider.value / 100;
    volumeValue.textContent = `${volumeSlider.value}%`;
  });
</script>
