import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, default: "" },
        price: { type: Number, required: true },
        currency: { type: String, default: "EUR" },
    },
    { timestamps: true },
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;