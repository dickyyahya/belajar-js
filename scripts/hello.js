//tipe data string
document.writeln("Hello js");
document.writeln("<br>");
//nomor genap
document.writeln(100);
document.writeln("<br>");
//nomor ganjil
document.writeln(10.5);
document.writeln("<br>");
//tipe data boolen
document.writeln(true);
document.writeln("<br>");
document.writeln(false);
document.writeln("<br>");
// nomor binari
document.writeln(0b1111);

//menambah string
document.writeln("<br>");
document.writeln("Nama : " + "yahya");

// escape sequence
document.writeln("<textarea cols='100' rows='10'>");
document.writeln("Budi \nAgus \nSumanto");
document.writeln("\\Home\\yahya");
document.writeln('\"Progammer Handal\"');
document.writeln("\'Sinau JS\'");
document.writeln("</textarea>");

//variabel
var firstName;
var middleName;
var lastName;

firstName = "yahya";
middleName = "budi";
lastName = "agus";

document.writeln(firstName);
document.writeln(middleName);
document.writeln(lastName);
document.writeln("</br>");

var buahMerah = "semangka";
var hewanUnggas = "ayam";
var pohonWowo = "pohon" + " " + "sawit";

document.writeln(buahMerah);
document.writeln(hewanUnggas);
document.writeln(pohonWowo);

//variabel let bisa ubah dibawahnya
document.writeln("</br>");
let firstFinger = "Jempol";
document.writeln(firstFinger);

//variabel const tidak bisa ubah dibawahnya

const anggotaTubuh = "tangan";
// anggotaTubuh = "kaki";
document.writeln(anggotaTubuh);

//operator aritmatika
let result = 2 + 3;
document.writeln("<p> 2+3 = " + result + "</p>");
let originalResult = result;

result = result - 1;
document.writeln("<p>" + originalResult + "-1 =" + result + "</p>");
originalResult = result;

result = result * 2;
document.writeln("<p>" + originalResult + "*2=" + result + "</p>");
originalResult;
//lebih ringkas
result += 10;
document.writeln(result);

//operator unary
let angkaPertama = +1;
document.writeln("<p>" + angkaPertama + "</p>");

angkaPertama--; //angkaPertama = angkaPertama - 1; angkaPertama -=1; 0
document.writeln("<p>" + angkaPertama + "</p>");

angkaPertama++; //angkaPertama = angkaPertama +1; angkaPertma+=1; 1
document.writeln("<p>" + angkaPertama + "</p>");

angkaPertama = -angkaPertama; //-1
document.writeln("<p>" + angkaPertama + "</p>");

//operator perbandingan

let angkaBanding = 5 == "5"; // sama dengan
document.writeln("<p>" + angkaBanding + "</p>");

angkaBanding = 5 === "5"; //sama dengan dan sama tipe
document.writeln("<p>" + angkaBanding + "</p>");

angkaBanding = 5 > 10; //lebih dari
document.writeln("<p>" + angkaBanding + "</p>");

angkaBanding = 5 < 10; //kurang dari
document.writeln("<p>" + angkaBanding + "</p>");

angkaBanding = 5 <= 10; //kurang dari sama dengan
document.writeln("<p>" + angkaBanding + "</p>");

angkaBanding = 5 >= 10; //lebih dari sama dengan
document.writeln("<p>" + angkaBanding + "</p>");

angkaBanding = 5 != 10; //tidak sama dengan
document.writeln("<p>" + angkaBanding + "</p>");

angkaBanding = 5 !== 10; //tidak sama dengna atau tidak sama tipe
document.writeln("<p>" + angkaBanding + "</p>");

//operator logika
//operator and && kedua nilai true maka hasil truw jika salah satu false atau keduanya false maka nilainya false
//operator or || jika kedua nilai true maka hasilnya true dan jika salah satunya saja true satunya false maka true dan jika semua nilai false maka hasilnya false
//operator unary ! cuma menggunakan satu nilai jika nilai true maka hasilnya false jika nilai false maka nilainya true

const nilaiUjian = 70;
const nilaiAbsen = 70;

const lulusUjian = nilaiUjian > 75;
const lulusAbsen = nilaiAbsen > 75;

const lulus = lulusUjian && lulusAbsen;

document.writeln("<p> hasil ujian " + lulus + "</p>");

//console method
//console.info() or console.log() == memberitahu informasi
//console.warn()= memberitahu informasi peringatan
//console.error() = memberitahu informarsi error
//console table()memberi tahu informasi dalam bentuk table

console.debug("ini Debug");

console.info("Hello World!");

console.warn("Ini Bahaya");

console.error("Kode Error");
