const { mydb } = require("./db.js");

const prompt = "Type some message:(quit: bye)> ";

const command = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(prompt);

command.on("line", async (line) => {
  if (line === "bye") {
    console.log("오늘도 좋은 하루 되세요!");
    process.exit(0);
  }

  await mydb.add(line);
  await mydb.count();
  await mydb.read();
  console.log(prompt);
});
