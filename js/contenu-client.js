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
  restaurant: "Ô Petit Bistrot", city: "Paris", tagline: "Une cuisine de saison, faite avec amour.",
  phone: "01 84 25 00 00", phoneLink: "+33184250000", email: "bonjour@opetitbistrot.fr",
  addressLines: ["18, rue des Gourmets", "75011 Paris"], mapsAddress: "18 rue des Gourmets 75011 Paris",
  hours: ["Mar. — Ven. : 12h — 14h30", "Mar. — Sam. : 19h — 22h30", "Dim. & Lun. : fermé"],
  instagram: "#", facebook: "#", // Collez ici les liens de vos réseaux sociaux.
  // 2. PAGE D'ACCUEIL
  hero: { smallTitle: "Paris · Depuis 2012", title: "Le goût des <em>beaux moments.</em>", text: "Une cuisine française sincère, inspirée par les saisons et servie avec le sourire." },
  // 3. PRÉSENTATION
  story: { title: "Un petit bistrot, <em>beaucoup de cœur.</em>", firstParagraph: "Au coin d’une rue parisienne, Ô Petit Bistrot célèbre les grands classiques avec une touche de liberté. Ici, les produits frais guident chaque assiette et les tablées s’éternisent volontiers.", secondParagraph: "Notre cuisine est généreuse, notre cave curieuse et notre porte toujours ouverte aux amoureux du bien-manger." },
  // 4. CARTE : ajoutez ou retirez simplement une ligne complète entre { }.
  menu: {
    classiques: [
      { name: "Anchois", description: "", price: "9,50 €" }, { name: "Fromage", description: "", price: "10,00 €" }, { name: "Champignons | Fromage", description: "", price: "10,50 €" }, { name: "Jambon | Fromage", description: "", price: "11,00 €" }, { name: "Mozzarella", description: "", price: "11,00 €" }, { name: "Chèvre | Fromage", description: "", price: "11,00 €" }, { name: "Roquefort | Fromage", description: "", price: "11,00 €" }, { name: "Brousse | Fromage", description: "", price: "11,00 €" }, { name: "Figatelli | Fromage", description: "", price: "11,00 €" }, { name: "Chorizo | Fromage", description: "", price: "11,00 €" }, { name: "Camembert | Fromage", description: "", price: "11,00 €" }, { name: "Lardons | Fromage", description: "", price: "11,00 €" }, { name: "Aubergines | Fromage", description: "", price: "11,00 €" }, { name: "Oignons | Fromage", description: "", price: "11,00 €" }, { name: "Poivrons | Fromage", description: "", price: "11,00 €" }, { name: "Thon | Fromage", description: "", price: "11,50 €" }
    ],
    armeniennes: [
      { name: "Arménienne", description: "Bœuf haché, poivrons, oignons", price: "12,50 €" }, { name: "Beurek", description: "Façon pizza", price: "12,50 €" }, { name: "Soudjouk", description: "Saucisson de bœuf arménien, emmental, sauce tomate", price: "12,50 €" }, { name: "Basterma", description: "Jambon de bœuf arménien, emmental, sauce tomate", price: "12,50 €" }, { name: "Sevan", description: "Arménienne, emmental, aubergine", price: "13,50 €" }, { name: "Ararat", description: "Soudjouk, pomme de terre, feta, crème fraîche", price: "13,50 €" }, { name: "Kashkaval", description: "Kashkaval, emmental, sauce tomate", price: "12,50 €" }, { name: "Massis", description: "Soudjouk, kashkaval, champignons, emmental, sauce tomate", price: "14,00 €" }
    ],
    speciales: [
      { name: "4 fromages", description: "Chèvre, roquefort, emmental, mozzarella, sauce tomate", price: "12,50 €" }, { name: "Royale", description: "Jambon, champignons, mozzarella, sauce tomate", price: "12,50 €" }, { name: "Provençale", description: "Mozzarella, pesto, emmental, sauce tomate", price: "12,00 €" }, { name: "Chèvre miel", description: "Chèvre, miel, crème fraîche, emmental", price: "12,00 €" }, { name: "Corse", description: "Figatelli, brousse, emmental, sauce tomate", price: "12,00 €" }, { name: "Kebab", description: "Kebab, crème fraîche, emmental, sauce tomate", price: "12,00 €" }, { name: "Méditerranéenne", description: "Thon, brousse, emmental, crème fraîche", price: "12,50 €" }, { name: "La tartiflette", description: "Lardons, oignons, pomme de terre, reblochon, emmental, crème fraîche", price: "13,50 €" }, { name: "Fermière", description: "Crème fraîche, poulet, champignons, emmental", price: "12,00 €" }, { name: "Carbonara", description: "Crème fraîche, lardons, oignons, emmental", price: "12,00 €" }, { name: "Végétarienne", description: "Poivrons, oignons, aubergine, emmental, sauce tomate", price: "12,50 €" }, { name: "L'indienne", description: "Poulet, curcumin, poivrons, emmental, crème fraîche", price: "12,00 €" }, { name: "La Montagnarde", description: "Lardons, oignons, crème fraîche, pomme de terre, emmental", price: "13,00 €" }, { name: "La Normande", description: "Lardons, oignons, camembert, emmental, crème fraîche", price: "13,00 €" }, { name: "La Fromagère", description: "Reblochon, brousse, emmental, sauce tomate", price: "13,00 €" }, { name: "L'espagnol", description: "Chorizo, poivron, emmental, sauce tomate", price: "12,00 €" }, { name: "Napolitaine", description: "Anchois, câpres, mozzarella, sauce tomate", price: "13,00 €" }, { name: "La Nooro", description: "Kebab, emmental, pesto, base crème", price: "13,00 €" }, { name: "La Nutella", description: "Supplément coco ou Smarties : 0,50 €", price: "10,00 €" }
    ],
    boissons: [{ name: "Bouteille de vin", description: "Rouge, rosé ou blanc · 75 cl", price: "7,00 €" }, { name: "Bouteille de soda", description: "", price: "4,00 €" }, { name: "Bière Heineken", description: "25 cl", price: "3,00 €" }]
  },
  // 5. AVIS CLIENTS
  reviews: [{ text: "« Un vrai coup de cœur. Une cuisine précise, généreuse et une équipe aux petits soins. Le genre d’adresse que l’on garde précieusement. »", author: "Camille R.", source: "Google" }, { text: "« Des produits sublimes et une ambiance qui fait oublier le temps. Mention spéciale pour le cabillaud et le service plein de chaleur. »", author: "Julien M.", source: "Tripadvisor" }, { text: "« Le bistrot parisien comme on l’aime : simple en apparence, remarquable dans l’assiette. Nous reviendrons sans hésiter. »", author: "Sarah L.", source: "Google" }],
  // 6. CONTACT : les coordonnées ci-dessus sont mises à jour automatiquement sur le site.
};
