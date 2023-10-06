const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

function writeToFile(fileName, data) {
  let svglogo = "";
  svglogo =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svglogo += "<g>";
  svglogo += `${data.shape}`;
