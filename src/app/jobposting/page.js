import JobDescription from '../../component/JobPosting/JobDescription'
import JobDetails from '../../component/JobPosting/JobDetails'
import JobPay from '../../component/JobPosting/JobPay'
import React from 'react'

const page = () => {
  return (
    <>
    <JobDetails />
    <JobDescription />
    <JobPay />
    </>
  )
}

export default page