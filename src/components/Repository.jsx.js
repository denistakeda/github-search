import React from 'react';
import getLanguageName from '../../config/language_dictionary'

const Repository = ({repository}) => (
    <div className="repository">
        <table>
            <tbody>
            <tr>
                <td className="label">Full Name:</td>
                <td className="value">{repository.full_name}</td>
            </tr>
            <tr>
                <td className="label">Description:</td>
                <td className="value">{repository.description}</td>
            </tr>
            <tr>
                <td className="label">Language:</td>
                <td className="value">{getLanguageName(repository.language)}</td>
            </tr>
            <tr>
                <td className="label">Link:</td>
                <td className="value"><a href={repository.html_url} target="_blank">{repository.html_url}</a></td>
            </tr>
            </tbody>
        </table>
    </div>


);

export default Repository;