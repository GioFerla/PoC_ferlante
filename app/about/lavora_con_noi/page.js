"use client";

import Navbar from '../../component/Navbar/Navbar';
import Form from '../../component/Form/Form';
import { useEffect, useState } from 'react';  
import styles from './style.module.css'; 

export default function Home() {
    const [result, setResult] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        setResult("Lavora con la nostra azienda");
        setContent("Scegliere la nostra azienda significa lavorare in un ambiente stimolante e orientato all’innovazione. Siamo appassionati di sfide, crescita professionale e lavoro di squadra, sempre pronti a superare insieme nuovi obiettivi. Se cerchi un luogo dove valorizzare le tue competenze e fare la differenza, sei nel posto giusto");
    },[]);

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
                <Form></Form>
            </div>
        </>
    );
}
