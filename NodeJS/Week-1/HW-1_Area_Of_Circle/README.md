# CALCULATE AREA of CIRCLE

The project that calculates the area of the circle with the radius value which entered in the console.

## Usage

```
node index radius
```

```js
const areaCircle = require("./areaCircle.js");

const consoleValue = process.argv.slice(2); // Asking radius

console.log(areaCircle(consoleValue));
```

```js
// Area of Circle

const areaCircle = (radius) => {
  // Calculate Area
  var area = Math.PI * Math.pow(radius, 2);
  // Log Result
  console.log(`Area of circle with radius ${radius} is ${area.toFixed(2)}.`);
};

module.exports = areaCircle;
```

## Example

Input

    node index 10

Result

    Area of circle with radius 10 is 314.16.

## License

[MIT](https://github.com/dogancanulgu)
