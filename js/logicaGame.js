class Game extends CreatCard{
    constructor(){
        super();
        this.palavra;
        this.inputPalvra = document.querySelector('#entrada');
        this.validacaoPalavra = this.validacaoPalavra.bind(this);
        this.regraJogo = this.regraJogo.bind(this);
        this.cardContainer = document.querySelector('.lacunas');
        this.chute = document.querySelector('#chute');
        this.pontuaErro = {
            pontos:0,
            erros:0
        };
        this.pontoHistoy = 0;

        this.initGame();
        

        

    }
    
    ocultarCampo(){
        this.inputPalvra.classList.add('ocultar');
        this.chute.classList.remove('ocultar');
        this.chute.focus();
    }
    inicioGame(){
        this.inputPalvra.classList.remove('ocultar');
        this.chute.classList.add('ocultar');
        this.palavra = '';
        this.pontuaErro['erros'] = 0;
        this.pontuaErro['pontos'] = 0;
    }
    setPalavra(){
        this.palavra = this.inputPalvra.value;
        
        this.cardContainer.innerHTML = this.creatCards(this.palavra);
        this.ocultarCampo();
        this.limparCampo();
        
    }
    limparCampo(){
        this.inputPalvra.value = '';
    }
    validaInputPalavra(){
        if(!this.inputPalvra.value){
            alert('Digite uma palavra para começar o jogo');
            return false;
        }else{
            this.setPalavra();
            return true;
        }
    }
    validacaoPalavra(event){

        
        if(event['keyCode']===13){
            this.validaInputPalavra();
        }
    }
    ganhou(){
        this.cardContainer.innerHTML = '';
        this.limpaErro();
        alert('Você ganhou');
    }
    verificaGanha(){
        if(this.palavra.length === this.pontuaErro['pontos']){
            setTimeout(()=>{
                this.ganhou();
                this.inicioGame();
            },600);
            return true;     
            
        }else if(this.pontuaErro['erros'] === 8){
            alert('Voce perdeu');
            this.limpaErro();
            this.cardContainer.innerHTML = '';
            this.inicioGame();
            return false;
        }
    }
    pontua(){
        this.pontoHistoy = this.pontuaErro['pontos'];
        for (let index = 0; index < this.palavra.length; index++) {
            if(this.palavra[index] === this.chute.value){
                this.pontuaErro['pontos']++;
                this.inputLetras(index,this.palavra[index]);
            }
                
            
            
        }

        if(this.pontoHistoy == this.pontuaErro['pontos']){
            this.pontuaErro['erros']++;
            this.erroView(this.pontuaErro['erros']);
        }
        this.verificaGanha()

        
    }
    limpaChute(){
        this.chute.value = '';
    }
    regraJogo(event){
        if(event['keyCode']===13){
            this.pontua();
            this.limpaChute();
        }
    }
    chuteJogo(){
        this.chute.addEventListener('keyup',this.regraJogo);
    }
  
    obtemTexto(){
        this.inputPalvra.addEventListener('keyup',this.validacaoPalavra);
    }

    initGame(){
        this.obtemTexto();
        this.chuteJogo();
        
     
    }
}




const gameS = new Game()