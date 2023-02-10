import axios from 'axios'


export const getAllProductsOrByCategory = async (category?:string) => {

        if(category){
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)

            return response.data;
        }
        else{
            const response = await axios.get('https://fakestoreapi.com/products')

            return response.data;
        }
}

export const getAllProducts = async ()=> {
    const response = await axios.get('https://fakestoreapi.com/products')

    return response.data;
}

export const getAllProductsWithLimit = async (limit:number)=> {
    const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`)

    return response.data;
}

export const getAllProductsByCategory = async (category:string)=> {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)

    return response.data;
}

export const getAllCategories = async ()=> {
    const response = await axios.get(`https://fakestoreapi.com/products/categories`)

    return response.data;
}

export const getProduct = async (id:string)=> {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)

    return response.data;
}