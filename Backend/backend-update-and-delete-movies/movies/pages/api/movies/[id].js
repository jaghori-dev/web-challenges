import dbConnect from "../../../db/connect";
import Movie from "../../../db/models/Movie";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    const movie = await Movie.findById(id);
    if (!movie) {
      res.status(404).json({ status: "Movie not found" });
      return;
    }
    res.status(200).json(movie);
    return;
  }
  return response.status(405).json({ status: "Method not allowed." });
}
