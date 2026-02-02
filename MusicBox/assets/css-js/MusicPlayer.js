// 트랙 배열
const tracksData = [
  { title: "House of the Rising Sun", artist: "Animals", src: "assets/mp3/Animals-houseof-rising-sun.mp3", cover: "assets/images/model001.jpg", icon: "🎸" },
  { title: "In A Gadda Da Vida", artist: "Iron Butterfly", src: "assets/mp3/Iron-Butterfly-In-A-Gadda-Da-Vida.mp3", cover: "assets/images/model002.jpg", icon: "🎤" },
  { title: "To Leave Something Behind", artist: "Rowe", src: "assets/mp3/Sean-Rowe-To-Leave-Something-Behind.mp3", cover: "assets/images/model003.jpg", icon: "🎧" },
  { title: "Billie Jean", artist: "Michael Jackson", src: "assets/mp3/Michael-Jackson-Billie-Jean.mp3", cover: "assets/images/model004.jpg", icon: "💃" },
  { title: "Rain Dance", artist: "Melanie Safka", src: "assets/mp3/Melanie-Safka-Rain-Dance.mp3", cover: "assets/images/model005.jpg", icon: "🎷" },
  { title: "Heart Of Gold", artist: "Neil Diamond", src: "assets/mp3/Neil-Diamond-Heart-Of-Gold.mp3", cover: "assets/images/model006.jpg", icon: "🎺" },
  { title: "Broken Vow", artist: "Kenny Rogers", src: "assets/mp3/Kenny-Rogers-Broken-vow.mp3", cover: "assets/images/model007.jpg", icon: "🎻" },
  { title: "Get Ready", artist: "Rare Earth", src: "assets/mp3/Rare-Earth-Get-Ready.mp3", cover: "assets/images/model008.jpg", icon: "🎶" },
  { title: "Concierto De Aranjuez", artist: "Rodrigo", src: "assets/mp3/Concierto-De-Aranjuez-Joaquín-Rodrigo.mp3", cover: "assets/images/eye-014.jpg", icon: "🎶" },
  { title: "Nothing Else Matters", artist: "Metallica", src: "assets/mp3/Metallica-Nothing-Else-Matters.mp3", cover: "assets/images/model009.jpg", icon: "🎷" }
];

let currentIndex = 0;
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
const menuLinks = document.querySelectorAll(".sidebar-musicbox a");

let isShuffle = false;
let isRepeat = false;

// 배경음악 컨트롤
const bgm = document.getElementById('bgm');
function playBgm() { bgm.play().catch(err => console.log("재생 실패:", err)); }
function pauseBgm() { bgm.pause(); }
function setVolume(value) { bgm.volume = value; }

// 플레이리스트 생성
function buildPlaylist() {
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

// ▶️ / ⏸ 버튼
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().catch(err => console.error("재생 실패:", err));
    playPauseBtn.textContent = "⏸";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  }
});

// 이전/다음 트랙
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + tracksData.length) % tracksData.length;
  loadTrack(currentIndex);
  audio.play().catch(err => console.error("재생 실패:", err));
});
nextBtn.addEventListener("click", () => {
  currentIndex = isShuffle ? Math.floor(Math.random() * tracksData.length) : (currentIndex + 1) % tracksData.length;
  loadTrack(currentIndex);
  audio.play().catch(err => console.error("재생 실패:", err));
});

// 자동 재생
audio.addEventListener("ended", () => {
  if (isRepeat) {
    audio.currentTime = 0;
    audio.play();
  } else {
    currentIndex = isShuffle ? Math.floor(Math.random() * tracksData.length) : (currentIndex + 1) % tracksData.length;
    loadTrack(currentIndex);
    audio.play().catch(err => console.error("재생 실패:", err));
  }
});

// 커버 회전
audio.addEventListener("play", () => cover.classList.add("rotate"));
audio.addEventListener("pause", () => cover.classList.remove("rotate"));
audio.addEventListener("ended", () => cover.classList.remove("rotate"));

// 셔플/반복/음소거
shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.style.color = isShuffle ? "orange" : "inherit";
});
repeatBtn.addEventListener("click", () => {
  isRepeat = !isRepeat;
  repeatBtn.style.color = isRepeat ? "orange" : "inherit";
});
muteBtn.addEventListener("click", () => {
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? "🔇" : "🔊";
});

// 진행바 업데이트
audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress || 0;

  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime % 60);
  currentTimeEl.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, "0")}`;

  const durationMinutes = Math.floor(audio.duration / 60);
  const durationSeconds = Math.floor(audio.duration % 60);
  durationEl.textContent = `${durationMinutes}:${durationSeconds.toString().padStart(2, "0")}`;
});

// 볼륨 조절
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value / 100;
  volumeValue.textContent = `${volumeSlider.value}%`;
});

// ✅ 초기화: DOM 준비 후 실행
document.addEventListener("DOMContentLoaded", () => {
  // 플레이리스트 생성 및 첫 트랙 로드
  buildPlaylist();
  loadTrack(0);

  // 초기 볼륨 설정
  audio.volume = volumeSlider.value / 100;
  volumeValue.textContent = `${volumeSlider.value}%`;

  // 🎵 버튼 클릭 시 플레이어 열기/닫기
  musicBtn.addEventListener("click", () => {
    player.classList.toggle("active");
  });

  // 메뉴 버튼 클릭 시: 플레이어 닫고 해당 섹션으로 이동
  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // 기본 스크롤 막기
      player.classList.remove("active");
      const targetId = link.getAttribute("href").substring(1); // "#premiere" → "premiere"
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        // 모든 섹션 숨기기
        document.querySelectorAll(".player-wrapper").forEach(section => {
          section.classList.remove("active");
        });
        // 선택된 섹션만 표시
        targetSection.classList.add("active");
      }
    });
  });
});

// 메뉴 클릭 시 모달 전환
  document.querySelectorAll('.sidebar-musicbox a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      // 모든 모달 닫기
      document.querySelectorAll('.player-wrapper').forEach(modal => {
        modal.classList.remove('active');
      });
      // 해당 모달 열기
      const targetModal = document.getElementById(targetId);
      if (targetModal) {
        targetModal.classList.add('active');
      }
    });
  });



