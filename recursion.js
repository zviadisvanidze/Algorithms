/* 
რეკურსია
ფუნქცა რომელიც საკუთარ თავს იძახებს რეკურსიული ეწოდება
რეკურსიულ ფუნქციაში მთავარია ავღწეროთ ფუნქციიდან გამოსვლის მომენტი

რიცხვის ფაქტორიალი არის ერთიდან ამ რიცხვამდე ნამრავლი რიცხვების ნამრავლი

მაგ. 4-ს ფაქტორიალი არის 1*2*3*4=24

result = 4 * 3 * factorial(2);
result = 4 * 3 * 2 * factorial(1);
result = 4 * 3 * 2 * 1; // 24

*/

const factorial = (n) => {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

//ფიბონაჩის რიცხვები "ყოველი შემდეგი რიცხვი არის მის წინ მდებარე ორი რიცხვის ჯამის ტოლი" -  1,1,2,3,5,8,13,21

const fibonachi = (n) => {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonachi(n-1) + fibonachi(n-2)
}


console.log(factorial(8))
console.log(fibonachi(8))
