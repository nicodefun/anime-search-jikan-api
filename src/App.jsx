import { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainDisplay from "./components/MainDisplay";
function App() {
  const [topAnimes, setTopAnimes] = useState([]);
  const [animeList, setAnimeList] = useState([]);

  const getTopAnime = async () => {
    try {
      const tops = await fetch(
        "https://api.jikan.moe/v4/top/anime?filter=bypopularity"
      ).then((res) => res.json());
      setTopAnimes(tops.data.slice(0, 9));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getTopAnime();
  }, []);

  useEffect(() => {
    if (animeList.length === 0 && topAnimes.length > 0) {
      setAnimeList(topAnimes);
    }
  }, [topAnimes, animeList]);

  const fetchAnime = async (query, orderby) => {
    try {
      const result = await fetch(
        `https://api.jikan.moe/v4/anime?q=${query}&orderby=${orderby}&sort=asc&limit=12`
      ).then((res) => res.json());
      setAnimeList(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (value) => {
    fetchAnime(value);
  };


  return (
    <Fragment>
      <Header />
      <main>
        <Sidebar topAnimes={topAnimes} />
        <MainDisplay
          topAnimes={topAnimes}
          animeList={animeList}
          handleSearch={handleSearch}
        />
      </main>
    </Fragment>
  );
}

export default App;
