import React, { useState, useEffect } from 'react';
import  './Employee.css'
const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch employees');
                }
                const data = await response.json();
                setEmployees(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Employee List</h1>
            <ul className='empList'>
                {employees.map(employee => (
                    <li className='empListItems' key={employee.id}>
                        <strong>{employee.name}</strong> ({employee.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};

;


export default Employee;