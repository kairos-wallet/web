import React, { FC } from "react"
import Link from "next/link"
import classNames from "classnames"
import { Paragraph } from "./Paragraph"

import styles from "./Footer.module.css"

type FooterProps = {
  className: string
}

export const Footer: FC<FooterProps> = ({ className }) => (
  <footer className={classNames(styles.footer, className)}>
    <Paragraph className={styles.copyright}>© 2020 Kairos. Todos los derechos reservados</Paragraph>
    <div>
      <Paragraph className={styles.withLove}>With</Paragraph>
      <img className={styles.heart} src="/heart-icon.svg" alt=""/>
      <Paragraph className={styles.withLove}>by Acid Tango</Paragraph>
    </div>
    <ul className={styles.links}>
      <li>
        <Link href="/terms-and-conditions">Términos y condiciones</Link>
      </li>
      <li>
        <Link href="/privacy-policy">Política de privacidad</Link>
      </li>
    </ul>
  </footer>
)
