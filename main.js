console.log("javascript ready...");

//! responsive navigation bar
function showMobileNav() {
  var navbar = document.getElementById("navbar");
  if (navbar.className === "navibar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navibar";
  }
}

//! Button function checking
function showNotification(params) {
  alert(params.toString());
  return;
}

// Fungsi untuk mengambil nilai warna dari localStorage berdasarkan indeks halaman
function getColorFromLocalStorage(pageIndex) {
  let color = localStorage.getItem(`pageColor-${pageIndex}`);
  return color ? color : "white";
}

// Fungsi untuk menyimpan nilai warna ke localStorage berdasarkan indeks halaman
function setColorToLocalStorage(pageIndex, color) {
  localStorage.setItem(`pageColor-${pageIndex}`, color);
}

let pages = document.querySelectorAll(".page");

// Mengatur warna halaman berdasarkan nilai dari localStorage saat halaman dimuat
pages.forEach((page) => {
  let pageIndex = parseInt(page.getAttribute("data-page-index"));
  let currentColor = getColorFromLocalStorage(pageIndex);

  page.style.backgroundColor = currentColor;
  page.setAttribute("data-color", currentColor);
});

// Menambahkan event listener untuk mengubah warna dan menyimpannya ke localStorage
pages.forEach((page) => {
  page.addEventListener("click", function () {
    let pageIndex = parseInt(this.getAttribute("data-page-index"));
    let currentColor = this.getAttribute("data-color");
    let newColor = currentColor === "aquamarine" ? "salmon" : "aquamarine";

    this.style.backgroundColor = newColor;
    this.setAttribute("data-color", newColor);
    setColorToLocalStorage(pageIndex, newColor);
  });
});
