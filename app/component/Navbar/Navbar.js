import styles from './style.module.css'; 

export default function Home() {
    return (
        <>
            <div className={styles.top}>
                <div className={styles.title}>
                    <h2 style={{ display: 'flex', alignItems: 'center' }}>
                        <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                            {/* <!-- Corpo della casetta --> */}
                            <rect x="6.25" y="10" width="12.5" height="10" fill="white" />
                            {/* <!-- Tetto --> */}
                            <polygon points="3.75,10 12.5,2.5 21.25,10" fill="white" />
                            {/* <!-- Porta --> */}
                            <rect x="10" y="15" width="5" height="3" fill="transparent" stroke="white" />
                            {/* <!-- Finestra sinistra --> */}
                            <rect x="7.5" y="11.25" width="2.75" height="2.75" fill="transparent" stroke="whitw" />
                            {/* <!-- Finestra destra --> */}
                            <rect x="12.5" y="11.25" width="2.75" height="2.75" fill="transparent" stroke="white" />
                        </svg> 
                        <a href="../about">Home</a>
                    </h2>

                    <h2><a href="../about/chi_siamo">Chi siamo</a></h2>  
                    <h2><a href="../about/lavora_con_noi">Lavora con noi</a></h2>  
                    <h2><a href="../about/la_nostra_storia">La nostra storia</a></h2>                  
                </div>
            </div>
        </>
    );
}
