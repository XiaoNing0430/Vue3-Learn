// 定义一个接口
export interface Person {
  id: string;
  name: string;
  age: number;
}

// 自定义类型
export type Persons = Array<Person>;