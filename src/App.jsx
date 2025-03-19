import { Title, Container, TopBackground, Form, ContainerInputs, Input, Button } from './styles'

function Home() {

  return (
    <Container>
      <TopBackground>
        <img />
      </TopBackground>

      <Form>
        <Title>Cadastro Usuário</Title>

        <ContainerInputs>
          <div>
            <div>
              <InputLabel>Nome<span>*</span></InputLabel>
              <Input type='text' placeholder='Nome do usuário' />
              <Input type='number' placeholder='Idade do usuário' />
            </div>
          </div>

          <div>
            <InputLabel>
              E-mail<span>*</span>
            </InputLabel>
            <Input type='email' placeholder='E-mail do usuário' />
          </div>         
        </ContainerInputs>
        <Button>Cadastro Usuário</Button>
      </Form>
    </Container>
  )
}

export default App
