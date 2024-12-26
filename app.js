// Initialiser la carte
var map = L.map('map', {
    crs: L.CRS.Simple,  // Utiliser un système de coordonnées simple (pour les cartes d'image)
    minZoom: 1,         // Définir le niveau de zoom minimum
    maxZoom: 3          // Définir le niveau de zoom maximum
});

// Définir les limites de la carte en fonction de la taille réelle de l'image (2048x2048)
var bounds = [[0, 0], [2048, 2048]]; // Taille de l'image

// Ajouter l'image comme fond de la carte
L.imageOverlay('https://www.grandtheftauto5.fr/images/cartes/carte-routiere-gta-5.jpg', bounds).addTo(map);

// Centrer la carte et définir le niveau de zoom initial
map.setView([1024, 1024], 2); // Centrer sur le milieu de l'image (1024, 1024) et définir un zoom modéré
