import { Container } from "./styles";
import { useTransacions } from "../../hooks/useTransactions";

export function TranscationsTable() {
  const { transactions } = useTransacions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Titulo</th>
            <th>Categoria</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {transactions
            .sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
            .map(transaction => (
              <tr key={transaction.id}>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt)
                  )}
                </td>
                <td>{transaction.title}</td>
                <td>{transaction.category}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', { 
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}