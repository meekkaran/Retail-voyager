import React from 'react';
import Header from '../components/Header';
import { useState } from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,TablePagination,Button,} from '@mui/material';

interface Row {
  contact:string;
  name: string;
  description: string;
  field1: string;
  field2: string;
  field3: string;
}

const Home: React.FC = () => {
  // Dummy data 
  const fetchedData: Row[] = [
    { contact: '0710203040501', name: 'Meek A', description: 'Gender A', field1: 'Value X', field2: 'Value Y', field3: 'Value Z' },
    { contact: '0710203040501', name: 'Meek B', description: 'Gender B', field1: 'Value X', field2: 'Value Y', field3: 'Value Z' },
    { contact: '0710203040501', name: 'Meek C', description: 'Gender C', field1: 'Value X', field2: 'Value Y', field3: 'Value Z' },
    { contact: '0710203040501', name: 'Meek D', description: 'Gender D', field1: 'Value X', field2: 'Value Y', field3: 'Value Z' },
    { contact: '0710203040501', name: 'Meek E', description: 'Gender E', field1: 'Value X', field2: 'Value Y', field3: 'Value Z' },
    { contact: '0710203040501', name: 'Meek F', description: 'Gender F', field1: 'Value X', field2: 'Value Y', field3: 'Value Z' },
    { contact: '0710203040501', name: 'Meek G', description: 'Gender G', field1: 'Value X', field2: 'Value Y', field3: 'Value Z' },
    { contact: '0710203040501', name: 'Meek H', description: 'Gender H', field1: 'Value X', field2: 'Value Y', field3: 'Value Z' },
    { contact: '0710203040501', name: 'Meek I', description: 'Gender I', field1: 'Value X', field2: 'Value Y', field3: 'Value Z' },
    { contact: '0710203040501', name: 'Meek J', description: 'Gender J', field1: 'Value X', field2: 'Value Y', field3: 'Value Z' },
    
  ];


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

   const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const slicedData = fetchedData.slice(startIndex, endIndex);

  return (
    <div>
      <Header />
      <div style={{ paddingTop: '100px', textAlign: 'center' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Field 1</TableCell>
                <TableCell>Field 2</TableCell>
                <TableCell>Field 3</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slicedData.map((row) => (
                <TableRow key={row.contact}>
                  <TableCell>{row.contact}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.field1}</TableCell>
                  <TableCell>{row.field2}</TableCell>
                  <TableCell>{row.field3}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="success">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <TablePagination
        rowsPerPageOptions={[6]}
        component="div"
        count={fetchedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Home;