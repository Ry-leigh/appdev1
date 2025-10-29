import { greetD } from './ModuleD.jsx';

export function greetC() {
  console.log('Hello from ModuleC');
  greetD();
}
