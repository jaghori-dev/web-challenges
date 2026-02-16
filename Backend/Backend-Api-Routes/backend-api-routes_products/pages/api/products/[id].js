import { getProductById } from "@/services/productServices";

export default function handler(requset, response){
    const {id} = requset.query
     if(requset.method === 'GET'){
        const product = getProductById(id)
        if(!product){
            response.status(404).json('Product not found')
        }
        response.status(200).json(product)
    }
    
}