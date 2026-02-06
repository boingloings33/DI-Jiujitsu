import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

export default function ScheduleTable() {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        border: "1px solid #DCD9D0",
        borderRadius: 0,
      }}
    >
      <Table
        sx={{
          tableLayout: "fixed",
          width: "100%",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={headerCell}>
              <Typography variant="h4">Time</Typography>
            </TableCell>
            <TableCell sx={headerCell}>
              <Typography variant="h4">Mon</Typography>
            </TableCell>
            <TableCell sx={headerCell}>
              <Typography variant="h4">Tue</Typography>
            </TableCell>
            <TableCell sx={headerCell}>
              <Typography variant="h4">Wed</Typography>
            </TableCell>
            <TableCell sx={headerCell}>
              <Typography variant="h4">Thu</Typography>
            </TableCell>
            <TableCell sx={headerCell}>
              <Typography variant="h4">Fri</Typography>
            </TableCell>
            <TableCell sx={headerCell}>
              <Typography variant="h4">Sat</Typography>
            </TableCell>
            <TableCell sx={headerCell}>
              <Typography variant="h4">Sun</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {/* Row 1 */}
          <TableRow>
            <TableCell sx={timeCell}>7:00 AM - 8:15 AM</TableCell>
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
          </TableRow>

          {/* Row 2 */}
          <TableRow>
            <TableCell sx={timeCell}>12:00 PM - 1:00 PM</TableCell>
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
          </TableRow>

          {/* Row 3 */}
          <TableRow>
            <TableCell sx={timeCell}>4:00 PM - 4:45 PM</TableCell>
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
          </TableRow>

          {/* Row 4 */}
          <TableRow>
            <TableCell sx={timeCell}>4:45 PM - 5:30 PM</TableCell>
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
          </TableRow>

          {/* Row 5 */}
          <TableRow>
            <TableCell sx={timeCell}>5:45 PM - 6:45 PM</TableCell>
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
          </TableRow>

          {/* Row 6 */}
          <TableRow>
            <TableCell sx={timeCell}>6:45 PM - 8:00 PM</TableCell>
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
            <TableCell sx={bodyCell} />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const headerCell = {
  backgroundColor: "#F9F7F4",
  border: "1px solid #DCD9D0",
  textAlign: "center",
};

const timeCell = {
  backgroundColor: "#FBFAF7",
  border: "1px solid #DCD9D0",
  fontWeight: 600,
  whiteSpace: "nowrap",
  textAlign: "center",
  color: "text.secondary",
  fontSize: "14px",
  py: 2,
};

const bodyCell = {
  backgroundColor: "#FBFAF7",
  border: "1px solid #DCD9D0",
  height: 56,
  paddingTop: 7,
};
