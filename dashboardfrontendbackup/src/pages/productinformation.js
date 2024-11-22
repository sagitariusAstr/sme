import React from 'react'

const ProductInformation = () => {
let ind = 0
  return (
    <>
        <div className='container-fluid px-4'>
            <div className='row'>
                <div className='col'>
                    <h1 className='mt-4'>Product Information</h1>
                      <ol className="breadcrumb mb-4">
                          <li className="breadcrumb-item">
                              Dashboard
                          </li>
                          <li className="breadcrumb-item active">Product List</li>
                      </ol>
                </div>
            </div>

            <div className='row'>
                    <div className='col-sm-12 col-md-12'>
                            <h4>List of Resources</h4>
                            <hr />

                      <table className="table table-sm table-bordered table-hover">
                          <thead className="table-dark">
                              <tr>
                                  <th>S.N</th>
                                  <th>Name</th>
                                  <th>Link</th>
                              </tr>
                          </thead>
                          <tbody>
                            
                              <tr >
                                  <td>1</td>
                                  <td>Business Plans</td>
                                  <td><a href='https://www.ncell.axiata.com/en/business' target='_blank'>Go to Business Plan Page</a></td>
                                  
                                  
                              </tr>
                              <tr >
                                  <td>2</td>
                                  <td>Biz Plus Plans</td>
                                  <td><a href='https://www.ncell.axiata.com/en/business/mobility-services/biz-plans' target='_blank'>Go to Biz Plus Plan Page</a></td>
                              </tr>

                              <tr> 
                                  <td>3</td>
                                  <td>Solutions</td>
                                  <td><a href='https://www.ncell.axiata.com/en/business/solutions' target='_blank'>Go to Solutions Page</a></td>
                              </tr>


                          </tbody>
                      </table>
                    </div>
            </div>

        </div>
    </>
    
  )
}

export default ProductInformation