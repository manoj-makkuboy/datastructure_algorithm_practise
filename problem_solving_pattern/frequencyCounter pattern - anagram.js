function validAnagram(str1, str2){
    console.log("str1", str1)
    console.log("str2", str2)
    let str1Obj = transformStringToObjectCount(str1)
    let str2Obj = transformStringToObjectCount(str2)

    console.log("str1Obj", JSON.stringify(str1Obj))
    console.log("str2Obj", JSON.stringify(str2Obj))

    
    for (let item in str1){
        if(!(str1Obj[str1[item]] && str2Obj[str1[item]]))
            return false
        if(str1Obj[str1[item]] !== str2Obj[str1[item]])
            return false
    }
    
    console.log("returns true")
    return true
}


function transformStringToObjectCount(toConvertString){
        let obj = {}
        for (let char1 in toConvertString) {
            obj[toConvertString[char1]] = (obj[toConvertString[char1]] || 0) + 1 
        }
        return obj
}


console.log(validAnagram('rat', 'cat')) // false
console.log(validAnagram('manoj', 'jonam')) // true