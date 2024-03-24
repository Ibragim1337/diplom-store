import React, { useEffect, useState } from "react";
import styles from "../../styles/Product.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const SIZES = [ 7.5, 8, 11];

const Product = ({ title, price, images, description }) => {

  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();

  useEffect(() => {
    if(!images.length) return;

    setCurrentImage(images[0], [images])
  }, [images])

  return(
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={styles['images-list']}>
        {images.map((images, index) => {
          <div
            key={index}
            className={styles.current}
            style={{ backgroundImage: `url(${images})` }}
            onClick={() => setCurrentImage(images)}
          />
        })}
        </div>
      </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.price}>{price}</div>
          <div className={styles.color}>
            <span>Color:</span>Green
          </div>
          <div className={styles.sizes}>
            <span>Sizes:</span>
            <div className={styles.list}>
                {SIZES.map(size => (
                  <div 
                  onClick={() => setCurrentSize(size)} 
                  className={`${styles.size} ${currentSize === size ? styles.active : ''}`}
                  key={size}
                  >
                    {size}
                  </div>
                ))}
            </div>
          </div>

          <p className={styles.description}>{description}</p>

          <div className={styles.actions}>
            <button className={styles.add} disabled={!currentSize}>Add to cart</button>
            <button className={styles.favorite}>Add to favorite</button>
          </div>
          <div className={styles.bottom}>
            <div className={styles.purchase}> 12 people purchased</div>

              <Link to={ROUTES.HOME}>Return to store</Link>

          </div>

        </div>
    </section>
  );
};

export default Product;
