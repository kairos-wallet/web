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
        <img className={styles.circle} src="/circles/circle1.svg" alt="" />
        <img className={styles.cornerLogo} src="/logo.svg" alt="" />
        <div className={styles.mobile}>
          <img src="/mobile-mockup.png" alt="mobile-with-kairos" />
        </div>
        <main className={styles.main}>
          <img className={styles.logo} src="/logo.svg" alt="Kairos Logo" />
          <Title>Kairos Wallet</Title>
          <Paragraph className={styles.paragraph}>
          A DeFi non custodial Ethereum Blockchain wallet
          </Paragraph>
          <Paragraph className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente minima ullam iure doloribus quas tenetur laboriosam laudantium cupiditate maxime, adipisci error doloremque quibusdam quos quis dignissimos asperiores facilis dolorum!
          </Paragraph>
          <Paragraph className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente minima ullam iure doloribus quas tenetur laboriosam laudantium cupiditate maxime, adipisci error doloremque quibusdam quos quis dignissimos asperiores facilis dolorum!
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
