"use client";

import styles from './style.module.css'; 

export default function Home() {
    return (
        <div className="container">
            <form className={styles.form} action="">
                <span className={styles["input-span"]}>
                    <label htmlFor="name" className={styles.label}>Nome</label>
                    <input type="text" name="name" id="name" />
                </span>
                <span className={styles["input-span"]}>
                    <label htmlFor="surname" className={styles.label}>Cognome</label>
                    <input type="text" name="surname" id="surname" />
                </span>
                <span className={styles["input-span"]}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" name="email" id="email" />
                </span>
                <span className={styles["input-span"]}>
                    <label htmlFor="phone" className={styles.label}>Telefono</label>
                    <input type="tel" name="phone" id="phone" />
                </span>
                <span className={styles["input-span"]}>
                    <label htmlFor="position" className={styles.label}>Posizione desiderata</label>
                    <input type="text" name="position" id="position" />
                </span>
                <input className={styles.submit} type="submit" value="Invia Candidatura" />
                <span className={styles.span}>Vuoi saperne di più? <a href="#">Contattaci</a></span>
            </form>
        </div>
    );
}
