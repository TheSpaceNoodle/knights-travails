class Node {
  possibleMoves = [
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
    [2, 1],
    [-2, 1],
    [2, -1],
    [-2, -1],
  ];

  constructor(position, parent) {
    this.parent = parent;
    this.position = position;
  }

  generateMoves() {
    return this.possibleMoves.map((move) => [
      move[0] + this.position[0],
      move[1] + this.position[1],
    ]);
  }
}

const logHistory = (node) => {
  if (node.parent) {
    logHistory(node.parent);
  }

  console.log(node.position);
};

const knightMoves = (start, finish) => {
  let currentNode = new Node(start, null);
  const queue = [];

  while (String(currentNode.position) !== String(finish)) {
    const moves = currentNode.generateMoves();

    moves.forEach((move) => {
      queue.push(new Node(move, currentNode));
    });

    currentNode = queue.shift();
  }

  logHistory(currentNode);
};

knightMoves([3, 3], [4, 3]);
