import styles from './page.module.css'
import Image from 'next/image.js';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>2023 MyApp. All rights reserved</div>
      <div className={styles.social}>
        <Link href="https://vk.com/">
          <Image
            className={styles.icon}
            alt="VK logo"
            src="/vk.png"
            width={15}
            height={15}
          />
        </Link>
        <Link href="https://www.instagram.com/?locale=ru">
          <Image
            className={styles.icon}
            alt="insta logo"
            src="/inst.png"
            width={15}
            height={15}
          />
        </Link>
        <Link href="https://x.com/?lang=ru">
          <Image
            className={styles.icon}
            alt="twitter logo"
            src="/twitter.png"
            width={15}
            height={15}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
