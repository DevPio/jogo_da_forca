class CreatCard {
    



    creatCards(palavraLength){

        return `
        
            ${palavraLength.split('').map(item=>{
                return `
                    <div class="lacuna"></div>
                
                `
            }).join('')}
        
        
        
        `
    }
    inputLetras(index,texto){
        let letras = document.querySelectorAll('.lacuna')
        letras[index].textContent = texto
    }
    erroView(erro){
        let containerError = document.querySelector('.sprite')

        
        if(containerError.classList.contains('frame')){
            containerError.classList.remove(`frame${erro - 1}`)
        }else{
            containerError.classList.add(`frame${erro}`)
        }
        
    }
    limpaErro(){
        let containerError = document.querySelector('.sprite')

        for (let index = 0; index < 9; index++) {
            containerError.classList.remove(`frame${index}`)
            
        }
    }
}