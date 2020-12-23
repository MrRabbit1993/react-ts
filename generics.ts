// 泛型
function customEcho<T>(params: T): T {
  return params
}
const number1 = customEcho<number>("123")
const number2 = customEcho<number>(123)
const number3 = customEcho(123)

// 泛型约束
interface HasLength {
  length: number | string
}
function ConsoleLength<T extends HasLength>(params: T): T {
  console.log(params.length)
  return params
}
ConsoleLength([1, 2, 3])
ConsoleLength("1")
ConsoleLength({ length: 1, width: 2 })
ConsoleLength({ length: "1", width: 2 })