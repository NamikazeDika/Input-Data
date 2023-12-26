document.getElementById("pertambahan").addEventListener("click", function () {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var hasil = Number(a) + Number(b);

  alert("Hasil Penjumlahan = " + hasil);
});

document.getElementById("pengurangan").addEventListener("click", function () {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var hasil = Number(a) - Number(b);

  alert("Hasil Pengurangan = " + hasil);
});

document.getElementById("perkalian").addEventListener("click", function () {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var hasil = Number(a) * Number(b);

  alert("Hasil Perkalian = " + hasil);
});

document.getElementById("pembagian").addEventListener("click", function () {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var hasil = Number(a) / Number(b);

  alert("Hasil Pembagian = " + hasil);
});

function fun() {
  document.getElementById("form").reset();
}
