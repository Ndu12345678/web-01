function kirimSurat(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;
  document.getElementById("output").innerText =
    `💖 ${nama}, cintamu telah terkirim!\nIsi hatimu: "${pesan}" 💌`;
}
