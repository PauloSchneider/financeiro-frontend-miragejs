import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TranscationsTable() {
  useEffect(() => {
    api.get('/transactions')
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="title">SpiderMan Steam</td>
            <td className="withdraw">R$ 249,90</td>
            <td>Jogos</td>
            <td>28/07/2022</td>
          </tr>

          <tr>
            <td className="title">Salário</td>
            <td className="deposit">R$ 2049,90</td>
            <td>Salário</td>
            <td>03/07/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}