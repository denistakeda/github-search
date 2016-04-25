import React from 'react';

const Repository = ({repository}) => (
        <table>
            <tbody>
                <tr>
                    <td>Full Name</td>
                    <td>{repository.full_name}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>{repository.description}</td>
                </tr>
                <tr>
                    <td>Language</td>
                    <td>{repository.language}</td>
                </tr>
                <tr>
                    <td>Link</td>
                    <td><a href={repository.html_url} target="_blank">{repository.html_url}</a></td>
                </tr>
            </tbody>
        </table>

);

export default Repository;