import { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { SearchForm } from '../../components/SearchForm/SearchForm'
import { Summary } from '../../components/Summary/Summary'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

type TransactionsProps = {
  id: number
  description: string
  type: string
  category: string
  price: number
  createdAt: string
}

export const Transactions = () => {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  async function loadTransaction() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()
    setTransactions(data)
  }

  useEffect(() => {
    loadTransaction()
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((value) => {
              return (
                <tr key={value.id}>
                  <td width="50%">{value.description}</td>
                  <td>
                    <PriceHighlight variant="income">
                      {value.price}
                    </PriceHighlight>
                  </td>
                  <td>{value.category}</td>
                  <td>{value.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
