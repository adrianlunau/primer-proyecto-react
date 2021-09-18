import movies from "./movies.json"
import { PeliculaCard } from "./PeliculaCard";
import styles from "./peliculaGrid.module.css";

export function PeliculasGrid() {
    console.log(movies);
    return (
        <ul className={styles.peliculasGrid}>
            {movies.map((movie) => (
                <PeliculaCard key={movie.id} movie={movie}/>
            ))}

        </ul>
    );
}