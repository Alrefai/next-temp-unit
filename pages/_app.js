import App, {Container} from 'next/app'
import Head from '../components/head'
import reducer from '../reducers'
import { initModel } from '../constants'
import '../node_modules/modern-normalize/modern-normalize.css'
import '../node_modules/tachyons/css/tachyons.min.css'

class MyApp extends App {
  state = reducer(initModel, {})
  dispatch = action => this.setState(prevState => reducer(prevState, action))

  render() {
    const { Component } = this.props
    return (
      <Container>
        <Head
          title={`Temp Unit Converter`}
          description={
            `Temperature Unit Converter (demo) – React app built with Next.js.`
          }
        />
        <Component model={this.state} dispatch={this.dispatch} />
        <style jsx global>{`
          body {
            background: black;
            color: #F4F4F4;
            max-width: 32rem;
            margin-right: auto;
            margin-left: auto;
          }
        `}</style>
      </Container>
    )
  }
}

export default MyApp
