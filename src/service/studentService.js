import axios from 'axios'
export async function getList(){
    const response = await axios.get('http://localhost:3000/products')
    return response.data
}

export async function addProduct(products){
    await axios.post('http://localhost:3000/products', products)
}

export async function updateProduct(products){
    await axios.put(`http://localhost:3000/products/${products.id}`,products)
}

export async function deleteProduct(id){
    await axios.delete(`http://localhost:3000/products/${id}`)
}