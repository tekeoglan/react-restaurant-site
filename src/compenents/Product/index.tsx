import styles from "./Product.module.css";
import { ReactComponent as RedLeftButton } from "../../assets/red_left_btn.svg";
import { ReactComponent as LightRedLeftButton } from "../../assets/light_red_left_btn.svg";
import { ReactComponent as GreenLeftButton } from "../../assets/green_left_btn.svg";
import { ReactComponent as YellowLeftButton } from "../../assets/yellow_left_btn.svg";
import { ReactComponent as RightButton } from "../../assets/right_btn.svg";
import { ReactComponent as BackwardArrowIcon } from "../../assets/arrow_back.svg";
import { ReactComponent as ForwardArrowIcon } from "../../assets/arrow_forward.svg";
import { ProductInterface } from "../../constants/products";
import { useEffect } from "react";

const leftButtons: any = {
  red: <RedLeftButton />,
  light_red: <LightRedLeftButton />,
  green: <GreenLeftButton />,
  yellow: <YellowLeftButton />,
};

function Product({
  title,
  description,
  image,
  leftButtonType,
  color,
}: ProductInterface) {
  useEffect(() => {
    const root = window.document.documentElement;
    if (!root) return;
    root.style.setProperty("--secondary-color", color);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.props}>
          <h2>{title}</h2>
          <p>{description}</p>
          <form>
            <span>
              <input type="radio" name="size" value="medium" />
              <label>medium</label>
            </span>
            <span>
              <input type="radio" name="size" value="large" />
              <label>large</label>
            </span>
          </form>
        </div>
        <div className={styles.leftSplitter}></div>
        <div className={styles.buttons}>
          {leftButtons[leftButtonType]}
          <RightButton />
        </div>
        <div className={styles.leftLookBook}>
          <span></span>
          <a>watch lookbook</a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.foodCover}>
          <img src={require(`../../${image}`)} alt="food" />
        </div>
        <div className={styles.discountCoupon}>
          <div className={styles.couponTop}>
            <span>DISCOUNT COUPON</span>
            <div className={styles.couponNav}>
              <div>
                <BackwardArrowIcon />
                <a>PREV</a>
              </div>
              <div>
                <a>NEXT</a>
                <ForwardArrowIcon />
              </div>
            </div>
          </div>
          <div className={styles.couponWrapper}>
            <div className={styles.couponWrapperLeft}>
              <img
                src={require("../../assets/salmon_salad_avatar.png")}
                alt="fish salad"
              />
              <div>
                <a>Fish Salad</a>
                <a>Medium</a>
              </div>
            </div>
            <div className={styles.couponWrapperRight}>
              <div>
                <a>$14.99</a>
                <a>$7.99</a>
              </div>
              <button>Get Coupon</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
