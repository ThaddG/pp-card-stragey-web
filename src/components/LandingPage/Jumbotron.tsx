import Logo from "../Logo";

import image from '../../assets/naipo-de-k24rOBJ2D_0-unsplash.png'

// styles
import {Container} from '../../styles/LandingPage/Jumbotron.styles'

const Jumbotron = () => {
  return (
    <Container image={image}>
      <Logo />
    </Container>
  )
}

export default Jumbotron;