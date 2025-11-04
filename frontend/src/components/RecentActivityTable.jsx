import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const RecentActivityTable = ({ course }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Paper sx={{ p: 2, mb: 3, maxWidth: 900, borderRadius: "12px" }}>
        <TableContainer sx={{ border: 0 }}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Course Name</TableCell>
                <TableCell align="right">Deadline</TableCell>{" "}
              </TableRow>
            </TableHead>
            <TableBody>
              {course.map((item) => (
                <TableRow key={item.name}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.deadline}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default RecentActivityTable;

//title: recent activity
//table components subtitle, due in: 6 days
