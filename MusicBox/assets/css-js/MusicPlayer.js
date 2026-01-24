// 곡 데이터
const tracksData = [
  { title: "House of the Rising Sun", artist: "Animals", src: "/MusicBox/assets/mp3/Animals-houseof-rising-sun.mp3", cover: "/MusicBox/assets/images/model001.jpg", icon: "🎸" },
  { title: "In A Gadda Da Vida", artist: "Iron Butterfly", src: "/MusicBox/assets/mp3/Iron-Butterfly-In-A-Gadda-Da-Vida.mp3", cover: "/MusicBox/assets/images/model002.jpg", icon: "🎤" },
  { title: "To Leave Something Behind", artist: "Rowe", src: "/MusicBox/assets/mp3/Sean-Rowe-To-Leave-Something-Behind.mp3", cover: "/MusicBox/assets/images/model003.jpg", icon: "🎧" },
  { title: "Billie Jean", artist: "Michael Jackson", src: "/MusicBox/assets/mp3/Michael-Jackson-Billie-Jean.mp3", cover: "/MusicBox/assets/images/model004.jpg", icon: "💃" },
  { title: "Rain Dance", artist: "Melanie Safka", src: "/MusicBox/assets/mp3/Melanie-Safka-Rain-Dance.mp3", cover: "/MusicBox/assets/images/model005.jpg", icon: "🎷" },
  { title: "Heart Of Gold", artist: "Neil Diamond", src: "/MusicBox/assets/mp3/Neil-Diamond-Heart-Of-Gold.mp3", cover: "/MusicBox/assets/images/model006.jpg", icon: "🎺" },
  { title: "Broken Vow", artist: "Kenny Rogers", src: "/MusicBox/assets/mp3/Kenny-Rogers-Broken-vow.mp3", cover: "/MusicBox/assets/images/model007.jpg", icon: "🎻" },
  { title: "Get Ready", artist: "Rare Earth", src: "/MusicBox/assets/mp3/Rare-Earth-Get-Ready.mp3", cover: "/MusicBox/assets/images/model008.jpg", icon: "🎶" },
  { title: "Concierto De Aranjuez", artist: "Rodrigo", src: "/MusicBox/assets/mp3/Concierto-De-Aranjuez-Joaquín-Rodrigo.mp3", cover: "/MusicBox/assets/images/eye-014.jpg", icon: "🎶" },
  { title: "Nothing Else Matters", artist: "Metallica", src: "/MusicBox/assets/mp3/Metallica-Nothing-Else-Matters.mp3", cover: "/MusicBox/assets/images/model009.jpg", icon: "🎷" }
];

let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// 플레이리스트 생성
function buildPlaylist() {
  const playlist = document.getElementById("playlist");
  playlist.innerHTML = "";

  tracksData.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${track.title} - ${track.artist} ${track.icon}`;
    li.addEventListener("click", () => {
      currentTrackIndex = index;
      loadTrack(index);
    });
    playlist.appendChild(li);
  });
}

// 트랙 로드
function loadTrack(index) {
  const track = tracksData[index];
  const audio = document.getElementById("audio");
  const cover = document.getElementById("cover");
  const trackTitle = document.getElementById("trackTitle");
  const trackArtist = document.getElementById("trackArtist");

  audio.src = track.src;
  cover.src = track.cover;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;

  audio.play();
  isPlaying = true;
  document.getElementById("playPauseBtn").textContent = "⏸";
}

// 메뉴 전환
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);

    document.querySelectorAll(".player-wrapper").forEach(section => {
      section.classList.remove("active");
    });

    const target = document.getElementById(targetId);
    if (target && target.id !== "music") {
      target.classList.add("active");
    }
  });
});

if (target && target.id !== "music") {
  target.classList.add("active");
}

// 버튼 제어
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");
const muteBtn = document.getElementById("muteBtn");
const progressBar = document.getElementById("progressBar");
const volumeSlider = document.getElementById("volumeSlider");
const volumeValue = document.getElementById("volumeValue");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

// 재생/일시정지
playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  } else {
    audio.play();
    playPauseBtn.textContent = "⏸";
  }
  isPlaying = !isPlaying;
});

// 이전 곡
prevBtn.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex - 1 + tracksData.length) % tracksData.length;
  loadTrack(currentTrackIndex);
});

// 다음 곡
nextBtn.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracksData.length;
  loadTrack(currentTrackIndex);
});

// 셔플
shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.style.color = isShuffle ? "orange" : "black";
});

// 반복
repeatBtn.addEventListener("click", () => {
  isRepeat = !isRepeat;
  repeatBtn.style.color = isRepeat ? "orange" : "black";
});

// 음소거
muteBtn.addEventListener("click", () => {
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? "🔇" : "🔊";
});

// 진행바 업데이트
audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress || 0;
});

// 진행바 이동
progressBar.addEventListener("input", () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

// 볼륨 조절
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value / 100;
  volumeValue.textContent = `${volumeSlider.value}%`;
});

// 자동 다음 곡
audio.addEventListener("ended", () => {
  if (isRepeat) {
    loadTrack(currentTrackIndex);
  } else if (isShuffle) {
    currentTrackIndex = Math.floor(Math.random() * tracksData.length);
    loadTrack(currentTrackIndex);
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % tracksData.length;
    loadTrack(currentTrackIndex);
  }
});

// 초기화 실행
buildPlaylist();
loadTrack(0);
