import { HistoryContainer, HistoryList } from './History.styles'

export const History = () => {
  return (
    <HistoryContainer>
      <h1>History</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar React</td>
              <td>30 minutos</td>
              <td>Há 3 dias</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar Nest</td>
              <td>30 minutos</td>
              <td>Há 3 dias</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar React Native</td>
              <td>30 minutos</td>
              <td>Há 3 dias</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar Vue</td>
              <td>30 minutos</td>
              <td>Há 3 dias</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
