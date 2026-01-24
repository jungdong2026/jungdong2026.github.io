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

// 플레이리스트 생성
function buildPlaylist() {
  const playlist = document.getElementById("playlist");
  if (!playlist) {
    console.error("#playlist 요소를 찾을 수 없습니다!");
    return;
  }

  playlist.innerHTML = "";

  tracksData.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${track.title} - ${track.artist} ${track.icon}`;
    li.addEventListener("click", () => {
      loadTrack(index);
    });
    playlist.appendChild(li);
  });

  console.log("Playlist children count:", playlist.children.length);
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
}

// 메뉴 전환
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    console.log("메뉴 클릭:", targetId);

    document.querySelectorAll(".player-wrapper").forEach(section => {
      section.classList.remove("active");
    });

    const target = document.getElementById(targetId);
    if (target) {
      target.classList.add("active");
    } else {
      console.error("섹션을 찾을 수 없습니다:", targetId);
    }
  });
});

// 초기화 실행
buildPlaylist();
loadTrack(0);
