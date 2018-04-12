// Check functions


/*
 * 
 * name: checkName
 * @param
 * 	name -> nom a verifier
 * @return
 * 	vraie si name contient au moins 2 caracteres
 */
function checkName(name) {
	// TODO: verifier que la longueur de <name> est >= 2 caractères
	return (name.length>=2);
}


/*
 * 
 * name: checkMail
 * @param
 * 	mail -> adresse mail a verifier
 * @return
 * 	vraie si l'adresse mail est valide
 * 	i.e. contient un nom et un domaine separes d'un '@'
 * 	et le domaine contient un nom et une extension separes d'un '.'
 */
function checkMail(mail) {
	var mail_divise = mail.split('@');
	/* Si le tableau de chaines separees
	Contient 2 elements, cela signifie
	Qu'un seul @ est present
	Sinon, le contenu du champs est invalide */
	if(mail_divise.length!=2 || mail_divise[1]=="") return false;
	
	/* Un domaine est compose
	 * d'un nom et d'une extension separes par un point,
	 * on utilise le meme procede que precedemment */
	var domaine_divise = mail_divise[1].split(".");
	if(domaine_divise.length!=2 || domaine_divise[1]=="") return false;
	return true;
}


/*
 * 
 * name: isLeapYear
 * @param
 * 	year -> annee sous forme d'une chaine de caracteres
 * @return
 * 	vraie si l'annee passee en parametre est bissextile
 * 	i.e. est divisible par 400
 * 	ou divisible par 4 mais pas par 100
 */
function isLeapYear(year) {
	return (parseInt(year)%400==0)||((parseInt(year)%4==0)&&(parseInt(year)%100!=0));
}

/*
 * 
 * name: checkDate
 * @param
 * 	les 3 parametres sont des chaines de caracteres
 * @return
 * 	vraie si la date est valide, faux sinon
 */
function checkDate(day,month,year) {
	if(day==null || month==null || year==null) return false;
	/* Si le mois est
	 * avril, juin, septembre ou novembre,
	 * on a 30 jours */
	 if(parseInt(month) in [4,6,9,11] && parseInt(day)>30) return false;
	 /* Si le mois est
	  * fevrier,
	  * on a 29 jours si l'annee est bissextile,
	  * 28 jours sinon */
	 else if(parseInt(month)==2) {
		// si l'annee est bissextile -> 29 jours
		if(isLeapYear(year) && parseInt(day)>29) return false;
		// sinon -> 28 jours
		else if(!isLeapYear(year) && parseInt(day)>28) return false;
	}
	 // pour les autres mois, pas de verifications necessaires
	 // (le champs jour contient 31 jours)
	 return true;
}

/*
 * 
 * name: checkPasswords
 * @param
 * 	pass1, pass2 sont deux chaines de caracteres 
 *	representant 2 mots de passes
 * @return
 * 	vraie si les deux mots de passe sont identiques et s'ils ont
 * 	une longueur d'au moins 6
 */
function checkPasswords(pass1,pass2) {
	return ((pass1.length>=6) && (pass1==pass2));
}

/*
 * 
 * name: checkPasswdStrength
 * @param
 * 	pass -> mot de passe (chaine de caracteres)
 * @return
 * 	2 -> si le mot de passe a une securite forte (minuscule, majuscule et chiffre)
 * 	1 -> si securite intermediaire (au moins 6 caracteres)
 * 	0 -> sinon (securite insuffisante)
 */
function checkPasswdStrength(pass) {
	var regex = '((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])).{6,}';
	if(pass.match(regex)) return 2;
	else if (pass.length<=6) return 0;
	else return 1;
}


