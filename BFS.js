class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(obj) {
    this.items.push(obj);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// * Performs a breadth-first search on a graph
// * @param {array} graph - Graph, represented as adjacency lists.
// * @param {number} source - The index of the source vertex.
// * @returns {array} Array of objects describing each vertex, like
// *     [{distance: _, predecessor: _ }]
// */
let doBFS = function (graph, source) {
  let bfsInfo = []; // array of objects //each object represents a vertex// the length of the array === graph.length

  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null,
    };
  }
  //use the source index to start by setting its distence to 0
  bfsInfo[source].distance = 0;

  let queue = new Queue();
  queue.enqueue(source);

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();

    for (let u = 0; u < graph[vertex].length; u++) {
      let neighbor = graph[vertex][u];

      if (bfsInfo[neighbor].distance === null) {
        bfsInfo[neighbor].distance = bfsInfo[vertex].distance + 1;
        bfsInfo[neighbor].predecessor = vertex;
        queue.enqueue(neighbor);
      }
    }
  }
  return bfsInfo;
};

let adjList = [
  [1],
  [0, 4, 5],
  [3, 4, 5],
  [2, 6],
  [1, 2],
  [1, 2, 6],
  [3, 5],
  [],
];
let bfsInfo = doBFS(adjList, 3);
for (var i = 0; i < adjList.length; i++) {
  console.log(
    "vertex " +
      i +
      ": distance = " +
      bfsInfo[i].distance +
      ", predecessor = " +
      bfsInfo[i].predecessor
  );
}

/*Program.assertEqual(bfsInfo[0], { distance: 4, predecessor: 1 });
Program.assertEqual(bfsInfo[1], { distance: 3, predecessor: 4 });
Program.assertEqual(bfsInfo[2], { distance: 1, predecessor: 3 });
Program.assertEqual(bfsInfo[3], { distance: 0, predecessor: null });
Program.assertEqual(bfsInfo[4], { distance: 2, predecessor: 2 });
Program.assertEqual(bfsInfo[5], { distance: 2, predecessor: 2 });
Program.assertEqual(bfsInfo[6], { distance: 1, predecessor: 3 });
Program.assertEqual(bfsInfo[7], { distance: null, predecessor: null });*/
