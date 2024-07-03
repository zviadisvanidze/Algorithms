/* ბინარული ძებნის ალგორითმი (ორობითი ძებნა)
მოცემულია სორტირებული მასივი და საძიებო მნიშვნელობა.
 */
//მასივი
const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//მთვლელი
let count = 0
//item - საძიებო მნიშვნელობა
function binarySearch(array, item) {
//უნდა ვიპოვოთ მოცემული მასივის ცენტრალური ელემენტი. ამისათვის საჭიროა ვიცოდეთ პირველი და ბოლო ელემენტის ინდექსები
    let start = 0
    let end = array.length
//ცენტრალური ელემენტი    
    let middle;
//ნაპოვნია თუ არა ელემენტი
    let found = false
//თუ არ არსებობს ასეთი ელემენტი დააბრუნებს -1 ინდექსის ნომერს
    let position = -1
    //რეალიზაცია გაუკეთოთ ციკლებით
    while (found === false && start <= end) {
        count+=1
        middle = Math.floor((start + end) / 2); // დამრგვალება ქვედა ზღვრამდე როცა (start + end) კენტია
        if (array[middle] === item) {   // თუ მასივის შუა ელემენტი უდრის საძიებო მნიშვნელობას
            found = true
            position = middle
            return position;  // ნაპოვნი ელემენტის ინდექსი
        }
        if (item < array[middle]) { // როცა საძიებო ელემენტი ნაკლები იქნება შუა ელემენტზე მაშინ ვიღებთ შუალე ელემენტის მარცხნივ დარჩენილებს
            end = middle - 1   // მარცხნივ დარჩენილების ბოლო ელემენტის ინდექსი
        } else {
            start = middle + 1 //მარჯვნივ დარჩენილების პირველი ელემენტის ინდექსი
        }
    }
    return position;
}
//რეალიზაცია გაუკეთოთ რეკურსიით
function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2); // შუა ელემენტის ინდექსის პოვნა
    count += 1 //მთვლელი
    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1 ) //თავისი თავის გამოძახება start=0 და end=middle-1
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end ) //თავისი თავის გამოძახება start=middle+1 და end=end
    }
}
console.log(recursiveBinarySearch(array, 0, 0, array.length))
console.log(count)