const url = 'https://fakestoreapi.com/products' 
export default async function fakeStore(){
    const response = await fetch(url)
    const data = await response.json()
    return data
}