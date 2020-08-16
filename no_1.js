let data = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

function solution(record) {
    var answer = [];
    var output = [];
    var dataUser = new Map() 
    let length = record.length

    for (let i = 0; i < length ; i++) {
      let input = record[i].split(" ");
      if(input[1].length < 1 || input[1].length >10){
        continue
      }
      let action = input[0]
      input[2] && dataUser.set(input[1],input[2])  

      switch (action) {
        case "Enter":
          if(dataUser.get(input[1])){
              output.map(item => item[0] === input[1] ? item[1] = input[2]: "" )
          }
          output.push([input[1],input[2],"came in"])
          break
        case "Leave":
          output.push([input[1],dataUser.get(input[1]),"has left"])
          break
        case "Change":
          output.map(item => item[0] === input[1] ? item[1] = input[2]: "" )
          break
        default:
          ""
      }
    }
    output.map(item => answer.push(item[1]+" "+item[2]))
    return answer;
}
console.log("record : ["+data+"]");
let result = solution(data)
console.log("record : ["+result+"]");