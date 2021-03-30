const GREEN = "\u001b[32m";
const RED = "\u001b[31m";
const RESET = "\u001b[39m";

let hasFailingTest = false;

function test(description, callback) {
  try {
    process.stdout.write(` - ${description}`);
    callback();
    console.log(` ${GREEN}(ok)${RESET}`);
  } catch (e) {
    console.log(` ${RED}(fail)${RESET}`);
    console.log(`   ${e.stack}`);
    console.log(`   ${RED}${e.toString()}${RESET}`);

    hasFailingTest = true;
  }
}

function handleExit(code) {
  if (code !== 0) {
    return;
  }
  if (hasFailingTest) {
    process.exit(1);
  }
}

module.exports = (function () {
  process.on("exit", handleExit);

  return test;
})();
