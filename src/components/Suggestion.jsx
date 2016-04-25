import React from 'react';
import getLanguageName from '../../config/language_dictionary'


const Suggestion = ({suggestion, onChooseRepository}) => (
    <div className="suggestion" onClick={onChooseRepository.bind(null, suggestion)}>
        <span className="repository-name">{suggestion.name}</span>
        <span className="repository-language">{getLanguageName(suggestion.language)}</span>
        <div className="repository-description">{suggestion.description}</div>
    </div>
);

export default Suggestion;