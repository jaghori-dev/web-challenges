import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
    if (request.method !== "GET") {
        return response.status(405).json({ message: "Method not allowed" });
    }

    try {
        await dbConnect();
        const products = await Product.find();
        response.status(200).json(products);
    } catch (err) {
        console.error(err);
        response.status(500).json({ message: "Server error" });
    }
}
