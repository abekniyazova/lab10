let lab1 = [5, 5, 5, 5, 10, 10];
let lab2 = [5, 1, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [10, 5, 3, 5, 5, 5, 10, 10, 10, 2];
let lab6 = [5, 5, 10, 0, 5, 10];
let quiz1 = 50;

function get_sum(lab) {
    let sum = 0;
    for (let i = 0; i < lab.length; i++) {
        sum += lab[i];
    }
    return sum;
}

function main(lab1, lab2, lab3, lab4_5, lab6, quiz1) {
    let sum1 = get_sum(lab1);
    let sum2 = get_sum(lab2);
    let sum3 = get_sum(lab3);
    let sum4_5 = get_sum(lab4_5);
    let sum6 = get_sum(lab6);
    
    let sums = [sum1, sum2, sum3, sum4_5, sum6];
    let total_score = ((sums[0] + sums[1] + sums[2] + sums[3] + sums[4])/240) * 0.6 + (quiz1/100) * 0.4; 
    const results = {
        lab1: lab1,
        lab2: lab2,
        lab3: lab3,
        lab4_5: lab4_5,
        lab6: lab6,
        quiz1: quiz1,
        sums: sums,
        total_score: total_score
    }
    return results
}

console.log(main(lab1, lab2, lab3, lab4_5, lab6, quiz1))