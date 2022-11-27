import Header from "../../compenents/Header";
import Products from "../Products";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <main>
        <Products />
      </main>
    </div>
  );
}

export default Home;
