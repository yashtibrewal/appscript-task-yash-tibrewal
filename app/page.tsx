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

  const productsUri = process.env.NEXT_PRODUCTS_API_URL;

  let products = [];

  try{
    const res = await fetch(productsUri+'/products?limit=18');
    products = await res.json();
  } catch (error){
    console.log(error)  
  }
  
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
        
        <div style={{marginLeft:"5%"}}>
          <Products products={products}></Products>
        </div>
      </main>
      <footer style={{backgroundColor:"black", color:"white", display:"flex", paddingLeft:"12rem", paddingRight: "12rem", paddingTop:"6rem", paddingBottom:"6rem"}}>
        <div style={{width:"50%"}}>
          <div style={{fontWeight:"700"}}>BE THE FIRST TO KNOW</div>
          <div>Sign up for updates from mettā muse.</div>
        </div>
        <div style={{width:"50%", marginLeft:"12rem", display:"flex", flexDirection:"column"}}>
          <div style={{fontWeight:"700"}}>CONTACT US</div>
          <div>+44 221 133 5360</div>
          <div>customercare@mettamuse.com</div>
        </div>
      </footer>
    </div>
  );
}
