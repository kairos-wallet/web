import { FC } from "react"
import classNames from "classnames"
import styles from "./Paragraph.module.css"

type ParagraphProptypes = {
  className?: string
}

export const Paragraph: FC<ParagraphProptypes> = ({ className, children }) => (
  <p className={classNames(styles.paragraph, className)}>{children}</p>
)
