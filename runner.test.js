const assert = require("assert").strict;
const test = require("./runner");

test("can expect values", () => {
  assert.strictEqual(1 + 1, 2, "1 + 1 should equal 2");
});

test("can expect exceptions", () => {
  assert.throws(() => {
    throw new Error("This is an expected error");
  }, /This is an expected error/);
});
