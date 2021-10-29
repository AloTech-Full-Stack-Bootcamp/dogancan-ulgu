const fs = require("fs");

// Added Odev Folder

fs.mkdir("./Odev", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("Odev Folder has been added");
});

// Create and Write to employees.json File

fs.writeFile(
  "./Odev/employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf-8",
  (err) => {
    if (err) console.log(err);
    console.log("Data has been created");
  }
);

// Read employees.json

fs.readFile("./Odev/employees.json", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("Data has been read");
});

// Update employees.json

fs.appendFile(
  "./Odev/employees.json",
  ',\n{"name": "Employee 2 Name", "salary": 2500}',
  "utf-8",
  (err) => {
    if (err) console.log(err);
    console.log("Employees File has been updated");
  }
);

// Delete employees.json

fs.unlink("./Odev/employees.json", (err) => {
  if (err) console.log(err);
  console.log("Employees File has been deleted");
});

// Delete Odev Folder

fs.rmdir("./Odev", (err) => {
  if (err) console.log(err);
  console.log("Odev Folder has been deleted");
});
