let arr = [2, 4, 0, 100, 4, 11, 2602, 36];
function findOutlier(integers) {
    let even = []
    let odd = []
for (let i of integers) {
    if(i%2==0){
        even.push(i)
    }
    else {
        odd.push(i)
    }
}
if(even.length < odd.length) {
    return even[0]
}
else {
    return odd[0]
}
}

findOutlier(arr)