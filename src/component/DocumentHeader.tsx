import React, { FC } from "react"
import Link from "next/link"

import styles from "./DocumentHeader.module.css"

export const DocumentHeader: FC = () => (
  <Link href="/">
    <a className={styles.container}>
      <img src="/arrow-right-line.svg" alt="" />
      <img src="/kairos.svg" alt="" className={styles.kairos} />
    </a>
  </Link>
)
