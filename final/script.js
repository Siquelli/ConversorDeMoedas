function converter(){
    var num = document.getElementById('num').value
    var res = document.getElementById('res')
    res.innerHTML = `${num} dólares equivale à R$${(num * 5.51).toFixed(2)}.`
}