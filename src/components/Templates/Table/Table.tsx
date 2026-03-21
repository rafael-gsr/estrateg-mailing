import "./Table.styles.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Contract } from "../../../../types";
import VerticalMenu from "../../Molecules/VerticalMenu";
import { formatDate } from "../../../utils/formatDate";
import StatusChip from "../../Atoms/StatusChip";
import { cutAndAddEllipsis } from "../../../utils/cutAndAddEllipsis";

const TableTemplate = ({ data }: { data: Array<Contract> | undefined }) => {
  return (
    <TableContainer className="container">
      <Table className="container__table">
        <TableHead className="container__table__head">
          <TableRow className="container__table__head__row">
            <TableCell className="container__table__head__row__cell">
              Empresa
            </TableCell>

            <TableCell className="container__table__head__row__cell">
              Ramo
            </TableCell>

            <TableCell className="container__table__head__row__cell">
              Email
            </TableCell>

            <TableCell className="container__table__head__row__cell">
              Telefone
            </TableCell>

            <TableCell className="container__table__head__row__cell">
              Data de Vencimento
            </TableCell>

            <TableCell className="container__table__head__row__cell">
              Status
            </TableCell>

            <TableCell className="container__table__head__row__cell">
              Último Contato
            </TableCell>

            <TableCell className="container__table__head__row__cell">
              Ações
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody className="container__table__body">
          {data?.map((contract) => (
            <TableRow key={contract.id} className="container__table__body__row">
              <TableCell
                className="container__table__body__row__cell"
                title={contract.companyName}
              >
                {cutAndAddEllipsis(contract.companyName)}
              </TableCell>

              <TableCell
                className="container__table__body__row__cell"
                title={contract.activity}
              >
                {cutAndAddEllipsis(contract.activity)}
              </TableCell>

              <TableCell
                className="container__table__body__row__cell"
                title={contract.email}
              >
                {cutAndAddEllipsis(contract.email)}
              </TableCell>

              <TableCell
                className="container__table__body__row__cell container__table__body__row__cell--phone"
                title={contract.phone}
              >
                {contract.phone}
              </TableCell>

              <TableCell
                className="container__table__body__row__cell"
                title={formatDate(contract.dueDate)}
              >
                {formatDate(contract.dueDate)}
              </TableCell>

              <TableCell className="container__table__body__row__cell">
                <StatusChip status={contract.status} />
              </TableCell>

              <TableCell
                className="container__table__body__row__cell"
                title={formatDate(contract.lastContact)}
              >
                {formatDate(contract.lastContact)}
              </TableCell>

              <TableCell
                className="container__table__body__row__cell"
                title="Menu de opções"
              >
                <VerticalMenu key={contract.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableTemplate;
