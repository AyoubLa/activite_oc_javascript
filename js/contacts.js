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
		this.contact = [contact];
	}
	ajouterContact(contact){
		this.contact.push(contact);
	}
}