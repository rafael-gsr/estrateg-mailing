import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { Contract } from '../../../../types'
import Title from '../../Atoms/Title'
import Actions from '../../Molecules/Actions'
import { formatDate } from '../../../utils/formatDate'
import StatusChip from '../../Atoms/StatusChip'

const TableTemplate = ({
  data,
  title,
}: {
  data: Array<Contract> | undefined
  title: string
}) => {
  return (
    <>
      <Title
        level={1}
        colorScheme='light'
      >
        {title}
      </Title>

      <TableContainer style={{ overflow: 'visible' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Empresa</TableCell>

              <TableCell>Ramo</TableCell>

              <TableCell>Email</TableCell>

              <TableCell>Telefone</TableCell>

              <TableCell>Data de Vencimento</TableCell>

              <TableCell>Status</TableCell>

              <TableCell>Último Contato</TableCell>

              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.map((contract) => (
              <TableRow key={contract.id}>
                <TableCell>{contract.companyName}</TableCell>
                <TableCell>{contract.activity}</TableCell>
                <TableCell>{contract.email}</TableCell>
                <TableCell>{contract.phone}</TableCell>
                <TableCell>{formatDate(contract.dueDate)}</TableCell>
                <TableCell>
                  <StatusChip status={contract.status} />
                </TableCell>
                <TableCell>{formatDate(contract.lastContact)}</TableCell>
                <TableCell>
                  <Actions key={contract.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default TableTemplate
