const { suma } = require("../index.js");

test("debería regresar 8 al pasar como argumentos 6 y 2", () => {
  let a = 6,
    b = 2;

  let result = suma(a, b);

  expect(result).toBe(8);
});
