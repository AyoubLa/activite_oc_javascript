/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

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

let listeContacts = new ListeDeContacts(new Contact("Lévisse","Carole"));
listeContacts.ajouterContact(new Contact("Nelsonne","Mélodie"));

let lstContacts = document.getElementById('lstContacts');
let quitter = document.getElementById('quitter');

lstContacts.addEventListener('click', function() {

	for (let i = 0; i < listeContacts.contacts.length; i++) {
		// console.log(listeContacts.contacts.length);
		console.log(listeContacts.contacts[i].nom+' '+ listeContacts.contacts[i].prenom);
		
		
	}
});