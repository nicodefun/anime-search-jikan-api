/* eslint-disable react/prop-types */
import Display from "./Display";
import SearchBar from "./SearchBar";
import styles from "./css/MainDisplay.module.css";

export default function MainDisplay({ handleSearch, animeList }) {
  return (
    <section className={styles["main-display"]}>
      <SearchBar handleSearch={handleSearch} />
      {animeList && animeList.length === 0 ? <p>Loading...</p> :   <Display animeList={animeList} />}
    
    </section>
  );
}
