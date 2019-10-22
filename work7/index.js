function sort (method){
    let orign = document.getElementById('origin').value
    let logs
    console.log(method)
    if(method=='double'){
        log = bubbleSort(origin)
}else if(method=='insert'){
    logs = insertSort(origin)
}
showDiv = document.getElementById('Anim')
showDiv.innerHTML = logs
}