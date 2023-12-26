document.getElementById("proses").addEventListener("click", function () {
  var npm = document.getElementById("npm").value;
  var nama = document.getElementById("nama").value;
  var nilai = document.getElementById("nilai").value;
  var grade = "";
  var status = "";

  document.write("<h2>NPM " + npm + "</h2>");
  document.write("<h2>NAMA " + nama + "</h2>");
  document.write("<h2>NILAI " + nilai + "</h2>");

  if (nilai >= 80) {
    status = "Lulus";
    grade = "A";
  } else if (nilai >= 70) {
    status = "Lulus";
    grade = "B";
  } else if (nilai >= 60) {
    status = "Lulus";
    grade = "C";
  } else if (nilai >= 50) {
    status = "Lulus";
    grade = "D";
  } else {
    status = "TIDAK LULUS";
    grade = "E";
  }

  document.write(`<h2>Grade Anda : ${grade}</h2>`);
  document.write(`<h2>Status : ${status}</h2>`);
});
