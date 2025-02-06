'use client'

import Image from "next/image";
import LoveIcon from "./icons/Love";
import {v4} from "uuid";
import MoreIcon from "./icons/More";
import styles from "../page.module.css";
import { useState } from "react";


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

    const shortenText = (text:string) => {
        if(text && text.length > 20) {
            return text.substring(0,17) + "...";
        }else {
            return text;
        }
    }

    const [showFilters, setShowFilters] = useState(true);
    const [productsflexGrow, setProductsflexGrow] = useState("3");
    const [productColumns, setProductColumns] = useState("33%")

    const disableShowFilters = () => {
        setShowFilters(false);
        setProductsflexGrow("4");
        setProductColumns("25%");
    }

    const enableShowFilters = () => {
        setShowFilters(true);
        setProductsflexGrow("3");
        setProductColumns("33%");
    }

    const filters = [
        "IDEAL FOR",
        "OCCASION",
        "WORK",
        "FABRIC",
        "SEGMENT",
        "SUITABLE FOR",
        "RAW MATERIALS",
        "PATTERN"
    ]

    return (
    <div>
       <div className={styles.hr}></div>
          {/* Section */}
        <div style={{paddingTop:"1rem", paddingBottom:"1rem", display:"flex", alignItems:"center", justifyContent:"space-between", marginLeft:"5%", marginRight:"5%"}}>
          <span style={{display:"flex", alignItems:"center"}}>
            <span>X ITEMS</span>
            { showFilters && <span style={{marginLeft:"8rem"}}>
              <svg  style={{paddingTop:"4px"}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812" stroke="#292D32" strokeMiterlimit="10" strokeLinejoin="round"/>
              </svg>
               <span onClick={()=>{disableShowFilters()}} style={{fontWeight:"400", color:"#888792", textDecorationLine:"underline"}}>HIDE FILTER</span>
            </span> 
            }
            { !showFilters && <span style={{marginLeft:"8rem"}}>
               <span onClick={()=>{enableShowFilters()}} style={{fontWeight:"400", color:"#888792", textDecorationLine:"underline"}}>SHOW FILTER</span>
               <svg  style={{paddingTop:"4px"}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812" stroke="#292D32" strokeMiterlimit="10" strokeLinejoin="round"/>
              </svg>
            </span> 
            }
          </span> 
          <span>RECOMMENDED <MoreIcon></MoreIcon></span>
        </div>
        <div className={styles.hr}></div>
        <div style={{display:'flex'}}>
            { showFilters && <div style={{flexGrow:"1", flexBasis:"0"}}>
                {filters.map((filter)=> (
                    <div key={v4()}>
                        <div style={{ marginRight:"20px", paddingTop:"20px",paddingBottom:"10px", fontWeight:"700", display:'flex', justifyContent:'space-between'}}>
                            {filter} <MoreIcon></MoreIcon>
                        </div>
                        <div style={{paddingBottom:"20px"}}>All</div>
                        <div className={styles.hr}></div>
                    </div>
                ))}
            </div>}
            <div style={{display:'flex', flexWrap: 'wrap', flexGrow:productsflexGrow, flexBasis:"0"}}>
                {products.length ? products.map((product) => (
                    <div key={product.id} style={{width:productColumns,  padding:"20px"}}>
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={300}
                            height={400} 
                            style= {{objectFit:'contain'}}/>
                        <div style={{display:"flex", alignItems: "center", justifyContent:"space-between"}}>
                            <h2>{shortenText(product.title)}</h2>
                            <LoveIcon></LoveIcon>
                        </div>
                    </div>
                )): <>Opps No products found</> }
            </div>
        </div>
    </div>)

}
