import React from 'react';
import Axios from 'axios';
import Header from '../components/Header'


const Table = () => {
  const [charList, setCharList] = React.useState([]);

  React.useEffect(() => {
    const getCharList = async () => {
      const response = await Axios.get('https://mern-rpgchar.herokuapp.com/read');
      setCharList(response.data);
    };
    getCharList();
  }, []);

  return (
    <div className="char-list">
      <Header/>
      <h1>Trailers registrados</h1>
      {charList.map((char, index) => (
        <div className="char" key={index}>
          <div class="row">
            <div class="card" styles="width: 25rem;">
              <iframe width="470" height="315" src={`https://www.youtube.com/embed/${char.weapon}`}
                title="YouTube video player"
                frameborder="0" allow="accelerometer;\
                autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
              <div class="card-body">
                <h5 class="card-title">{char.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">  </h6>
                <p>{char.job}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;