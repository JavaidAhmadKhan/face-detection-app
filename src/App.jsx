
import ParticlesBg from 'particles-bg'

import Navigation from './components/Navigation'
import ImageLinkForm from './components/ImageLinkForm'
import Rank from './components/Rank'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <ParticlesBg type="thick" bg={true} />
      <Navigation />
      <Rank />
      <ImageLinkForm />
      <Footer />
    </div>
  )
}

export default App
