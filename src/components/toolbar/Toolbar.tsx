import { Container, Left, Right, Search } from "./Toolbar.style";

export function Toolbar() {
  return (
    <Container>
      <Left>
        <button>Atribuir</button>
        <button>Arquivar</button>
        <button>Agendar</button>
      </Left>

      <Right>
        <Search placeholder="Pesquisar" />
      </Right>
    </Container>
  );
}