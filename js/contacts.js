/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

let lstContacts = document.getElementById('lstContacts');
let ajouter = document.getElementById('ajouter');
let formulaire = document.getElementById('formulaire');
let quitter = document.getElementById('quitter');
let submitAjout = document.getElementById('submitAjout');
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let contacts = document.getElementById('contacts');

// Classes ---------------------------------
class Contact{
	constructor(nom, prenom){
		this.nom = nom;
		this.prenom = prenom;
	}

}
class ListeDeContacts{
	constructor(contact){
		this.contacts = [contact];
	}
	ajouterContact(contact){
		this.contacts.push(contact);
	}
}


var contact = new Contact("","");
let listeContacts = new ListeDeContacts(new Contact("Lévisse","Carole"));
listeContacts.ajouterContact(new Contact("Nelsonne","Mélodie"));


// Events -----------------------------------
nom.addEventListener('change', function(event){
	contact.nom = event.target.value;
});
prenom.addEventListener('change', function(event){
	contact.prenom = event.target.value;
});

lstContacts.addEventListener('click', function() {
	
	formulaire.style.display = "none";
	while(contacts.firstChild){
		contacts.removeChild(contacts.firstChild);
	}
	for (let i = 0; i < listeContacts.contacts.length; i++) {

		let contactElement = document.createElement('div');
		let textContact = document.createTextNode(listeContacts.contacts[i].nom+' '+ listeContacts.contacts[i].prenom);
		contactElement.setAttribute("class","contact");
		contactElement.appendChild(textContact);
		contacts.appendChild(contactElement);
		
		
	}
});

ajouter.addEventListener('click', function(){

	formulaire.style.display = "block";
});

submitAjout.addEventListener('click', function(event){
	event.preventDefault();
	if(contact.nom !== "" && contact.prenom !== ""){
		listeContacts.ajouterContact(contact);
		let contactElement = document.createElement('div');
		let textContact = document.createTextNode(contact.nom+' '+ contact.prenom);
		contactElement.setAttribute("class","contact");
		contactElement.appendChild(textContact);
		contacts.appendChild(contactElement);
	}else{
		alert("vous devez remplire tous les champs avant de confirmer l'ajout")
	}
	contact = new Contact("","");
});
quitter.addEventListener('click', function(){
	location.reload();
});