//Tugas 4
//a
console.log("soal A");
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};
let data2 = {
  name: "wachid nur afif",
  email: "wachidnurafif97@gmail.com",
  hobby: ["memancing", "fotografi"],
};
data = { ...data, ...data2 };
console.log(data);
//b
console.log("soal B");
let { street, city } = data.address;
console.log(street);
console.log(city);
