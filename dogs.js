async function getDogs(){
    const response = await fetch('/api/dogs');
    const dogs = await response.json();
    console.log(dogs);
    
    const dogsContainer = document.getElementById('dogs');
    
    dogs.forEach(dog => {
        const dogElement = document.createElement('div');
        dogElement.classList.add('dog-card');
        dogElement.innerHTML = `
            <h2>${dog.name}</h2>
            <p>Breed: ${dog.breed}</p>
        `;
        dogsContainer.appendChild(dogElement);
    });
}

// Call the function when the page loads
getDogs();