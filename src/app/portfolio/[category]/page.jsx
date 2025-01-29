import Image from "next/image.js";
import styles from "./page.module.css";
import Button from "@/components/Button/Button.jsx";

const Category = ({ params }) => {
  // console.log(params);
  // const data = getData(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <h1 className={styles.title}>test</h1>
        <p className={styles.desc}>desc</p>
        <Button text="See More" url="#" />
      </div>
      <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            // src={}
            //  alt={}
          />
        </div>
    </div>
  );
};

export default Category;
