var input = [
  ["100","ryan","music","2"],["200","apeach","math","2"],
  ["300","tube","computer","3"],["400","con","computer","4"],
  ["500","muzi","music","3"],["600","apeach","music","2"]
  ]

const getSuperSet = 
      theArray => theArray.reduce(
        (subsets, value) => subsets.concat(
         subsets.map(set => [value,...set])
        ),
        [[]]
      );

const generateAttNumbs = sumOfAtt => {
  var setOfAtt = []
  for (let i = 0; i < sumOfAtt; i++) {
    setOfAtt.push(i)
    }
  return setOfAtt
}
const inputLimitation = (input) =>{
  const relationInput = input[0].length >= 1 && input[0].length <=8 
  const rowInput = input.length >= 1 && input.length <=10
  const stringInput = input.reduce((value,item)=>
      value && item.reduce((value,item)=>
      value && (item.match(/^[0-9a-zA-Z]+$/) && (item.length <=8 && item != "")), true), 
    true
  )
  return relationInput && rowInput && Boolean(stringInput)
}
function solution(relation) {
  if(!inputLimitation(relation)){return 0}
  const atts = generateAttNumbs(relation[0].length)
  const superSetAtt = getSuperSet(atts)
  var mySet = new Set()
  var tempString = ""
  var keySelected = []
  let isInclude = false

  superSetAtt.shift()
  for(var i=0; i < superSetAtt.length;i++){
    isInclude = keySelected.reduce(
      (result,item)=> 
        result || superSetAtt[i].toString().trim().replaceAll(",","").includes(item),
        false)

    if(isInclude && i>0) {continue}
    relation.map(data=> {
    superSetAtt[i].map(key=> tempString+=data[key])
    mySet.add(tempString)
    tempString=""
    })
    mySet.size === relation.length ? keySelected.push(superSetAtt[i].toString().replaceAll(",","")) : "" 
    mySet.clear()
}
  return keySelected.length;
}

console.log("answer : "+solution(input))