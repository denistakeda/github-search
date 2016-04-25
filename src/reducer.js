import {Map, List} from 'immutable';

function setQueryString(state, queryString) {
  return state
      .set('queryString', queryString)
      .set('suggestions', state.get('repositories')
          .filter(repo => (new RegExp('^' + queryString)).test(repo.name))
          .sortBy(repo => repo.stargazers_count)
          .take(3)
      )
}

function chooseRepository(state, repository) {
  return state
      .delete('suggestions')
      .set('repository', repository);
}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_QUERY_STRING':
        return setQueryString(state, action.queryString);
    case 'FETCH_REPOSITORIES':
        return state.set('repositories', List(action.repositories));
    case 'CHOOSE_REPOSITORY':
          return chooseRepository(state, action.repository);
  }
  return state;
}
