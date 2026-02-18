import dbConnect from "../../../db/connect";
import Movie from "../../../db/models/Movie";

const handler = async (req, res) => {
  await dbConnect();
  if (req.method === "GET") {
    try { 
    const movies = await Movie.find().limit(20);
    res.status(200).json(movies);
    return;
    }catch(error){
      res.status(400).json(error.message)
    }
  }
  return res.status(400).json({ status: "Method not allowed" });
};
export default handler;
