import Header from '../components/header'
import ConversionSet from '../components/conversionSet'

const Main = ({ dispatch, model }) => (
  <div className={`mh2`}>
    <Header />
    <ConversionSet {...{ dispatch, model }} />
    {/* <pre className={`f5`}> */}
    {/*   {JSON.stringify(model, null, 2)} */}
    {/* </pre> */}
  </div>
)

export default Main
