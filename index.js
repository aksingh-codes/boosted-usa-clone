let str = `Electric Skateboards
Electric Scooters
Accessories
FAQs
Warranty
Quick Start Guide
Contact
Gift Card
Accessibility Statement
About Boosted USA
`;

let arr = str.split("\n");

let string = "";

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    string = string+`<li>${element}</li>\n`;
}
console.log(string);