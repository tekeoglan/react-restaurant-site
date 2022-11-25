import Header from "../../compenents/Header";
import Product from "../../compenents/Product";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <main>
        <Product />
      </main>
    </div>
  );
}

export default Home;
