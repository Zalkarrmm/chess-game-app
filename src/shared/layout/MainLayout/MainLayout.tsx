import { memo, ReactElement } from 'react'

import { Col, Layout, Row } from 'antd'
import cn from 'classnames'

import cls from './MainLayout.module.scss'

interface MainLayoutProps {
  className?: string
  // header: ReactElement
  content: ReactElement
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { className, content } = props

  return (
    <Layout className={cn(cls.root, className)}>
      <Row>
        <Col span={24} className={cls.header}>
          {/* {header} */}
        </Col>
      </Row>
      <Row className={cls.layoutMain}>
        <Col className={cls.content}>{content}</Col>
      </Row>
    </Layout>
  )
})
