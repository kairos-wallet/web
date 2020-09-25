import React from "react"
import Head from "next/head"

import { Title } from "../component/Title"
import { Paragraph } from "../component/Paragraph"
import { Footer } from "../component/Footer"

import styles from "./index.module.css"

export default function Index() {
  return (
    <>
      <Head>
        <title>Kairos Wallet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.container}>
        <img className={styles.background} src="/pattern-bg.svg" alt="" />
        <img className={styles.cornerLogo} src="/logo.svg" alt="" />
        <div className={styles.mobile}>
          <img src="/mobile-mockup.png" alt="mobile-with-kairos" />
        </div>
        <main className={styles.main}>
          <img className={styles.logo} src="/logo.svg" alt="Kairos Logo" />
          <Title>Productos básicos cerca de ti</Title>
          <Paragraph className={styles.paragraph}>
            Aquí podrás encontrar productos de primera necesidad (leche, huevos, pan, azúcar, papel
            higiénico, productos de limpieza, alcohol etílico, termómetros, gel desinfectante,
            analgésicos…) cerca de ti. Además, también podrás ver las franjas horarias de mayor
            afluencia en los supermercados y farmacias de tu entorno, para ahorrar tiempo y evitar
            colas innecesarias.
          </Paragraph>
          <Paragraph>
            Mediante tu contribución ayudaremos a optimizar la movilidad ciudadana, evitar
            masificaciones, y distribuir la demanda local para que siempre podamos acceder a
            productos de primera necesidad.
          </Paragraph>
        </main>
        <div className={styles.markets}>
          <img src="/App-Store-icon.png" alt="App Store" />
          <img src="/Google-Play-icon.png" alt="Google Play" />
        </div>
        <div className={styles.spacer}/>
        <Footer className={styles.footer} />
      </div>
    </>
  )
}
