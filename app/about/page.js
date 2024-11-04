"use client";

import Navbar from '../component/Navbar/Navbar'
import { useState } from 'react'; 
import styles from './style.module.css'; 

export default function Home() {
    const [result, setResult] = useState("Nome aziendona");
    const [content, setContent] = useState("ci saranno le funzioni principali dell'aziendona");

    return (
        <>
            <Navbar></Navbar>
            <div className={styles.container}>
                <div className={styles.container}>
                <div className={styles.result}>
                    <h3>{result}</h3>
                </div>
                <div className={styles.content}>
                    <p>{content}</p>
                </div>
            </div> 
            </div>
        </>
    );
}
