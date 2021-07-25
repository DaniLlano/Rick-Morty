import { useState } from 'react'
import Cards from './components/characters/Cards'
import Header from './components/header/Header'
import useFetch from './hooks/useFetch'
import Loading from './components/loading/Loading'
import {CardContainer} from './components/characters/CardsStyles'

const API_URL = "https://rickandmortyapi.com/api/character/"
const API_URL_FILTER = "?name="

function App() {
  const [filter, setFilter] = useState("")

  const {loading, characters} = useFetch(`${API_URL}${API_URL_FILTER}${filter}`)
  

  return (
    <div>
      <Header filter={filter} setFilter={setFilter}/>
        <div>
          {loading ? 
          <Loading /> : characters?.length > 0 ? (<CardContainer>
            {characters.map((characters) => (
            
              <Cards key={characters.id} characters={characters}/>

          ))}
             </CardContainer>) : <p>Can't find "{filter}"</p>
        }
          
        </div>
    </div>
  );
}

export default App;
