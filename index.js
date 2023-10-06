const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

function writeToFile(fileName, data) {
  let svglogo = "";
  svglogo =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svglogo += "<g>";
  svglogo += `${data.shape}`;

   let shapeChoice;
  if (data.shape === "Circle") {
    shapeChoice = new Circle();
    svglogo += `<circle cx="150" cy="115" r="80" fill="${data.shapeBackgroundColor}"/>`;
  } else if (data.shape === "Square") {
    shapeChoice = new Square();
    svglogo += `<rect x="70" y="40" width="150" height="150" fill="${data.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Triangle();
    svglogo += `<polygon points="150, 20 245, 180 55, 180" fill="${data.shapeBackgroundColor}"/>`;
  }

  svglogo += `<text x="150" y="125" text-anchor="middle" font-size="50" fill="${data.textColor}">${data.text}</text>`;
  svglogo += "</g>";
  svglogo += "</svg>";

  fs.writeFile(fileName, svglogo, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

