function convertToAdjList(adjMatrix) {
    var adjList = []
    for (i = 0; i < adjMatrix.length; i++) {
        var innerList = []
        for (j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] == 1) innerList.push(j)
        }
        adjList.push(innerList)
    }
    return adjList;
}