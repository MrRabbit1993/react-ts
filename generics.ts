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

// 泛型类
class CreateQueue<T> {
  private queue = []
  push(item: T) {
    this.queue.push(item)
  }
  pop(): T {
    return this.queue.shift()
  }
}
const stringQueue = new CreateQueue<string>()
stringQueue.push("1")
console.log(stringQueue.pop().length)
const numberQueue = new CreateQueue<number>()
numberQueue.push(1)
console.log(numberQueue.pop().toFixed(2))

// 泛型接口
interface KeyValue<T, U> {
  key: T
  value: U
}

const a: KeyValue<number, string> = { key: 1, value: "2" }
const b: KeyValue<string, number> = { key: "1", value: 2 }

interface Plus<T> {
  (a: T, b: T): T
}
function plus(a, b) {
  return a + b
}
const a1: Plus<number> = plus
const a2: Plus<string> = plus
const a3: Plus<number> = (a, b) => a + b
const a4: (a: number, b: number) => number = (a, b) => a + b
const a5: (a: string, b: string) => string = (a: string, b: string) => a + b
const a6: Plus<string> = (a: string, b: string) => a + b


const numberArray: Array<number> = [1, 2, 3]