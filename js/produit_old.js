window.onload = function() {

	console.log('Hello world :) !');
	// bouton qunatite +/-
	var plus = document.getElementById('plus'),
		moins = document.getElementById('moins'),
		c_panier = document.getElementById('c_panier');
	var nb_article = 1;
	
	plus.onclick = function() {
		nb_article++;
		c_panier.innerText = nb_article;
	}
	moins.onclick = function() {
		if(nb_article>1) nb_article--;
		c_panier.innerText = nb_article;
	}
	
	// gestion de l'image / miniatures
	var img_princ = document.getElementById('img_princ'),
		mini_1 = document.getElementById('mini_1'),
		mini_2 = document.getElementById('mini_2'),
		mini_3 = document.getElementById('mini_3'),
		mini_4 = document.getElementById('mini_4');
		
	mini_1.onclick = function() {
		img_princ.src = mini_1.src;
	}
	mini_2.onclick = function() {
		img_princ.src = mini_2.src;
	}
	mini_3.onclick = function() {
		img_princ.src = mini_3.src;
	}
	mini_4.onclick = function() {
		img_princ.src = mini_4.src;
	}
}	
