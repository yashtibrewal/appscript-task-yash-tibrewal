import styles from "./page.module.css";
import HamburgerIcon from "./components/icons/HamburgerIcon";
import CircleFlower from "./components/icons/CircleFlower";
import SearchIcon from "./components/icons/Search";
import LoveIcon from "./components/icons/Love";
import BagIcon from "./components/icons/Bag";
export default function Home() {

  return (
    <div>
      <main>
        <div className={styles.headers}>
          <div className={styles.headers_left_section}>
            <HamburgerIcon></HamburgerIcon>
            <CircleFlower></CircleFlower>
          </div>
          <h3>LOGO</h3>
          <div className={styles.headers_right_section}>
            <SearchIcon></SearchIcon>
            <LoveIcon></LoveIcon>
            <BagIcon></BagIcon>
          </div>
        </div>
        <section style={{display:"flex", padding: "40px"}}>
          <h4 style={{marginRight:"4px", color:"#BFC8CD", fontWeight:"400", letterSpacing:"-1px"}}>HOME</h4>
          <span style={{marginRight:"4px"}}>|</span>
          <h4 style={{fontWeight:"400", letterSpacing:"-1px"}}>SHOP</h4>
        </section>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
