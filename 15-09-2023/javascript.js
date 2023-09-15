function hello() {
  alert("Hello Javascript.");
}
function waktu() {
  document.getElementById("waktu").innerHTML = Date();
}
function Zodiak() {
  let bulan = document.getElementById("bulan").value;
  let tanggal = document.getElementById("tanggal").value;
  let zodiak = "Belum dibuat";

  if (bulan == 1) {
    if (tanggal > 0 && tanggal < 20) {
      zodiak = "Capricorn";
    }
    if (tanggal > 19 && tanggal < 32) {
      zodiak = "Aquarius";
    }
  }

  if (bulan == 2) {
    if (tanggal > 0 && tanggal < 18) {
      zodiak = "Aquarius";
    }
    if (tanggal > 18 && tanggal < 32) {
      zodiak = "Pisces";
    }
  }

  if (bulan == 3) {
    if (tanggal > 0 && tanggal < 21) {
      zodiak = "Pisces";
    }
    if (tanggal > 20 && tanggal < 32) {
      zodiak = "Aries";
    }
  }

  if (bulan == 4) {
    if (tanggal > 0 && tanggal < 20) {
      zodiak = "Aries";
    }
    if (tanggal > 19 && tanggal < 32) {
      zodiak = "Taurus";
    }
  }
  if (bulan == 5) {
    if (tanggal > 0 && tanggal < 21) {
      zodiak = "Taurus";
    }
    if (tanggal > 20 && tanggal < 32) {
      zodiak = "Gemini";
    }
  }
  if (bulan == 6) {
    if (tanggal > 0 && tanggal < 21) {
      zodiak = "Gemini";
    }
    if (tanggal > 20 && tanggal < 32) {
      zodiak = "Cancer";
    }
  }
  if (bulan == 7) {
    if (tanggal > 0 && tanggal < 23) {
      zodiak = "Cancer";
    }
    if (tanggal > 22 && tanggal < 32) {
      zodiak = "Leo";
    }
  }
  if (bulan == 8) {
    if (tanggal > 0 && tanggal < 23) {
      zodiak = "Leo";
    }
    if (tanggal > 22 && tanggal < 32) {
      zodiak = "Virgo";
    }
  }
  if (bulan == 9) {
    if (tanggal > 0 && tanggal < 23) {
      zodiak = "Virgo";
    }
    if (tanggal > 22 && tanggal < 32) {
      zodiak = "Libra";
    }
  }
  if (bulan == 10) {
    if (tanggal > 0 && tanggal < 23) {
      zodiak = "Libra";
    }
    if (tanggal > 22 && tanggal < 32) {
      zodiak = "Scorpio";
    }
  }
  if (bulan == 11) {
    if (tanggal > 0 && tanggal < 22) {
      zodiak = "Scorpio";
    }
    if (tanggal > 21 && tanggal < 32) {
      zodiak = "Sagittarius";
    }
  }
  if (bulan == 12) {
    if (tanggal > 0 && tanggal < 22) {
      zodiak = "Sagittarius";
    }
    if (tanggal > 21 && tanggal < 32) {
      zodiak = "Capricorn";
    }
  }
  document.getElementById("zodiak").innerHTML = zodiak;
}
let resultzodiak = document.getElementById("klikzodiak");
resultzodiak.addEventListener("click", Zodiak);
``
function kali() {
  let a = document.getElementById("bil1").value;
  let b = document.getElementById("bil2").value;
  let hasil = a * b;
  document.getElementById("hasil").innerHTML = hasil;
}
function gantinama() {
  document.getElementById("nama").innerHTML = "Safia Rashida Raya";
}
function namasaya() {
  document.getElementById("saya").innerHTML =
    document.getElementById("namasy").value;
}

function perkalian() {
  let c = document.getElementById("bill1").value;
  let d = document.getElementById("bill2").value;
  let hasilkali = c * d;
  document.getElementById("hasilkali").innerHTML = hasilkali;
}

function jumlah() {
  let e = document.getElementById("penjum1").value;
  let f = document.getElementById("penjum2").value;
  let hasiljumlah = parseInt(e) + parseInt(f);
  document.getElementById("hasilpenjumlahan").innerHTML = hasiljumlah;
}

let btn = document.getElementById("jam");

btn.onclick = function () {
  document.getElementById("waktu").innerHTML = Date();
};

let isi = document.getElementById("ketik");
let tampil = document.getElementById("waktu");
isi.onmouseover = function () {
  tampil.innerHTML = isi.value;
};

let hari = document.getElementById("hari");
hari.addEventListener("mouseover", coba);

function coba() {
  alert("coba coba");
}
