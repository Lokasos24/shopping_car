const url = 'https://fakestoreapi.com/products' 
export default async function fakeStore(){
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data
    }catch(err){
        console.log(`Han error has appear ${err}`)
    }
}