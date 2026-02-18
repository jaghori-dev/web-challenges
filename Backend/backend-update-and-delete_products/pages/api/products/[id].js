import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(product);
    return;
  }
  if (request.method === "PUT") {
    const newProduct = request.body;
    try {
      const updateProduct = await Product.findByIdAndUpdate(id, newProduct);
      if (!updateProduct) {
        return response.status(404).json({
          error: "Product not found",
        });
      }
      return response.status(200).json({
        success: true,
        data: updateProduct,
      });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "DELETE") {
    try {
      const deleteProduct = await Product.findByIdAndDelete(id);
      if (!deleteProduct) {
        return response.status(200).json({ success: "product not found" });
      }
      return response.status(200).json({ success: true });
    } catch (error) {
      return response.status(400).json({ error: message });
    }
  }

  return response.status(405).json({ status: "Method not allowed." });
}
