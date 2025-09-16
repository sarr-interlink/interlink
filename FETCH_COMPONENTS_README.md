# Composants Réutilisables pour le Fetch de Données

Ce projet inclut maintenant un système de composants réutilisables pour fetcher les données depuis l'API Strapi. Cela remplace le code répétitif et améliore la maintenabilité.

## Fichiers Créés

### 1. `app/_lib/fetchUtils.js`
Utilitaires génériques pour les appels API:

- **`fetchData(endpoint, options)`** - Fonction utilitaire générique pour fetcher des données
- **`buildEndpoint(resource, id)`** - Construit les endpoints avec ID optionnel

### 2. `app/_lib/useFetch.js` 
Hooks React personnalisés pour la gestion de l'état:

- **`useFetch(endpoint, options, dependencies)`** - Hook générique pour fetcher des données
- **`useFetchList(resource, options)`** - Hook spécialisé pour les listes
- **`useFetchById(resource, id, options)`** - Hook spécialisé pour un élément par ID

## Utilisation

### Exemple 1: Hook pour Liste
```javascript
import { useFetchList } from "../_lib/useFetch";

function MyComponent() {
  const { data, loading, error, refetch } = useFetchList("Products");
  
  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;
  
  return (
    <div>
      {data?.data?.map(item => (
        <div key={item.id}>{item.attributes.name}</div>
      ))}
    </div>
  );
}
```

### Exemple 2: Hook pour Élément Unique
```javascript
import { useFetchById } from "../_lib/useFetch";

function ProductDetail({ productId }) {
  const { data, loading, error } = useFetchById("Products", productId);
  
  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;
  
  return <div>{data?.data?.attributes?.name}</div>;
}
```

### Exemple 3: Fetch Manuel
```javascript
import { fetchData } from "../_lib/fetchUtils";

async function handleAction() {
  try {
    const result = await fetchData("Services", {
      params: "?populate=*&pagination[pageSize]=5",
      method: "GET"
    });
    console.log(result);
  } catch (error) {
    console.error("Erreur:", error);
  }
}
```

### Exemple 4: Hook avec Options Personnalisées
```javascript
import { useFetch } from "../_lib/useFetch";

function CustomComponent() {
  const { data, loading, error, refetch } = useFetch("References", {
    params: "?populate=*&pagination[pageSize]=3",
    fallback: { data: [] }
  });
  
  return (
    <div>
      <button onClick={refetch}>Actualiser</button>
      {/* Render data */}
    </div>
  );
}
```

## Avantages

1. **Réduction du Code Répétitif**: Une seule implémentation pour tous les appels API
2. **Gestion d'État Cohérente**: Loading, error, et data states gérés uniformément
3. **Configuration Flexible**: Options personnalisables pour chaque cas d'usage
4. **Facilité de Maintenance**: Changements centralisés dans les utilitaires
5. **Réutilisabilité**: Peut être utilisé dans n'importe quel composant
6. **TypeScript Ready**: Structure prête pour l'ajout de types

## Options Disponibles

### fetchData options:
- `method`: Méthode HTTP (défaut: "GET")
- `headers`: Headers supplémentaires
- `body`: Corps de la requête
- `params`: Paramètres de requête personnalisés
- `fallback`: Valeur de fallback en cas d'erreur

### Hook options:
- Toutes les options de `fetchData`
- `dependencies`: Dépendances pour useEffect (pour useFetch)

## Composants Mis à Jour

Les composants suivants utilisent maintenant les nouveaux utilitaires:
- `Reference.js` - Utilise `useFetchList("References")`
- `Products.js` - Utilise `useFetchList("Products")`  
- `Testimonial.js` - Utilise `useFetchList("Testimonials")`

## Fonctions data-services Refactorisées

Toutes les fonctions dans `data-services.js` utilisent maintenant `fetchData()`:
- `getMembers()`, `getTestimonials()`, `getServices()`, etc.
- Réduction de ~300 lignes de code répétitif
- Gestion d'erreur cohérente

## Composant de Démonstration

Voir `app/_components/DataFetchDemo.js` pour des exemples d'utilisation détaillés.