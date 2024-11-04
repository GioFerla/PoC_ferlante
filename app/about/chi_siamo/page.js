"use client";
import Navbar from '../../component/Navbar/Navbar'
import { useEffect, useState } from 'react';  
import styles from './style.module.css'; 

export default function Home() {
    const [result, setResult] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        setResult("Noi siamo un azienda esplosiva");
        setContent("La nostra azienda vuole migliorare la vita di ogni singolo cliente e questo è possibile grazie all'aiuto degli egiziani che si fanno esplodere ogni tanto");
    },[]);

    return (
        <>
            <Navbar></Navbar>
            <div className={styles.container}>
                <div className={styles.result}>
                    <h3>{result}</h3>
                </div>
                <div className={styles.content}>
                    <p>{content}</p>
                </div>
            </div>
        </>
    );
}
