// let message = "Hello World";
// alert(message);

// let hobbies = ["reading", "hiking", "sports"];
// alert(hobbies);
// console.log(hobbies[2]);
// let job = { title: "Developer", place: "Cape Town", yearsService: 5 };
// console.log(job.title);

let yearsAdult;

function calcAdultYears(age) {
  console.log(`In function with age: ${age}`);
  return age - 18;
}

yearsAdult = calcAdultYears(45);
console.log(yearsAdult);

yearsAdult = calcAdultYears(55);
console.log(yearsAdult);

let person = {
  name: "Stephen",
  greet() {
    alert("Hello there");
  },
};

person.greet();
