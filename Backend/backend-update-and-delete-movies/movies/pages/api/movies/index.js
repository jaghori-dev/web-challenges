import Movie from "../../../db/models/Movie";
import dbConnect from "../../../db/connect";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const movies = await Movie.find().limit(20);
    res.status(200).json(movies);
    return;
  }
  res.status(405).json({ status: "Method not found" });
}
