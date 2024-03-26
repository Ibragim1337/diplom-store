import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../features/user/userSlice";

import PLUS from '../../images/plus-large-svgrepo-com.svg';
import MINUS from '../../images/minus-svgrepo-com.svg';
import BASKET from '../../images/garbage-basket-svgrepo-com.svg';

import styles from "../../styles/Cart.module.css";
import { sumBy } from "../../utils/common";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(({ user }) => user);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your cart</h2>

      {!cart.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <>
          <div className={styles.list}>
            {cart.map((item) => {
              const { title, category, images, price, id, quantity } = item;

              return (
                <div className={styles.item} key={id}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    <div className={styles.category}>{category.name}</div>
                  </div>

                  <div className={styles.price}>{price}$</div>

                  <div className={styles.quantity}>
                    <div
                      className={styles.minus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                      }
                    >
                      <img src={MINUS} alt="" />
                    </div>

                    <span>{quantity}</span>

                    <div
                      className={styles.plus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                      }
                    >
                      <img src={PLUS} alt="" />
                    </div>
                  </div>

                  <div className={styles.total}>{price * quantity}$</div>

                  <div
                    className={styles.close}
                    onClick={() => removeItem(item.id)}
                  >
                    <img src={BASKET} alt="" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.actions}>
            <div className={styles.total}>
              TOTAL PRICE:{" "}
              <span>
                {sumBy(cart.map(({ quantity, price }) => quantity * price))}$
              </span>
            </div>

            <button className={styles.proceed}>Proceed to checkout</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;