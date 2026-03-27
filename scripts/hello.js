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

//string template
const awalName = "yahya";
const tengahName = "Budi";
const akhirName = "sentosa";
const gabungNamaBiasa = "Nama" + " " + awalName + " " + tengahName + " " + akhirName;

const template = `Name : ${awalName} ${tengahName} ${akhirName} `;
console.info(gabungNamaBiasa);

//exspression di string template
const nama = "Yahya";
const poin = 90;

const hasil = `Nama : ${nama}, Lulus : ${poin > 75}`;
console.info(hasil);

//Multiline String
let multiLineString = `Nama saya Yahya
seorang pengangguran
yang selalu gagal di setiap sektor
hidup memamg ampas
dan penuh plottwist`;

console.info(multiLineString);

//konversi string to number
//parseint("string") konversi dari string ke number bil bulat
//parseFloat("string") konversi dari string ke number bil pecahan
//number("string") //konversi dari string ke number bil bulat/pecahan
//number.toString()//konversi dari number ke string
const value1 = parseInt("2");
const value2 = 2;
const tambah = value1 + value2;

document.writeln(`<p> konversi ${tambah}</p>`);

document.writeln(`<p> ${parseInt("1.9")}</p>`);
document.writeln(`<p> ${parseFloat("1.1")}</p>`);
document.writeln(`<p> ${Number("1.1")}</p>`);

//ubah number ke string
const a = 1;
const b = 3;
const total = a.toString() + b.toString();
document.writeln(`<p>${total}</p>`);

//NAN
document.writeln(`<p>${parseInt("2salah")}</p>`); //NaN
document.writeln(`<p>${parseFloat("1.1salah")}</p>`); //1.1

//Number() tidak akan menolerir kesalahan pada data
document.writeln(`<p>${Number("1.1ops")}</p>`); //NaN
document.writeln(`<p>${Number("1x")}</p>`); //NaN
document.writeln(`<p>${Number("Durjana")}</p>`); //NaN

//operasi pada Nan

const value3 = Number("Dongo"); //NaN
const value4 = 12;
const jumlah = value3 + value4; //nan

document.writeln(`<p>${jumlah}</p>`);

//isNaN()Function
//isNaN mengecek apakah sebuah number itu NaN atau bukan
document.writeln("sialan");
document.writeln(`<p>${isNaN(value4)}</p>`);
document.writeln(`<p>${isNaN(100)}</p>`);
document.writeln(`<p>${isNaN(NaN)}</p>`);

//tipe data array
//array berisi kumpulan data

let arrayKosong = [];
let jenisBuah = ["gedang", "kates", "nangka"];

const namaHewan = [];
namaHewan.push("curut");
namaHewan.push("babi", "gajah", "ayam");
//lihat isi index
console.table(namaHewan);
console.info(namaHewan[0]);
console.info(namaHewan[1]);
//ubah isi index
namaHewan[1] = "Gajah";
console.table(namaHewan);
//hapus index
delete namaHewan[1];
console.table(namaHewan);
namaHewan.push("pitik");
console.table(namaHewan);
//tambah maning setalah hapus

namaHewan[1] = "bebek manjing maning";
namaHewan.push(1, 2, 3, 4, 5);
namaHewan.push([6, 7, 8, 9, 10]);
console.table(namaHewan);

//tipe data objek
const person = {};

//ubah property/attribute
person["nama"] = "yahya";
person["alamat"] = "brebes";
person["umur"] = 24;

delete person["umur"];
console.table(person);

//membuat object dengan properties

const namaSerangga = {
  "nama Lengkap": "walang",
  habitat: "rumput",
  makanan: "suket",
  umur: 2,
};

console.table(namaSerangga);

console.info(`Nama : ${namaSerangga["nama Lengkap"]}`);
console.info(`umur : ${namaSerangga.umur}`);

//if exspresion atau percabangan

const hasilUjian = 50;

if (hasilUjian > 90) {
  document.writeln("<p>gacor kang</p>");
  //else if expresion
} else if (hasilUjian > 50) {
  document.writeln("<p>goodlah</p>");
  //else expresion
} else {
  document.writeln("<p>Dongo</p>");
}

//Popup
//alert = memberi peringatan berupa popup text di browser
//prompt = untuk meminta input string dari pengguna browser dalam bentuk popup input text
//confirm = untuk meminta input boolean dari pengguna browser dalam popup input pilihan
//alert kode
alert("Hello World");

//prompt kode
const beras = prompt("Harga beras berapa");
alert(`halli ${beras}`);

// confirm kode
const masuk = confirm("anda yakin mau masuk?");

if (masuk) {
  const aran = prompt("siapa nama anda");
  alert(`hello ${aran}`);
} else {
  alert("dadah");
}

//undefined
//sebuah tipe data yang undifined dan belum didefinisikan

let sembako = "beras";
if (sembako === undefined) {
  alert("UNDEFINED");
} else {
  alert("DEFINIED");
}

//undefined array value
const cabai = ["rawit", "setan"];

if (cabai[1] === undefined) {
  console.info("woii");
} else {
  console.info("cihuy");
}

//undefined object property
let makanan = { nama: "rujak" };

if (makanan.nama === undefined) {
  console.info("prikitiw");
} else {
  console.info(`hello ${makanan.nama}`);
}
