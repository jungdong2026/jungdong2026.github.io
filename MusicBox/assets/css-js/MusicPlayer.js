// 메뉴 전환 코드 (중복 제거 + 디버깅 로그 유지)
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    console.log("메뉴 클릭:", targetId);

    document.querySelectorAll(".player-wrapper").forEach(section => {
      section.classList.remove("active");
    });

    const target = document.getElementById(targetId);
    console.log("찾은 섹션:", target);
    if (target) {
      target.classList.add("active");
    } else {
      console.error("섹션을 찾을 수 없습니다:", targetId);
    }
  });
});

function buildPlaylist() {
  const playlist = document.getElementById("playlist");
  console.log("playlist element:", playlist);

  if (!playlist) {
    console.error("#playlist 요소를 찾을 수 없습니다!");
    return;
  }

  playlist.innerHTML = "";

  const li = document.createElement("li");
  li.textContent = "테스트 곡";
  playlist.appendChild(li);

  console.log("Playlist children count:", playlist.children.length);
}

// 테스트 실행
console.log("테스트 실행 시작");
buildPlaylist();
console.log("테스트 실행 끝");
