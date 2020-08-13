import React, {useState, useEffect} from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants/index'

// If axios is not present in project, run 'npm i axios --save' in Terminal
import axios from 'axios'

import Image from './components/image'

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

  const Title = ({ info }) => (
    <div className='title'>
      {info.name}
      <h1>
        {info.title}
      </h1>
    </div>
  )

  return (
    <div className="App">
      {
        // Because NASA returns a single item, in order to "map" over it, I added it to an array
        // [data].map( elem => {
        //   console.log(elem)
        //   return <Friend info={elem} key={1}/>
        // })
        <Title info={data}/>
      }
      
      {
        <Image copyright={data.copyright} date={data.date} imageURL={data.url} explanation={data.explanation}/>
      }
      <p>
        <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
