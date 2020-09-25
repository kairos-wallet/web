import React, { FC } from "react"

import ReactMarkdown from "react-markdown"

import styles from "./Document.module.css"

type DocumentProps = { markdown: string }

export const Document: FC<DocumentProps> = ({ markdown }) => (
  <ReactMarkdown source={markdown} className={styles.document} />
)
