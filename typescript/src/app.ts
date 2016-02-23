import action from './action';
import { cat, dog } from './data';

console.log( action([ cat, dog ]).join('\n') );
