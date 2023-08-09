class ProductManager{
    constructor(){
        this.Products=[]
    }
    addProduct(title, description, price, thumbnail, code, stock){
        
        const productExists = this.Products.some(
            product => product.title === title && product.code === code
        );
        
        if (productExists) {
            throw new Error(`Error: Ya existe un producto con el mismo título y código.`);
        }
        
        let nuevoProducto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        if (this.Products.length===0){
            nuevoProducto.id=1
        }
        else
        nuevoProducto.id=this.Products.length+1

        this.Products.push(nuevoProducto)
    }

    getProducts(){
        return this.Products
    }

    getProductById(id) {
        const product = this.Products.find(product => product.id === id);
        if (!product) {
            throw new Error(`Error: No se encontró ningún producto con el ID ${id}.`);
        }
        return product;
    }

}

let tm = new ProductManager();
console.log(tm.getProducts());

try {
    tm.addProduct('mesa', 'cuadrada', 500, 'foto', 123, 500);
    tm.addProduct('mate', 'redondo', 200, 'foto', 321, 300);
    tm.addProduct('notebook', 'roja', 9500, 'foto', 323, 100);
    tm.addProduct('notebook', 'roja', 9500, 'foto', 323, 100);
    console.log(tm.getProducts());

    const product = tm.getProductById(2);
    console.log("Producto encontrado:", product);
    
    const nonExistentProduct = tm.getProductById(2); 
} catch (error) {
    console.error(error.message);
}