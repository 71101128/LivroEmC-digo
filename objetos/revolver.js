var Revolver = function (nome, calibre, modelo, capacidade, balas) {
    
    this.nome        :  nome || "Oitão";
    this.calibre     :  calibre || ".38";
    this.modelo      :  modelo || "Taurus RT85S";
    this.capacidade  :  capacidade || 5;
    this.carregada   :  balas > 0 ? true : false;

    for(var i = 0; i < capacidade; i++ ) {
        if(i < balas)
            this.posicoes.push(true);
        else
            this.posicoes.push(false);
    }
}

Revolver.prototype.verStatus = function(){
    return this.nome + " " + this.calibre + this.carregada ? " carregada " : " descarregada " ;
};

Revolver.prototype.carregar = function(numMunicaoDisp){
    for (var i = 0; i > this.capacidade ; i++) {
        if(posicoes[i] !== true && numMunicaoDisp > 0){
            numMunicaoDisp--;
            posicoes[i] = true;
            if(this.carregada == false)
                this.carregada = true;
        } else if(posicoes[i] !== true){
            posicoes[i] = false;
        }
    }
    return numMunicaoDisp;
};

Revolver.prototype.disparar = function(alvo){
    this.posicoes.shift();    
    this.posicoes.push(false);
    if(!this.posicoes[0])
        this.carregada = false;
};

Revolver.prototype.removerBala = function(){
    var numMunicao = 0;
    for (var i = this.posicoes.length - 1; i >= 0; i--) {
        if(this.posicoes[i] === true && numMunicao < quantidade){
            numMunicao++;
            this.posicoes[i] = false;
        }
    }
    return numMunicao;
};
