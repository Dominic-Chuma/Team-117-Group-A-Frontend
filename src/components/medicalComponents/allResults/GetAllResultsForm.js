import React from 'react'

const GetAllResultsForm = () => {
    return (
        <div className="container-*">
            <div>
                <div className="moveRight">
                    <b>
                        <p>Get All Results Form</p>
                    </b>
                    <table className="table mt-g text-center">
                        <thead>
                            <tr>
                                <th>Test Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="id">
                                <td>test 1</td>
                                <td>test 2</td>
                                <td>test 3</td>
                                <td>
                                    <button>Edit</button>
                                </td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                </div>
            </div>
        </div>
    )
}
export default GetAllResultsForm
