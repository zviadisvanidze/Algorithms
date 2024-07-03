//სიგანზე ძებნის ალგორითმი BFS
// რიგის პრინციპი FIFO (პირველი მოხვედი, პირველი მიდიხარ)
// უნდა ვიპოვოთ გრაფის წვეროებს შორის კავშირი ანუ მისასვლელი გზის არსებობა წვეროებს შორის

//გრაფის აღწერა
const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

//ფუნქციას უნდა გადავცეთ, გრაფი, საწყისი წვერო და საბოლო წვერო
function breadthSearch(graph, start, end) {
    //შევქნათ რიგის მასივი და ჩავსვათ საწყისი წვერო
    let queue = []
    queue.push(start)
    while (queue.length > 0) {
        //რიგიდავ ვიღებთ პირველ ელემენტს და ვამოწმებთ გრაფში ყავს თუ არა შვილი ელემენტები
        const current = queue.shift()
        if (!graph[current]) {
            //თუ არ ყავს ვანიჭებთ ცალიელ მნიშვნელობას
            graph[current] = []
        }
        // ვამოწმებთ გრაფის ელემენტს თუ ის საბოლოო წერტილია, ვაბრუნებთ "TRUE"
        if (graph[current].includes(end)) {
            return true
        } else {
            //თუ წინა პირობამ არ იმუშავა, რიგში ვამატებთ ახალ წვეროს
            queue = [...queue, ...graph[current]]
        }
    }
    return false
}

console.log(breadthSearch(graph, 'a', 'g'))
