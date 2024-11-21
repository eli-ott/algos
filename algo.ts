/**
 * Les algorithmes
 */
export class Algorithmes {
	/** Le nombre le plus petit possible  */
	private readonly SMALLER_DIGIT = Number.MIN_VALUE;

	/**
	 * Permet de trouver le plus grand nombre d'un tableau
	 *
	 * @param {number[]} liste La liste de nombre
	 * @returns {number} Le nombre le plus grand de la liste
	 */
	public bigger(liste: number[]): number {
		// Le plus grand nombre enregistré
		let bigger: number = this.SMALLER_DIGIT;

		// On passe sur chaque élément de notre liste
		liste.forEach((num) => {
			// On vérifie si le plus grand nombre enregistré est toujours plus grand
			// Sinon on le remplace
			if (num > bigger) bigger = num;
		});

		return bigger;
	}

	/**
	 * Permet de faire la somme de n entier naturel
	 *
	 * @param {number} n Le nombre d'entier à additionner
	 * @returns {number} La somme des entiers naturels
	 */
	public sommeNaturel(n: number): number {
		let somme: number = 0;

		// On passe sur chaque élément de notre tableau
		// Et on additionne tous les index (+ 1 car ça commence à 0) de la boucle pour avoir tous les nombres entiers
		Array.apply(null, Array(5)).forEach((val: number, i: number) => (somme += i + 1));

		return somme;
	}

	/**
	 * Permet de vérifier si un mot est palindrome
	 *
	 * @param {string} mot Le mot en question
	 * @returns {boolean} Si le mot est un palindrome ou non
	 */
	public palindrome(mot: string): boolean {
		// On vérifie si le mot renseigné correspond à ce même mot retourné
		// Et on le renvoi sous forme de boolean car c'est juste une vérification
		return mot === mot.split('').reverse().join('');
	}

	/**
	 * Permet de générer les nombres pairs jusqu'a un nombre donné
	 *
	 * @param {number} limite Le nombre limite
	 * @returns {number[]} La liste des nombres pairs
	 */
	public pairs(limite: number): number[] {
		// La liste des nombres pairs
		let liste: number[] = [];

		// On fait une boucle avec comme limite le nombre indiqué
		// Et on ajoute +2 à l'index pour avoir tous les nombres pairs
		for (let i = 0; i <= limite; i += 2) liste.push(i);

		return liste;
	}

	/**
	 * Permet de trier une liste de nombre
	 *
	 * @param {number[]} liste La liste de nombre
	 * @returns {number[]} La liste de nombre trié
	 */
	public trierListe(liste: number[]): number[] {
		// On trie les éléments avec la fonction prévu en JS
		// En la modifiant un peut pour pas trier tous les 1 ensemble comme [1, 12, 2, 23, 23456]
		return liste.sort((a, b) => a - b);
	}
}

// Notre liste de nombre pour éviter d'en écrire plusieurs fois une
const listeNombre = [234, 23, 5546, 23, -657, 24, 879, 53453, -34];

// Tous mes algorithmes regroupé dans la même classe
const mesAlgos = new Algorithmes();
console.log('bigger', mesAlgos.bigger(listeNombre), '\n');
console.log('somme naturel', mesAlgos.sommeNaturel(5), '\n');
console.log('palindrome', mesAlgos.palindrome('non'), mesAlgos.palindrome('palindrome'), '\n');
console.log('nombres pairs', mesAlgos.pairs(10), '\n');
console.log('tri', mesAlgos.trierListe(listeNombre), '\n');
