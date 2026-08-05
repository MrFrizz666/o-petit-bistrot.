/*
  ╔══════════════════════════════════════════════════════════════╗
  ║          Ô PETIT BISTROT — DOCUMENT À MODIFIER               ║
  ║                                                              ║
  ║ Modifiez uniquement les textes entre guillemets dans ce      ║
  ║ fichier. Enregistrez, puis actualisez le site pour voir      ║
  ║ les changements.                                             ║
  ╚══════════════════════════════════════════════════════════════╝
*/
const BISTROT_CONTENT = {
  // 1. INFORMATIONS PRINCIPALES
  restaurant: "Ô Petit Bistrot", city: "Marseille", tagline: "Une cuisine de saison, faite avec amour.",
  phone: "04 91 31 90 50", phoneLink: "+33491319050", email: "bonjour@opetitbistrot.fr",
  addressLines: ["15 Rte des Trois Lucs à la Valentine", "13012 Marseille"], mapsAddress: "15 Rte des Trois Lucs à la Valentine, 13012 Marseille",
  hours: ["Mar. — Ven. : 12h — 14h30", "Mar. — Sam. : 19h — 22h30", "Dim. & Lun. : fermé"],
  instagram: "https://www.instagram.com/opetitbistro/", facebook: "#", // Collez ici les liens de vos réseaux sociaux.
  // 2. PAGE D'ACCUEIL
  hero: { smallTitle: "Paris · Depuis 2012", title: "Le goût des <em>beaux moments.</em>", text: "Une cuisine française sincère, inspirée par les saisons et servie avec le sourire." },
  // 3. PRÉSENTATION
  story: { title: "Un petit bistrot, <em>beaucoup de cœur.</em>", firstParagraph: "Au coin d’une rue parisienne, Ô Petit Bistrot célèbre les grands classiques avec une touche de liberté. Ici, les produits frais guident chaque assiette et les tablées s’éternisent volontiers.", secondParagraph: "Notre cuisine est généreuse, notre cave curieuse et notre porte toujours ouverte aux amoureux du bien-manger." },
  // 4. CARTE : ajoutez ou retirez simplement une ligne complète entre { }.
  menu: {
    entrees: [{ name: "Œuf parfait, crème de champignons", description: "Émulsion de parmesan, mouillettes de brioche", price: "12 €" }, { name: "Gravlax de saumon maison", description: "Betterave, pomme verte et aneth frais", price: "14 €" }, { name: "Velouté de saison", description: "Huile d’herbes, croûtons au levain", price: "10 €" }],
    plats: [{ name: "Filet de bœuf, sauce au poivre", description: "Pommes grenailles rôties et légumes du marché", price: "28 €" }, { name: "Dos de cabillaud nacré", description: "Risotto au citron confit, jus de coquillages", price: "26 €" }, { name: "Gnocchi à la courge rôtie", description: "Noisettes torréfiées, bleu d’Auvergne", price: "22 €" }],
    desserts: [{ name: "Mi-cuit au chocolat noir", description: "Glace vanille de Madagascar", price: "10 €" }, { name: "Tarte fine aux pommes", description: "Crème crue et caramel beurre salé", price: "10 €" }, { name: "Crème brûlée à la fève tonka", description: "La recette traditionnelle du bistrot", price: "9 €" }]
  },
  // 5. AVIS CLIENTS
  reviews: [{ text: "« Un vrai coup de cœur. Une cuisine précise, généreuse et une équipe aux petits soins. Le genre d’adresse que l’on garde précieusement. »", author: "Camille R.", source: "Google" }, { text: "« Des produits sublimes et une ambiance qui fait oublier le temps. Mention spéciale pour le cabillaud et le service plein de chaleur. »", author: "Julien M.", source: "Tripadvisor" }, { text: "« Le bistrot parisien comme on l’aime : simple en apparence, remarquable dans l’assiette. Nous reviendrons sans hésiter. »", author: "Sarah L.", source: "Google" }],
  // 6. CONTACT : les coordonnées ci-dessus sont mises à jour automatiquement sur le site.
};
