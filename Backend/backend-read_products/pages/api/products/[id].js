// import { products } from "../../../lib/products";
import Product from "@/db/models/Product";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  const { id } = request.query;
  
  await dbConnect();
  const product = await Product.findById(id);

  if (!product) {
    response.status(404).json({ status: "Not Found" });
    return;
  }
  response.status(200).json(product);
}
