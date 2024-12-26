// Initialize the map
var map = L.map('map', {
    crs: L.CRS.Simple,  // Use a simple coordinate system (for image maps)
    minZoom: 1,         // Set the minimum zoom level
    maxZoom: 5          // Set the maximum zoom level
});

// Set the bounds of the map (the size of the image)
var bounds = [[0, 0], [1920, 1080]]; // Example: Image size is 1920x1080, adjust as needed

// Add the image overlay (your map image)
L.imageOverlay('https://www.grandtheftauto5.fr/images/cartes/carte-routiere-gta-5.jpg', bounds).addTo(map);

// Set the initial view and zoom level
map.setView([960, 540], 2); // Set the center (use the center of the map, adjust coordinates)

// Add a marker on the map at a specific location
L.marker([960, 540])  // Coordinates of the center or any other point on the map
    .addTo(map)
    .bindPopup('<b>Welcome to GTA 5!</b><br>Here is a cool location.')
    .openPopup();