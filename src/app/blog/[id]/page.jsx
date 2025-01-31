import Image from "next/image";
import styles from "./page.module.css";
import Fetch from "../../../../public/fetch.jpg";

// Функция для получения данных
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts?id=${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// Компонент BlogId
const BlogId = async ({ params }) => {
  // Ожидаем разрешение параметров маршрута
  const { id } = await params;


  const data = await getData(id);

  if (!data) {
    return <div>Post not found</div>;
  }

  console.log(data); 

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.content}</p>
          <p className={styles.name}>{data.username}</p>
          <div className={styles.author}>
            <Image
              src={Fetch}
              alt="Автор"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Fetch} alt="logo" fill className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default BlogId;
