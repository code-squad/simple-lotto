const { mydb } = require("./db.js");

const prompt =
  "\nType some message:(dd : delete, q! : quit, 1 ~ 99 : auto generate) ";
const eline = "------------------------------------------------------";

const command = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(prompt);

command.on("line", async (line) => {
  let count = 1;
  if (!isNaN(parseInt(line))) {
    count = parseInt(line);
    line = "Auto Generate Lotto";
  }

  if (line === "dd") {
    console.log("이전 기록을 지웁니다.");
    await mydb.clear();
    line = "This is first message!";
  } else if (
    line === "q!" ||
    line === "exit" ||
    line === "bye" ||
    line.length == 0
  ) {
    console.log("오늘도 좋은 하루 되세요!");
    process.exit(0);
  }

  for (let i = 0; i < count; i++) {
    await mydb.add(line);
  }
  await mydb.read();
  console.log(eline);
  await mydb.count();
  console.log(prompt);
});
