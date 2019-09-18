console.log('hola funciona');
document.querySelector('.apiCall').addEventListener('click',()=>{
    fetch('http://localhost:3000')
    .then((res)=>res.text())
    .then(res=>{
        document.querySelector('.response').innerText=res
    })
    .catch(error=>console.error(error))
})