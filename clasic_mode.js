const initData = {
    nodes: [],
    links: []
};
const Graph = ForceGraph3D()
(document.getElementById('3d-graph'))
    .graphData(initData);

prid = [];

function addnod(id, nodecol) {
    const {nodes, links} = Graph.graphData();
    var i = nodes.length
    if (i==0){
        Graph.graphData({
            nodes: [...nodes, {id, color: nodecol}],
            links: [...links, {source: id, target: id}] //Math.round(Math.random() * (id - 1))
        });
        prid.push(id)
    } else {
        Graph.graphData({
            nodes: [...nodes, {id, color: nodecol}],
            links: [...links, {source: id, target: prid[i-1]}] //Math.round(Math.random() * (id - 1))
        });
        prid.push(id)
    }

}

function reset() {
    Graph.graphData({
        nodes: [],
        links: []
    });
    prid = [];
}