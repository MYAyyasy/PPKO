// Fungsi untuk mengubah foto utama saat mengklik foto di kolase
document.querySelectorAll(".collage-photo").forEach((photo) => {
  photo.addEventListener("click", () => {
    const mainPhoto = document.querySelector(".main-photo");
    const newPhotoUrl = photo.style.backgroundImage;
    mainPhoto.src = newPhotoUrl.replace('url("', "").replace('")', "");
  });
});
