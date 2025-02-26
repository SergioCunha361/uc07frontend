import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Styles from "./Contato.module.css";


function Contato(){
    return (
        <>
            <Header />
            <main>
                <form action="" method="post">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
                    <button type="submit">Enviar</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Contato;