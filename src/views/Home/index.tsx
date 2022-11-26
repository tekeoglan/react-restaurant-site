import { useEffect, useState } from "react";
import { useTransition, animated } from "@react-spring/web";

import Header from "../../compenents/Header";
import Product from "../../compenents/Product";
import styles from "./Home.module.css";

function Products({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <Product />;
    case 1:
      return <Product />;
    case 2:
      return <Product />;
    case 3:
      return <Product />;
    default:
      return null;
  }
}

function Home() {
  const [productId, setProudctId] = useState(0);
  const transitions = useTransition(productId, {
    initial: { opacity: 0, transform: "scale(0.6) translate3d(0, 100%, 0)" },
    enter: { opacity: 1, transform: "scale(1) translate3d(0, 0, 0)" },
    leave: { opacity: 0, display: "none" },
  });

  const scrollHandler = (e: any) => {
    const scrollingElement = e.target.scrollingElement;

    if (scrollingElement.scrollTop >= scrollingElement.scrollTopMax) {
      setProudctId((prev) => {
        if (prev === 3) return prev;
        return prev + 1;
      });
    } else if (scrollingElement.scrollTop === 0) {
      setProudctId((prev) => {
        if (prev === 0) return prev;
        return prev - 1;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className={styles.home}>
      <Header />
      <main>
        {transitions((style, item) => (
          <animated.div style={style}>
            <Products index={item} />
          </animated.div>
        ))}
      </main>
    </div>
  );
}

export default Home;
