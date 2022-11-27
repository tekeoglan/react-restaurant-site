import { useRef, useEffect, useState, CSSProperties } from "react";
import {
  easings,
  useTransition,
  animated,
  useSpringRef,
  AnimatedProps,
} from "@react-spring/web";

import Product from "../../compenents/Product";
import styles from "./Products.module.css";

const productData = [
  { id: 0, title: "steak with tomato" },
  { id: 1, title: "salmon salad" },
  { id: 2, title: "chicken salad" },
  { id: 3, title: "steak with potato" },
];

const products: ((
  props: AnimatedProps<{ style: CSSProperties }>
) => JSX.Element)[] = [
  ({ style }) => (
    <animated.div style={style}>
      <Product />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={style}>
      <Product />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={style}>
      <Product />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={style}>
      <Product />
    </animated.div>
  ),
];

function Products() {
  const transRef = useSpringRef();
  const sliderRef = useRef<HTMLDivElement>(null);
  const prevSlideRef = useRef<HTMLElement>(null);
  const [productIndex, setProudctIndex] = useState(0);
  const transitions = useTransition(productIndex, {
    ref: transRef,
    keys: (item) => item,
    from: { opacity: 0, transform: "scale(0.75) translate(0, -20vh)" },
    enter: { opacity: 1, transform: "scale(1) translate(0, 0)" },
    leave: { opacity: 0, transform: "scale(0.75) translate(0, 20vh)" },
    config: {
      easing: easings.easeInBounce,
    },
  });

  const scrollHandler = (e: any) => {
    const scrollingElement = e.target.scrollingElement;

    if (scrollingElement.scrollTop >= scrollingElement.scrollTopMax) {
      setProudctIndex((prev) => {
        if (prev === 3) return prev;
        return prev + 1;
      });
    } else if (scrollingElement.scrollTop === 0) {
      setProudctIndex((prev) => {
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

  useEffect(() => {
    transRef.start();

    if (!sliderRef.current) return;
    if (prevSlideRef.current) prevSlideRef.current.dataset.active = "false";

    const el = sliderRef.current.children[productIndex] as HTMLElement;
    el.dataset.active = "true";
    prevSlideRef.current = el;
  }, [productIndex]);

  return (
    <div className={styles.products}>
      {transitions((style, i) => {
        const Product = products[i];
        return <Product style={style} />;
      })}
      <div className={styles.foodCoverSlider} ref={sliderRef}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Products;
