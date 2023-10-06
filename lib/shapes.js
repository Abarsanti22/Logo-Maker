class Shape {
    constructor() {
      this.color = "";
    }

    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  class Square extends Shape {
    render() {
      return `<rect x="70" y="40" width="150" height="150" fill="${this.color}" />`;
    }
  }
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 20 245, 180 55, 180" fill="${this.color}" />`;
    }
  }

  module.exports = { Circle, Square, Triangle };
