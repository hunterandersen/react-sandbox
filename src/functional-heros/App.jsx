import { useEffect, useState } from "react";
import "./style.css";

/**
 * 1. ComponentDidMount
 * 2. ComponentDidUpdate
 * 3. ComponentWillUnmount
 *   useEffect
 */

export default function App() {
  const [heros, setHeros] = useState([]);
  const [heroObjects, setHeroObjects] = useState([]);
  const [inputText, setInputText] = useState("");
  const controller = new AbortController();

  useEffect(() => {
    //componentDiDMount
    //componentDidUpdate
    getHeroData();
    //componentWillUnmount
    return () => {
        //React Strict Mode will force the component to unmount once
        //in order to more robustly check that your app is functioning correctly.
        //However, that does slightly break the intended purpose of this
        //controller.abort line of code. So, we'll only run this line, if we're not
        //currently running the app in development mode.
        if (process.env.NODE_ENV !== "development"){
            controller.abort();
        }
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setHeros([...heros, inputText]);
  }

  function getHeroData() {
    console.log("Fetching Hero Data");
    fetch(`https://akabab.github.io/superhero-api/api/all.json`, {
      signal: controller.signal,
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        //How do I change my superheroList?
        setHeroObjects(data);
    })
    .catch((err) => console.error(err));
  }

  //Derived State
  //Search the array of superHero data to find matches between
  //the list of hero names I've typed and the database of heros
  
  //Make a new object containing info about each of the heros in my simple list
  const heroInfo = heros.map((hero) => {
    //If I can find this hero in the big database
    //Add more info to that object
    const foundHero = heroObjects.find((heroObject) => {
        return heroObject.name == hero
    });
    if (!foundHero) {
        return {
            typedName: hero,
        }
    }
    return {
        typedName: hero,
        gender: foundHero.appearance.gender,
        race: foundHero.appearance.race,
        hairColor: foundHero.appearance.hairColor,
    }
  });

  return (
    <div>
      <h1>Superheros</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="heroInput"
          id="heroInput"
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
        <button type="submit">Add Hero</button>
      </form>
      <h3>{heros.length}</h3>
      <ul>
        {heroInfo.map((hero, index) => {
          return <li key={index}>
                <p>{hero.typedName}</p>
                <p>{hero.gender}</p>
                <p>{hero.race}</p>
                <p>{hero.hairColor}</p>
            </li>;
        })}
      </ul>
    </div>
  );
}
