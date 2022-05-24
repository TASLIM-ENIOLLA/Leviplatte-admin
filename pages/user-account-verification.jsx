import Template from '../components/Template'

export default ({usersList}) => {
    return (
        <Template>
            <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped table-checkable table-highlight-head mb-4">
                    <thead>
                        <tr>
                            <th className="checkbox-column">
                                <div className="custom-control custom-checkbox checkbox-primary">
                                <input type="checkbox" className="custom-control-input todochkbox" id="todoAll" />
                                <label className="custom-control-label" htmlFor="todoAll"></label>
                                </div>
                            </th>
                            <th className="">Name</th>
                            <th className="">Email</th>
                            <th className="">Phone</th>
                            <th className="">Status</th>
                            <th className="text-center">Icons</th>
                        </tr>
                    </thead>
                    <tbody>{
                        (usersList.length > 0)
                        ? (
                            usersList.map(
                                ({full_name, email, phone, status}, key) => (
                                    <tr key = {key}>
                                        <td className="checkbox-column">
                                            <div className="custom-control custom-checkbox checkbox-primary">
                                                <input type="checkbox" className="custom-control-input todochkbox" id = {`table-list-${key}`} />
                                                <label className="custom-control-label" htmlFor = {`table-list-${key}`}></label>
                                            </div>
                                        </td>
                                        <td className="text-c">{full_name}</td>
                                        <td className="text-c">{email}</td>
                                        <td className="text-c">{phone}</td>
                                        <td className="text-c">
                                            <span className={`badge cursor-pointer text-capitalize outline-badge-${(status === 'verified')? 'success': 'warning'
                                            } shadow-none`}>{status}</span>
                                        </td>
                                        <td className="text-center">
                                            <div className="dropdown custom-dropdown">
                                                <a className="dropdown-toggle" role="button" id={`dropdownMenuLink${key}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className = 'text-muted fa fa-ellipsis-h'></span>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby={`dropdownMenuLink${key}`}>
                                                    <a className="dropdown-item cursor-pointer">Download</a>
                                                    <a className="dropdown-item cursor-pointer">Share</a>
                                                    <a className="dropdown-item cursor-pointer">Edit</a>
                                                    <a className="dropdown-item cursor-pointer">Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )
                        )
                        : (
                            <tr>
                                <td colSpan = '5'>
                                    <div className = 'bg-light p-5 text-center'>Empty list returned</div>
                                </td>
                            </tr>
                        )
                    }</tbody>
                </table>
            </div>
        </Template>
    )
}

export async function getServerSideProps(){
    const req1 = await fetch(`http://localhost:3000/api/users`)
    const res1 = await req1.json()

    return {
        props: {
            usersList: res1.data
        }
    }
}