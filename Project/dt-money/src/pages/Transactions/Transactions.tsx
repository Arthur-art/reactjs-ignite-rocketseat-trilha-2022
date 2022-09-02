import { Header } from '../../components/Header/Header'
import { Summary } from '../../components/Summary/Summary'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>02/09/2022</td>
            </tr>
            <tr>
              <td width="50%">Ifood</td>
              <td>
                <PriceHighlight variant="outcome"> - R$ 45,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>12/09/2022</td>
            </tr>
            <tr>
              <td width="50%">Emprestimo</td>
              <td>
                <PriceHighlight variant="outcome"> - R$ 650,00</PriceHighlight>
              </td>
              <td>Finanças</td>
              <td>13/09/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
