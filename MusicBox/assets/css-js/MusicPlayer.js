function buildPlaylist() {
  const playlist = document.getElementById("playlist");
  console.log("playlist element:", playlist);

  if (!playlist) {
    console.error("#playlist 요소를 찾을 수 없습니다!");
    return;
  }

  playlist.innerHTML = "";

  // 단순히 텍스트만 넣어보기
  tracksData.forEach((track, index) => {
    console.log("Adding track:", track.title);
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${track.title} - ${track.artist}`;
    playlist.appendChild(li);
  });

  console.log("Playlist children count:", playlist.children.length);
}
