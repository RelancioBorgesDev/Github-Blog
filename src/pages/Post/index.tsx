import Header from '../../components/Header'
import HeaderPost from './components/HeaderPost'
import { Container, TextContainer } from './style'

export default function Post() {
  return (
    <Container>
      <Header children={<HeaderPost/>}/>
      <TextContainer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eos corporis, quos error sequi nostrum amet nemo esse facere, officiis consequuntur inventore adipisci? Corporis omnis eveniet doloremque voluptates alias a. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nemo consequatur libero repellendus, fugit quaerat. Consectetur, sequi, molestiae quo quibusdam labore excepturi eaque fuga pariatur ea officia velit ducimus voluptates!</p>
      </TextContainer>
    </Container>
  )
}
