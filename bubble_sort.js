/* 

ბუშტს ძებნის ალგორითმი
მასივის დასალაგებლად საჭიროა ყველა ელემენტი შედავდაროთ ერთმანეთს და შეუცვალოთ ადგილები 

*/


const arr = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,]


function bubbleSort(array) {
   //ციკლი მასივის სიგრძის მიხედვით
    for (let i = 0; i < array.length; i++) {
        //მეორე ციკლი მასივის სიგრძის მიხედვით
        for (let j = 0; j < array.length; j++) {
            // თუ მასივის მეორე ელემენტი ნაკლებია პირველზე მაშინ უცვლიტ ადგილებს
            if (array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
            
        }
    }
    return array
}


console.log(bubbleSort(arr)) 
