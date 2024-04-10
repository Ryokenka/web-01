1. `package-lock.json` assure des installations cohérentes en verrouillant les versions des dépendances installées. Cela garantit que les mêmes versions des dépendances sont installées sur différentes machines.
2. Le format à 3 chiffres pour les numéros de version dans les dépendances NPM s'appelle Semantic Versioning (SemVer).
3. `devDependency` fait référence aux paquets nécessaires au développement ou aux tests, tandis que `dependency` fait référence aux paquets requis pour que l'application fonctionne en production.
4. Une fermeture (ou IIFE - Immediately Invoked Function Expression) est une fonction JavaScript qui s'exécute dès qu'elle est définie. Elle était utilisée pour créer des variables privées et encapsuler le code. JavaScript moderne (ES6) offre de meilleures alternatives comme les variables à portée de bloc en utilisant `let` et `const`.
5. `import * from './utils'` importe tous les exports du module `utils`, tandis que `import { parseUrl } from './utils'` importe uniquement la fonction `parseUrl`. Les conséquences peuvent inclure une pollution potentielle de l'espace de noms et une augmentation de la taille du bundle avec le premier.
6. En Java, vous ne pouvez pas réaffecter des méthodes aux classes à l'exécution, et vous ne pouvez pas ajouter ou supprimer dynamiquement des méthodes des classes, contrairement aux classes ES6.
7. `var` a une portée de fonction, tandis que `let` a une portée de bloc. Les variables déclarées avec `var` sont hissées (hoisted) en haut de la fonction, tandis que les variables déclarées avec `let` sont hissées en haut du bloc.
8. `.bind(this)` définit la valeur de `this` à l'intérieur d'une fonction et renvoie une nouvelle fonction avec la valeur `this` spécifiée. Si vous le supprimez, vous perdez la liaison au contexte et `this` peut faire référence à quelque chose d'inattendu. Les fonctions fléchées lient automatiquement `this` de manière lexicale, donc `.bind(this)` n'est pas nécessaire avec elles.
9. Dans `@babel/***`, le symbole `@` désigne un décorateur, utilisé pour modifier ou annoter des classes ou des membres de classe dans Babel.
10. Les Promesses offrent une meilleure gestion des opérations asynchrones, permettant le chaînage et une meilleure gestion des erreurs par rapport aux approches traditionnelles basées sur les rappels (callbacks).
11. Async/await a été introduit dans ECMAScript 2017 (ES8).
12. La programmation orientée composant pour le web est plus maintenable car elle favorise des composants modulaires, réutilisables et encapsulés, ce qui facilite la maintenance du code et sa mise à l'échelle.
13. La programmation fonctionnelle est un paradigme de programmation qui traite le calcul comme l'évaluation de fonctions mathématiques et évite de changer l'état et les données mutables. Elle met l'accent sur les fonctions pures, l'immutabilité et les fonctions d'ordre supérieur.
14. La fonction `map()` en JavaScript crée un nouveau tableau en appelant une fonction fournie sur chaque élément du tableau d'origine.
15. La fonction `filter()` crée un nouveau tableau avec tous les éléments qui réussissent le test implémenté par la fonction fournie.
16. La fonction `reduce()` exécute une fonction réductrice sur chaque élément du tableau, ce qui donne une seule valeur de sortie.
17. `.then()` est utilisé avec les Promesses pour gérer les opérations asynchrones de manière séquentielle, tandis que async/await fournit une syntaxe qui ressemble davantage à du code synchrone pour gérer du code asynchrone sans chaîner les appels `.then()`.
18. Le préfixe `_` sur un fichier Sass indique généralement que le fichier est partiel, ce qui signifie qu'il n'est pas censé être compilé seul mais importé dans d'autres fichiers Sass.