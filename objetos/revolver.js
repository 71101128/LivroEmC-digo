var Revolver = {
    nome	 	: "Oitão",
    calibre  	: ".38",
    modelo		: "Taurus RT85S",
    capacidade  : 5,
    carregada	: false,
    posicoes	: [],
    verStatus 	: function() {
        return this.nome + " " + this.calibre + this.carregada ? " carregada " : " descarregada " ;
    },
    carregar 	: function (numMunicaoDisp){
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
	},
	disparar	: function(alvo) {
		this.posicoes.shift();
		this.posicoes.push(false);
		if(!this.posicoes[0])
			this.carregada = false;
	},
	removerBala : function(quantidade) {
		var numMunicao = 0;
		for (var i = this.posicoes.length - 1; i >= 0; i--) {
			if(this.posicoes[i] === true && numMunicao < quantidade){
				numMunicao++;
				this.posicoes[i] = false;
			}
		}
		return numMunicao;
	}
}