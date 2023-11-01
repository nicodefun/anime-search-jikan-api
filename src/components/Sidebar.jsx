/* eslint-disable react/prop-types */

import styles from "../components/css/Sidebar.module.css";
export default function Sidebar({ topAnimes }) {
  return (
    <aside className={styles.sidebar}>
      <h2>Top Anime</h2>
      <div className={styles['content-box']}>
        {topAnimes.map((anime) => {
          return (
            <a
              href={anime.url}
              target="_blank"
              rel="noreferrer"
              key={anime["mal_id"]}
              className={styles.link}
            >
             {anime.title}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
