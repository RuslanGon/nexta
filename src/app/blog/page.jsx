import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Fetch from '../../../public/fetch.jpg'

async function getData() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", 
  const res = await fetch("http://localhost:3000/api/posts",
  {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`blog/${item._id}`}className={styles.container} key={item._id}>
          <div className={styles.imageContainer}>
            <Image
            src={Fetch}
              className={styles.image}
              width={400}
              height={250}
              alt="logo"
              priority
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.content}</p>
            <p className={styles.name}>{item.username}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
