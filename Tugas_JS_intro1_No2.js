//Tugas JS intro1,No 2
const matematika = 54 ;
const bahasaIndonesia = undefined;
const bahasaInggris = 80;
const ipa = 98;
let rata2;
let grade;

const average =(input1,input2,input3,input4) =>{
if(typeof (input1&&input2&&input3&&input4) !== `number`){
    return console.log("Silakan Masukkan Input berupa Number");
}
rata2 = (input1+input2+input3+input4)/4;

if(rata2>=90){
    grade = "A";
}else if(rata2>=80){
    grade = "B"
}else if(rata2>=70){
    grade = "C"
}else if(rata2>=60){
    grade = "D"
}else{
    grade = "E"
}
return reconsole.log(`Rata-rata = ${rata2} \nGrade = ${grade}`);
}

average(matematika,bahasaIndonesia,
    bahasaInggris,ipa)

