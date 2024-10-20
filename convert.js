const XLSX = require("xlsx");
const fs = require("fs");
const workbook = XLSX.readFile("sheet.xlsx");
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
const result = data.slice(1).map((row) => {
  return {
    question: row[0],
    categories: row[1].split(",").map((category) => category.trim()),
  };
});
const outputPath = "output.json";
fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), "utf8");
console.log(`Data has been written to ${outputPath}`);
