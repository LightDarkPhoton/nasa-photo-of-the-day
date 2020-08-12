import React, {useState, useEffect} from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants/index'




// If axios is not present in project, run 'npm i axios --save' in Terminal
import axios from 'axios'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    // use axios
    // build a legit url using the constants from above
    // on success breakpoint
    // on failure breakpoint

    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)

        // Adding data to state?
        setData(res.data)
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        // this runs whether success or failure
      })
  }, [])

  const Friend = ({ info }) => (
    <div className='friend'>
      {info.name}
      <p>
        See details {info.copyright}
      </p>
    </div>
  )

  return (
    <div className="App">
      {
        // Because NASA returns a single item, in order to "map" over it, I added it to an array
        [data].map( elem => {
          console.log(elem)
          return <Friend info={elem}/>
        })
      }
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
