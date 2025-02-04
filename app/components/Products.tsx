import Image from "next/image";



type Product = {
    id: number,
    title: string,
    price: number, 
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    };
};

type ProductsProps = {
    products: Product[]
}

export default function Products({products}: ProductsProps) {


    return (
        <div style={{display:'flex'}}>
            <div style={{width:"25%"}}>
                Test
            </div>
            <div style={{display:'flex', flexWrap: 'wrap', width:"75%"}}>
                {products && products.map((product) => (
                    <div key={product.id} style={{width:"33%", padding:"20px"}}>
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={300}
                            height={400} 
                            style= {{objectFit:'contain'}}/>
                        <h2>{product.title}</h2>
                        {/* <p>{product.description}</p> */}
                        <p>Price: ${product.price}</p>
                        <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                    </div>
                ))}
            </div>
        </div>
    )

}
