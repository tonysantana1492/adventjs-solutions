function createCube(side) {
  const top = [];
  const bottom = [];

  for (let i = 1; i <= side; i++) {
    top.push(
      `${" ".repeat(side - i)}${"/\\".repeat(i)}${"_\\".repeat(side)}${" ".repeat(side - i)}`
    );
    bottom.push(
      `${" ".repeat(i - 1)}${"\\/".repeat(side - i + 1)}${"_/".repeat(side)}${" ".repeat(i - 1)}`
    );
  }

  return [...top, ...bottom].join("\n");
}

const cube = createCube(4);

console.log(cube);
