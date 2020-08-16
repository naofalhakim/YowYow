var N = 5
var users= [2,1,2,6,2,4,3,3]

function solution(N, users) {
    var answer = [];
    var tempA = []
    let a = 0
    if(N > 500 || N < 1 || users.length > 200000 || users.length < 1 || Math.max.apply(null,users) > N +1){
      return []
    }

    for (let i = 1; i <= N; i++) {
        a = users.length
        tempA = users.filter(item=> item > i)
        answer.push([i,(a-tempA.length) /a])
        users = tempA
    }

    answer.sort((a,b) =>
    {
        return a[1]>=b[1]? -1:a[1]<b[1]?1:0;
    })

    return answer.map(item=> item[0]);
}
console.log("N :" + N)
console.log("user : [" +users+"]")
let a = solution(N,users)
console.log("answer: [" +a+"]")