// Area of Circle

const areaCircle = (radius) => {
  // Calculate Area
  var area = Math.PI * Math.pow(radius, 2);
  // Log Result
  console.log(`Area of circle with radius ${radius} is ${area.toFixed(2)}.`);
};

module.exports = areaCircle;
