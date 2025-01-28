import styles from './page.module.css'
import Image from 'next/image.js';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>2023 MyApp. All rights reserved</div>
      <div className={styles.social}>
        <Link href="https://www.instagram.com/?locale=ru"><Image className={styles.icon} src='/vk.png' width={15} height={15}/></Link>
      </div>
    </footer>
  );
};

export default Footer;
