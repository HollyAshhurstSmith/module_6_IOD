import React, { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm';

const allCats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://cdn.pixabay.com/photo/2018/06/14/22/22/cheetah-3475778_1280.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://cdn.pixabay.com/photo/2017/10/02/08/48/cougar-2808198_1280.jpg' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://cdn.pixabay.com/photo/2017/10/20/22/34/jaguar-2873116_1280.jpg' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://cdn.pixabay.com/photo/2014/11/03/11/07/lion-515028_1280.jpg' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://cdn.pixabay.com/photo/2017/01/18/18/30/snow-leopard-1990543_1280.jpg' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg' },
  ];

function BigCats() {
  const [cats, setCats] = useState(allCats);

  const sortAlphabetically = () => {
    const sorted = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sorted);
  };

  const reverseList = () => {
    setCats([...cats].slice().reverse());
  };

  const filterPanthera = () => {
    const filtered = cats.filter(cat => cat.latinName.startsWith('Panthera'));
    setCats(filtered);
  };

  const resetList = () => {
    setCats(allCats);
  };

  const addCat = (newCat) => {
    setCats(prev => [...prev, newCat]);
  };

  const deleteCat = (id) => {
    setCats(prev => prev.filter(cat => cat.id !== id));
  };

  return (
    <div>
      <AddCatForm onAddCat={addCat} />

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={sortAlphabetically}>Sort A–Z</button>
        <button onClick={reverseList}>Reverse</button>
        <button onClick={filterPanthera}>Filter Panthera</button>
        <button onClick={resetList}>Reset</button>
      </div>

      <ul>
        {cats.map(cat => (
          <SingleCat
            key={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image}
            onDelete={() => deleteCat(cat.id)} // pass delete handler
          />
        ))}
      </ul>
    </div>
  );
}

export default BigCats;
