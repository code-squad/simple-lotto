const { mydb } = require("./db.js");

const prompt = "\nType some message:(delete: dd, quit: q!)> ";
const eline = "------------------------------------------------------";

const command = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(prompt);

command.on("line", async (line) => {
  if (line === "dd") {
    console.log("이전 기록을 지웁니다.");
    await mydb.clear();
    line = "This is first message!";
  } else if (line === "q!") {
    console.log("오늘도 좋은 하루 되세요!");
    process.exit(0);
  }

  await mydb.add(line);
  await mydb.read();
  console.log(eline);
  await mydb.count();
  console.log(prompt);
});
