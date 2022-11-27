import styles from "./Product.module.css";
import { ReactComponent as LeftButton } from "../../assets/addcart_btn.svg";
import { ReactComponent as RightButton } from "../../assets/book_btn.svg";
import { ReactComponent as BackwardArrowIcon } from "../../assets/arrow_back.svg";
import { ReactComponent as ForwardArrowIcon } from "../../assets/arrow_forward.svg";

function Product() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.props}>
          <h2>steak with tomato</h2>
          <p>
            Salisbury Steak is made with ground beef that has been shaped into
            patties,
            <br /> while Swiss Steak is made with actual steak. For Swiss Steak,
            the beef is rolled or
            <br /> pounded and then braised in a
          </p>
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
          <LeftButton />
          <RightButton />
        </div>
        <div className={styles.leftLookBook}>
          <span></span>
          <a>watch lookbook</a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.foodCover}>
          <img
            src={require("../../assets/steak_with_tomato.png")}
            alt="stake & tomato"
          />
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
