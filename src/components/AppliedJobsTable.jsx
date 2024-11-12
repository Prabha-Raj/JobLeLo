import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Applied Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company Name</TableHead>
                <TableHead className="text-right">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                [1,2,3,4,5].map((item, index)=>(
                    <TableRow key={index}>
                        <TableCell>04/11/2024</TableCell>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>#TeamError</TableCell>
                        <TableCell className="text-right"><Badge className='bg-green-600 cursor-default hover:bg-green-700'>Selected</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobsTable
