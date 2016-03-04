import action from './action';
import { cat, dog } from './data';

console.log( action([ cat, dog ]).join('\n') );

const array: Array<number|boolean> = [1, true];

type A = {
  a: string
  b: string
}
type B = {
  a: string
  c: string
}
interface C {
  a: string
}

class X {
  x: string = "3"
  foo(): string { return 'foo' }
}

class Y extends X {

}

const y = new Y()
y.x = "toto"

const a: A | B = null
const b: A & B = null
// a.
