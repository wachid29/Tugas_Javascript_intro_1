//Tugas JS intro1,No 2
const matematika = 0;
const bahasaIndonesia = 60;
const bahasaInggris = 100;
const ipa = 100;
let rata2;
let grade;

const average = (input1, input2, input3, input4) => {
  //validasi input
  if (input1 < 0 || typeof input1 !== "number") {
    return console.log("input 1 harus berupa number dan lebih besar dari 0");
  } else if (input2 < 0 || typeof input2 !== "number") {
    return console.log("input 2 harus berupa number dan lebih besar dari 0");
  } else if (input3 < 0 || typeof input3 !== "number") {
    return console.log("input 3 harus berupa number dan lebih besar dari 0");
  } else if (input4 < 0 || typeof input4 !== "number") {
    return console.log("input 4 harus berupa number dan lebih besar dari 0");
  }

  rata2 = (input1 + input2 + input3 + input4) / 4;

  if (rata2 >= 90) {
    grade = "A";
  } else if (rata2 >= 80) {
    grade = "B";
  } else if (rata2 >= 70) {
    grade = "C";
  } else if (rata2 >= 60) {
    grade = "D";
  } else {
    grade = "E";
  }
  return console.log(`Rata-rata = ${rata2} \nGrade = ${grade}`);
};

average(matematika, bahasaIndonesia, bahasaInggris, ipa);
