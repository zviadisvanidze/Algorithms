/* 
ხაზზე ძებნის ალგორითმი
მოცემულია შემთხვევითი რიცხვების მასივი და საძიებო მნიშვნელობა.
უნდა ვიპოვოთ მასივის რომელი ელემენტი შეესაბამება საძიებო მნიშვნელობას 
*/

//მასივი
const array = [1,4,5,8,5,1,2,7,5,2,11]
//მთვლელი
let count = 0
//item საძიებო მნიშვნელობა
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
           // i- ინდექსი
            return i;
        }
    }
    return null
}
//დაიბეჭდება მასივის ინდექსი საძიებო მნიშვნელობის შესაბამისად
console.log(linearSearch(array, 7))
//დაიბეჭდება მთცლელი. თუ რამდენი ოპერაცია დაჭირდა საძიებო მნიშვნელობის ინდექსის პოვნას
console.log('count = ', count)