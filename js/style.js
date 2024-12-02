let errorlog =document.getElementById('error')
let form =document.getElementById('form')
let floatingInputs=document.getElementById('floatingInput')
let floatingPasswords=document.getElementById('floatingPassword')

form.addEventListener('click',function(event){
    let error=[];
    if(floatingInputs.value===''||floatingInputs==null){
        error.push('All inputs is required')
    }
    if(floatingPasswords.value.length < 5){
        error.push('error password')
    }
        if(error.length > 0 ){
            event.preventDefault();
            errorlog.innerHTML= error.join('<br>')
        }

    

})