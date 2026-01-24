function buildPlaylist() {
  const playlist = document.getElementById("playlist");
  console.log("playlist element:", playlist);

  if (!playlist) {
    console.error("#playlist 요소를 찾을 수 없습니다!");
    return;
  }

  playlist.innerHTML = "";

  // 단순히 테스트용 li 하나 추가
  const li = document.createElement("li");
  li.textContent = "테스트 곡";
  playlist.appendChild(li);

  console.log("Playlist children count:", playlist.children.length);
}

// 파일 맨 아래에서 직접 호출
console.log("테스트 실행 시작");
buildPlaylist();
console.log("테스트 실행 끝");
