import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { SearchForm } from '../../components/SearchForm/SearchForm'
import { Summary } from '../../components/Summary/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)

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
