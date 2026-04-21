const fs = require("fs");

// Title for output (for screenshot)
console.log("DearDays File Handling Output\n");

// Sample data (DearDays style)
const memories = [
  {
    text: "Went to beach",
    mood: "happy"
  },
  {
    text: "Completed project",
    mood: "excited"
  }
];

// Write data to file
fs.writeFileSync("memories.json", JSON.stringify(memories, null, 2));
console.log("Memories written to file successfully");

// Read data from file
const data = fs.readFileSync("memories.json", "utf-8");
const parsedData = JSON.parse(data);

console.log("Memories read from file:");
console.log(parsedData);