import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Hero.module.css'


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, i'am Zoubaier Ben Abdallah</h1>
        <p className={styles.description}>
          Experienced full-stack developer proficient in React and Node.js,
          boasting 6 months of successful freelance projects.
        </p>
        <a href="zoubaierbenab9779@gmail.com" className={styles.contactBtn}>Contact me</a>
      </div>
      <img src={getImageUrl('hero/heroImage.png')} alt="picture of me" className={styles.image}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};
