import React from "react";

const MovieCard = ({
  movie: {
    id,
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
  },
}) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
    if (likedMovies.includes(id)) {
      setLiked(true);
    }
  }, [id]);

  const toggleLike = () => {
    const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];

    let updatedLikes;

    if (likedMovies.includes(id)) {
      updatedLikes = likedMovies.filter((movieID) => movieID !== id);
      setLiked(false);
    } else {
      updatedLikes = [...likedMovies, id];
      setLiked(true);
    }

    localStorage.setItem("likedMovies", JSON.stringify(updatedLikes));
  };

  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
      />

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>

          <span>•</span>
          <p className="lang">{original_language}</p>

          <span>•</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>

          <span>•</span>
          <button onClick={toggleLike}>{liked ? "❤️" : "🤍"}</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
