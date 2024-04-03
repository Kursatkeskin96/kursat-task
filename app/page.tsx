'use client'
import React from 'react'
import styles from "./page.module.css";
import MainContainer from '@/components/mainContainer/MainContainer'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <MainContainer />
      </div>
    </main>
  );
}
