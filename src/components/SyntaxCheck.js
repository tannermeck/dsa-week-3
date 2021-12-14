
let string = 'if(true { return; )}'

function syntaxCheck(string){
    const arr = []
    const newString = string.split('')
    // [
    //     'i', 'f', ' ', '(', 't',
    //     'r', 'u', 'e', ')', ' ',
    //     '{', ' ', 'r', 'e', 't',
    //     'u', 'r', 'n', ' ', '}'
    //   ]
    for (let item of newString){
        if (item === '(' || item === ')' || item === '{' || item === '}'){
            arr.push(item);
        }
    }
    // arr = [ '(', ')', '{', '}' ]
    // if opening bracket, next bracket should close unless another bracket opens
    let num = 0;
    for (let item of arr) {
        if (item === '(' || item === '{'){
            num++;
        } else if (item === ')' || item === '}')
            num--;
    }
    return num === 0 ? true : false;
}
console.log(syntaxCheck(string))