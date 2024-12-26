// Initialiser la carte
var map = L.map('map', {
    crs: L.CRS.Simple,  // Utiliser un système de coordonnées simple (pour les cartes d'image)
    minZoom: 1,         // Définir le niveau de zoom minimum
    maxZoom: 5          // Définir un niveau de zoom plus élevé pour bien explorer l'image
});

// Taille de l'image originale (2048x2048 pixels)
var imageWidth = 2048;
var imageHeight = 2048;

// Taille de la fenêtre du navigateur
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

// Déterminer le facteur de mise à l'échelle pour que l'image s'ajuste à la fenêtre du navigateur
var scaleFactor = Math.min(windowWidth / imageWidth, windowHeight / imageHeight);

// Calculer les nouvelles limites basées sur le facteur de mise à l'échelle
var bounds = [[0, 0], [imageHeight * scaleFactor, imageWidth * scaleFactor]];

// Ajouter l'image comme fond de la carte avec la mise à l'échelle
L.imageOverlay('https://www.grandtheftauto5.fr/images/cartes/carte-routiere-gta-5.jpg', bounds).addTo(map);

// Centrer la carte sur le centre de l'image redimensionnée
map.setView([imageHeight * scaleFactor / 2, imageWidth * scaleFactor / 2], 2);
