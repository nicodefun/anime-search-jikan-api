/* eslint-disable react/prop-types */

import styles from "./css/Display.module.css";


export default function Display({ animeList}) {

  return (
    <ul className={styles.display}>
      {animeList && animeList.map((anime) => {
        const imgUrl = anime.images.jpg["image_url"];
        return (
          <a
            href={anime.url}
            target="_blank"
            rel="noreferrer"
            key={anime["mal_id"]}
            className={styles["display-item"]}
          >
            <div className={styles["img-box"]}>
              <img src={imgUrl} alt="img1" />
            </div>
            <h3>{anime.title}</h3>
          </a>
        );
      })}
    </ul>
  );
}
