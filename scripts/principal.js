function efeito(nome_div){

		var principal = document.getElementById('principal');
		var projeto_autores = document.getElementById('projeto_autores');
		var fale_conosco = document.getElementById('fale_conosco');

        switch(nome_div){
        	case "principal":
        		principal.style.display = 'block';
        		projeto_autores.style.display = 'none';
        		fale_conosco.style.display = 'none'; 		
        		break;

        	case "projeto_autores":
        		principal.style.display = 'none';
                        projeto_autores.style.display = 'block';
                        fale_conosco.style.display = 'none'; 
        		break;

        	case "fale_conosco":        	
        		principal.style.display = 'none';
                        projeto_autores.style.display = 'none';
                        fale_conosco.style.display = 'block'; 
        		break;
        }

}