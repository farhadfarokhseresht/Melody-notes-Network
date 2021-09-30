const NODES = 300;
const GROUPS = 12;
const gData = {
      nodes: [...Array(NODES).keys()].map(i => ({
        id: i,
        group: Math.ceil(Math.random() * GROUPS)
      })),
      links: [...Array(NODES).keys()]
        .filter(id => id)
        .map(id => ({
          source: id,
          target: Math.round(Math.random() * (id-1))
        }))
    };

const distance = 1400;

const Graph = ForceGraph3D()
      (document.getElementById('3d-graph'))
        .enableNodeDrag(false)
        //.jsonUrl('assets/js/miserables.json')
        .nodeAutoColorBy('group')
        .showNavInfo(false)
        .cameraPosition({ z: distance })
        .graphData(gData);

// camera orbit
let angle = 0;
setInterval(() => {
      Graph.cameraPosition({
        x: distance * Math.sin(angle),
        z: distance * Math.cos(angle)
      });
      angle += Math.PI / 150;
    }, 0);

