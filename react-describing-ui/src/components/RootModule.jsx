import { greetA } from './modules/ModuleA.jsx';
import { greetB } from './modules/ModuleB.jsx';
import { greetC } from './modules/ModuleC.jsx';

export function rootGreet() {
  console.log('Hello from RootModule');
  greetA();
  greetB();
  greetC();
}
