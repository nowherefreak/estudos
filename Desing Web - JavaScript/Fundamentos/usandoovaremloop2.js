const funcs  = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
// não respeitou a variavel pq o escopo de var é mucho grande