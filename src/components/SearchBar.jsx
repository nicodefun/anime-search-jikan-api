/* eslint-disable react/prop-types */

import styles from "./css/SearchBar.module.css";
import { useRef} from "react";

export default function SearchBar({ handleSearch }) {
  const inputRef = useRef();

  const getEnteredValue = (e) => {
    e.preventDefault();
    const enteredValue = inputRef.current.value;
    handleSearch(enteredValue);
    inputRef.current.value = '';
  };

  return (
    <section>
      <div className={styles.container}>
        <form className={styles.search} onSubmit={getEnteredValue}>
          <input
            ref={inputRef}
            type="search"
            placeholder="Search..."
            required
          />
          <button>X</button>
        </form>
      </div>
    </section>
  );
}
