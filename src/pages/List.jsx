import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/action';

import { Input, Box,Stack,Button,Table,
    TableContainer,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    Td } from "@chakra-ui/react";


const List = () => {

    const dispatch = useDispatch();
    const company = useSelector((state) => state.company);

    useEffect(() => {
        dispatch(getData())
    },[])
  return (
    <div> <h3 style={{textAlign : "center",fontSize : "large", fontWeight : "600",marginBottom : "25px"}}>Listing Page</h3>

<Box>
        {/* <h1 >Table</h1> */}
        <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Company</Th>
              <Th>Position</Th>
              <Th>Contract</Th>
              <Th>Location</Th>
            
              
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {/* map through the fetched country list, to form table rows */}
            {
              company?.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{item.company}</Td>
                  <Td>{item.position}</Td>
                  <Td>{item.contract}</Td>
                  <Td>{item.location}</Td>
                 

                  
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>

      </Box>

    </div>
  )
}

export default List