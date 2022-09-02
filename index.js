const { mydb } = require("./db.js");

const prompt =
  "\n오늘의 응원 메시지를 입력해 주세요:(dd : 전부 삭제, q! : 종료, 1 ~ 200 : 숫자만큼 자동 생성) ";
const eline = "------------------------------------------------------";

const command = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("이름을 입력해 주세요.");

let name = "Mr. Lotto";
let begin = true;

command.on("line", async (line) => {
  if (begin) {
    name = line;
    begin = false;
    console.log(`${name} 님, ${prompt}`);
    return;
  }

  let count = 1;
  if (!isNaN(parseInt(line))) {
    count = parseInt(line);
    line = "자동 생성된 로또 ";
  }

  if (line === "dd") {
    console.log("이전 기록을 지웁니다.");
    await mydb.clear();
    line = "모두 대박 나세요!";
  } else if (
    line === "q!" ||
    line === "exit" ||
    line === "bye" ||
    line.length == 0
  ) {
    console.log("오늘도 좋은 하루 되세요 ≤^오^≥");
    process.exit(0);
  }

  for (let i = 0; i < count; i++) {
    if (i == 0)
      await mydb.add(name, line);
    else
      await mydb.add(name, line + (i + 1));
  }
  await mydb.read();
  console.log(eline);
  await mydb.count();
  console.log(prompt);
});
