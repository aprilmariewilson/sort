import { NumberCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([50, 12, 23, 5, -5, 23]);
numberCollection.sort();
console.log(numberCollection.data);

// const charactersCollection = new CharactersCollection('aXbyz');
// charactersCollection.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(-4);
linkedList.add(17);
linkedList.add(23);
linkedList.add(-15);

linkedList.sort();
linkedList.print();
