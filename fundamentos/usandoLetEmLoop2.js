const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() { // Push adiciona um elemento no final do array
        console.log(i)
    })
}

funcs[2]()
funcs[8]()