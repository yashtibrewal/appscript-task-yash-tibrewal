import Header from "./components/Header";
import { randomUUID } from "crypto";
import styles from './page.module.css';
import Products from "./components/Products";

export default async function Home() {

  const links = [
    "SHOP",
    "SKILLS",
    "STORES",
    "ABOUT",
    "CONTACT US"
  ]

  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  return (
    <div>
      <main>
        <Header></Header>
        <section style={{display:"flex", justifyContent:"center", gap:"48px", height:"96px", alignItems:"center"}}>
          {links.map(link => {
            return <span key={randomUUID()}>
              <h4 style={{fontWeight:"700", letterSpacing:"-1px"}}>{link}</h4>
            </span>
          })}
        </section>
        <div className={styles.hr}></div>
        <section style={{display:'flex',flexDirection:'column', marginTop:'48px', marginBottom:'48px', alignItems:'center'}}>
          <h3 style={{fontSize:'60px', fontWeight:'400', lineHeight:'72px'}}>DISCOVER OUR PRODUCTS</h3>
          <p style={{width:'50%', fontSize:'22px', lineHeight:'40px', textAlign:'center', marginTop:'24px'}}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </section>
        <div className={styles.hr}></div>
        <div></div>
        <div className={styles.hr}></div>
        <Products products={products}></Products>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
