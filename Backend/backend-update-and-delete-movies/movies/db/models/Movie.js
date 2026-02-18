import mongoose from "mongoose";

const { Schema } = mongoose;

const movieSchema = new Schema(
  {
    title: String,
    year: Number,
    genres: [String],
    plot: String,
    imdb: {
      rating: Number,
      votes: Number,
    },
  },
  { collection: "movies" } // 👈 force correct collection
);

const Movie =
  mongoose.models.Movie || mongoose.model("Movie", movieSchema, 'movies');

export default Movie;

