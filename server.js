

const express = require('express');
const path = require('path');

// initializing express app
const app = express()
app.use(express.static(path.join(__dirname)));
const PORT = 3000;


const dogs = [
    { 
        name: 'Lacey',
        breed: 'Lab',
    },
    { 
        name: 'Tippy',
        breed: 'Terrier',
    },
    { 
        name: 'Spotty',
        breed: 'Lab',
    },
    { 
        name: 'Gunner',
        breed: 'Boxer',
    },
    { 
        name: 'Taffy',
        breed: 'Terrier',
    },
];

app.get('/api/dogs', (req,res) => {
    res.status(200).json(dogs);
})


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/dogs.html'));
})

// starting your server at a specific port
app.listen(PORT);