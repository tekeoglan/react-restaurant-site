import { useRef, useEffect, useState, CSSProperties } from "react";
import { throttle } from "lodash";

import {
  easings,
  useTransition,
  animated,
  useSpringRef,
  AnimatedProps,
} from "@react-spring/web";

import Product from "../../compenents/Product";
import { products } from "../../constants/products";
import styles from "./Products.module.css";

const foods: ((
  props: AnimatedProps<{ style: CSSProperties }>
) => JSX.Element)[] = [
  ({ style }) => (
    <animated.div style={style}>
      <Product
        title={products[0].title}
        description={products[0].description}
        image={products[0].image}
        leftButtonType={products[0].leftButtonType}
        color={products[0].color}
      />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={style}>
      <Product
        title={products[1].title}
        description={products[1].description}
        image={products[1].image}
        leftButtonType={products[1].leftButtonType}
        color={products[1].color}
      />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={style}>
      <Product
        title={products[2].title}
        description={products[2].description}
        image={products[2].image}
        leftButtonType={products[2].leftButtonType}
        color={products[2].color}
      />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={style}>
      <Product
        title={products[3].title}
        description={products[3].description}
        image={products[3].image}
        leftButtonType={products[3].leftButtonType}
        color={products[3].color}
      />
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

  useEffect(() => {
    if (!window) return;
    window.addEventListener(
      "scroll",
      throttle(
        (e) => {
          const el = e.target.scrollingElement;

          const treshHold = Math.abs(
            el.scrollHeight - el.clientHeight - el.scrollTop
          );
          if (treshHold < 1) {
            setProudctIndex((prev) => {
              if (prev === 3) return prev;
              return prev + 1;
            });
          }
          if (el.scrollTop === 0) {
            setProudctIndex((prev) => {
              if (prev === 0) return prev;
              return prev - 1;
            });
          }
        },
        250,
        { leading: true, trailing: true }
      )
    );

    return () => {
      window.removeEventListener("scroll", () => {});
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
        const Product = foods[i];
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
