import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import Carousel from '../components/Carousel'
import RecipeCard from '../components/RecipeCard'
import Container from '../components/Container'
import { Col, Row } from 'antd'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    const { dispatch } = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    const test = [1, 2, 3]
    return <div className="p-startpage">
      <Carousel />

      <div className="c-reciperow">
        <Container>
          <h2>Populära recept</h2>
          <Row gutter={16}>
            {test.map(x => <Col span={8}>
                <RecipeCard />
              </Col>
            )}
          </Row>
        </Container>
      </div>

      <div className="c-reciperow">
        <Container>
          <h2>Nyligen besökta</h2>
          <Row gutter={16}>
            {test.map(x => <Col span={8}>
                <RecipeCard />
              </Col>
            )}
          </Row>
        </Container>
      </div>

      <div className="c-reciperow">
        <Container>
          <h2>Senaste upplagda</h2>
          <Row gutter={16}>
            {test.map(x => <Col span={8}>
                <RecipeCard />
              </Col>
            )}
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .c-reciperow {
          margin-top: 20px;
        }
      `}</style>

    </div>
  }
}



export default connect()(Index)
