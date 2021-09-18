import styles from "./PeliculaCard.module.css";

export function PeliculaCard({ movie }) {
  const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.peliculaCard}>
      <img
        width={230}
        height={345}
        className={styles.peliculaImage}
        src={imagenUrl}
        alt={movie.title}
      />
      {movie.title}
    </li>
  );
}


