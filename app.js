const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir les fichiers statiques du répertoire 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.render('index');
});

// Route pour la page des projets
app.get('/projets', (req, res) => {
    res.render('projets');
});

// Route dynamique pour les pages de projets
app.get('/projets/:projectName', (req, res) => {
    const projectName = req.params.projectName;
    res.render(`projets/${projectName}`);
});

// Route pour les images
app.get('/images/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, 'public/images', imageName);
    res.sendFile(imagePath);
});

// Route pour les css
app.get('/css/:cssName', (req, res) => {
    const cssName = req.params.cssName;
    const cssPath = path.join(__dirname, 'public/css', cssName);
    res.sendFile(cssPath);
});

// Route pour les js
app.get('/js/:jsName', (req, res) => {
    const jsName = req.params.jsName;
    const jsPath = path.join(__dirname, 'public/js', jsName);
    res.sendFile(jsPath);
});

// Ajouter d'autres routes si nécessaire

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port : http://localhost:${PORT}`);
});