import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Post | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong> Create a mongobd with Lerna</strong>
            <p>In this guide, you will learn how to create a Monday</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong> Create a monorepo with Lerna</strong>
            <p>In this guide, you will learn how to create a monorepo</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong> Create a monorepo with Lerna</strong>
            <p>In this guide, you will learn how to create a monorepo</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong> Create a monorepo with Lerna</strong>
            <p>In this guide, you will learn how to create a monorepo</p>
          </a>
        </div>
      </main>
    </>
  );
}