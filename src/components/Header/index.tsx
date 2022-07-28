import { Container, Content } from './styles';

interface IHeaderPropos {
  onOpenNewTransactionModalOpen: () => void;
}

export function Header({ onOpenNewTransactionModalOpen }: IHeaderPropos) {
  return (
    <Container>
      <Content>
        <h1>SisFin - Gerenciador de Finanças</h1>
        <button type="button" onClick={onOpenNewTransactionModalOpen}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}