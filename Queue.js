class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;

    for (const item of args) {
      this.push(item);
    }
  }
  get size() {
    return this._tail - this._head;
  }

  push(value) {
    this[this._tail++] = value;
    return this.size;
  }

  pop() {
    const lastItem = this[this._head];
    delete this[this._head++];

    return lastItem;
  }
}

const q1 = new Queue(1, 3, 5);
const q2 = new Queue(2, 4, 6);

/* 
mergeQueues(q1, q2){}
Из двух очередей сделать одну. 
Но в результирующей очереди элементы должны чередоваться.
*/
const mergeQueues = (q1, q2) => {
  const resultMerge = new Queue();

  while (q1.size || q2.size) {
    if (q1.size) {
      const buffer = q1.pop();
      resultMerge.push(buffer);
    }
    if (q2.size) {
      const buffer = q2.pop();
      resultMerge.push(buffer);
    }
  }
  return resultMerge;
};


const user1 = {
  id: 1,
  name: 'Jonh',
  surname: 'Deer',
  age: 36
};
const user2 = {
  id: 2,
  name: 'Jane',
  surname: 'Smith',
  age: 22
};

const jonhMsg = ['str1','str2','str3'];
const janeMsg = ['213','hello','chao'];

const mapWithAllMsg = new Map();

mapWithAllMsg.set (user1, jonhMsg);
mapWithAllMsg.set (user2, janeMsg);

const getMsgFromMap = (user) => mapWithAllMsg.get(user);















