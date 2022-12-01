import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Box, Button, Stack, styled, Typography} from "@mui/material";

const columns = [
  {id: 'request_no', label: 'Request No', minWidth: 150, align: 'center', alignBody: 'right'},
  {id: 'request_time', label: 'Request Time', minWidth: 80, align: 'center', alignBody: 'center'},
  {
    id: 'created_user',
    label: 'Created user',
    minWidth: 150,
    align: 'center',
    alignBody: 'center',
  },
  {
    id: 'approval_time',
    label: 'Approval time',
    minWidth: 150,
    align: 'center',
    alignBody: 'center',
  },
  {
    id: 'debit_account',
    label: 'Debit account',
    minWidth: 150,
    alignBody: 'center',
    align: 'center',
  },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 150,
    align: 'center',
    alignBody: 'right',
  },
  {
    id: 'approver',
    label: 'Approver',
    minWidth: 150,
    align: 'center',
    alignBody: 'left',
  },
  {
    id: 'reason_to_reject',
    label: 'Reason to reject',
    minWidth: 150,
    align: 'center',
    alignBody: 'left',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 150,
    align: 'center',
    alignBody: 'left',
  }
];

function createData(request_no, request_time, created_user, approval_time, debit_account, amount, approver, reason_to_reject, status) {
  return {
    request_no,
    request_time,
    created_user,
    approval_time,
    debit_account,
    amount,
    approver,
    reason_to_reject,
    status
  };
}

const rows = [
  createData(123456, '3/6/22 14:04', "bichdtn", '', "0001010200027395", " 6.000,00", "VuTT", "", "Pending"),
  createData(123456, '3/6/22 14:04', "bichdtn", '', "0001010200027395", " 6.000,00", "VuTT", "", "Pending"),
  createData(123456, '3/6/22 14:04', "bichdtn", '', "0001010200027395", " 6.000,00", "VuTT", "", "Pending"),
  createData(123456, '3/6/22 14:04', "bichdtn", '', "0001010200027395", " 6.000,00", "VuTT", "", "Pending"),
  createData(123456, '3/6/22 14:04', "bichdtn", '', "0001010200027395", " 6.000,00", "VuTT", "", "Pending"),
  createData(123456, '3/6/22 14:04', "bichdtn", '', "0001010200027395", " 6.000,00", "VuTT", "", "Pending"),
  createData(123456, '3/6/22 14:04', "bichdtn", '', "0001010200027395", " 6.000,00", "VuTT", "", "Pending"),
  createData(123456, '3/6/22 14:04', "bichdtn", '', "0001010200027395", " 6.000,00", "VuTT", "", "Pending"),
  createData(123456, '3/6/22 14:04', "bichdtn", '', "0001010200027395", " 6.000,00", "VuTT", "", "Pending"),
  createData(123456, '3/6/22 14:04', "bichdtn", '', "0001010200027395", " 6.000,00", "VuTT", "", "Pending"),
  createData(123456, '3/6/22 14:04', "bichdtn", '', "0001010200027395", " 6.000,00", "VuTT", "", "Pending"),
  createData(123456, '3/6/22 14:04', "bichdtn", '', "0001010200027395", " 6.000,00", "VuTT", "", "Pending"),
];

export default function TableUser() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{width: '90%', overflow: 'hidden', margin:"auto"}}>
      <TypographyStyled sx={{marginTop:"60px"}}>Payroll services in bank</TypographyStyled>
      <GroupStyled>
        <InputStyled>
          <Typography>Request No</Typography>
          <input />
        </InputStyled>
        <InputStyled>
          <Typography>Request Time</Typography>
          <input />
        </InputStyled>
        <Button variant="outlined">Search</Button>
      </GroupStyled>
      <GroupStyled>
        <InputStyled>
          <Typography>Debit account</Typography>
          <input />
        </InputStyled>
        <InputStyled>
          <Typography>Approval date</Typography>
          <input />
        </InputStyled>
      </GroupStyled>
      <GroupStyled>
        <InputStyled>
          <Typography>Status</Typography>
          <form action="">
            <input list="status"/>
              <datalist id="status">
                <option value="Pending" />
                <option value="Incompleted" />
                <option value="Completed" />
                <option value="Failed" />
              </datalist>
          </form>
        </InputStyled>
      </GroupStyled>
      <form action="">
        <input type="file" id="myFile" name="filename"/>
      </form>
      <Paper>
        <TableContainer sx={{maxHeight: 440, marginTop: "20px"}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{minWidth: column.minWidth}}
                    sx={{
                      borderTop: "1px solid rgba(224, 224, 224, 1)",
                      borderRight: "1px solid rgba(224, 224, 224, 1)",
                      borderLeft: index === 0 ? "1px solid rgba(224, 224, 224, 1)" : null
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column, index) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.alignBody}
                            sx={{
                              borderRight: "1px solid rgba(224, 224, 224, 1)",
                              borderLeft: index === 0 ? "1px solid rgba(224, 224, 224, 1)" : null
                            }}
                          >
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
const InputStyled = styled(Stack)(
  () => `
   flex-direction: row;
   margin-right:100px;
   margin-bottom: 20px;
   >p {
    margin-right:30px;
    width: 200px;
   }
  `
)
const GroupStyled = styled(Stack)(
  () => `
    flex-direction: row;
    align-items: center;
  `
)
const TypographyStyled = styled(Typography)(
  () => `
    margin: 10px 0;
    font-size: 20px;
    font-weight: 900;
    `
)
