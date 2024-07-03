// გრაფში წვეროებს შორის უმოკლესი გზის პოვნა
//დეიქსტრას ალგორითმი
//გრაფის აღწერა
const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}
//ფუნქციას უნდა გადავცეთ გრაფი, საწყისი და საბოლოო წვეროები
function shortPath(graph, start, end) {
    const costs = {} //ცხრილი სადაც იქნება მოკლე მარშუტები შენახული
    const processed = [] //შემოწმებული წვეროები
    let neighbors = {} // მეზობელი წვეროები
    //const ცხრილის შევსება წვეროების მონაცემების მიხედვით, თუ წვეროს არ აქვს ზომა მაშინ მივანიჭოთ დიდი მნიშვნელობა
    // მაგალითად : 1000000000
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || 100000000
        }
    })
    let node = findNodeLowestCost(costs, processed)
    while (node) {
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        processed.push(node)
        node = findNodeLowestCost(costs, processed)
    }
    return costs
}
//უმოკლესი მარშუტის ამორჩევა
function findNodeLowestCost(costs, processed) {
    let lowestCost = 100000000
    let lowestNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode
}
console.log(shortPath(graph, 'a', 'g'));