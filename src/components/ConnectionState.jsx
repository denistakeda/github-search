import React from 'react';
import {connect} from 'react-redux';
import {setQueryString, chooseRepository} from '../action_creators';
import {List} from 'immutable';
import Suggestion from './Suggestion';
import AutoComplete from 'material-ui/lib/auto-complete';
import Paper from 'material-ui/lib/paper';
import Repository from './Repository.jsx';

class GithubSearch extends React.Component {
    render() {
        const {
            queryString = "",
            suggestions = List(),
            repository,
            setQueryString,
            chooseRepository
        } = this.props;


        const dataSource = suggestions.map(suggestion => {return {
            text: suggestion.name,
            value: (
                <Suggestion
                    suggestion={suggestion}
                    onChooseRepository={chooseRepository} />
            )
        }}).toJS();

        return (
            <div className="app">
                <AutoComplete
                    floatingLabelText="React Community"
                    filter={AutoComplete.noFilter}
                    triggerUpdateOnFocus
                    fullWidth
                    dataSource={dataSource}
                    value={queryString}
                    onUpdateInput={setQueryString}
                />
                {repository &&
                    <Paper>
                        <Repository repository={repository} />
                    </Paper>
                }
            </div>
        )

    }
}

export const ConnectionStateContainer = connect(
  state => state.toObject(), {setQueryString, chooseRepository}
)(GithubSearch);
