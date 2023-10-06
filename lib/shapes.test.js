const { reduce } = require("rxjs");
const { Circle, Square, Triangle } = require("./shapes.js");

describe("Circle test", () => {
  test("test for a circle with a #D82C20 background", () => {
    const shape = new Circle();
    shape.setColor("#D82C20");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#D82C20" />'
    );
  });
});

describe("Square test", () => {
  test("test for a square with a blue background", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<rect x="70" y="40" width="150" height="150" fill="blue" />'
    );
  });
});


describe("Triangle test", () => {
  test("test for a triangle with a yellow background", () => {
    const shape = new Triangle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<polygon points="150, 20 245, 180 55, 180" fill="yellow" />'
    );
  });
});
