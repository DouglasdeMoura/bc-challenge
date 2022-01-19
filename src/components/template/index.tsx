import { FC } from 'react'

type TemplateProps = {
  children?: React.ReactNode
}

export const Template: FC<TemplateProps> = ({ children }) => (
  <div className="container">{children}</div>
)
