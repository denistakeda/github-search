import axios from 'axios';

export function getRepositories() {
  return dispatch =>
    axios.get('https://api.github.com/orgs/reactjs/repos')
      .then(response => dispatch(fetchRepositories(response.data)));
}

export function setQueryString(queryString) {
  return {
    type: 'SET_QUERY_STRING',
    queryString
  }
}

export function fetchRepositories(repositories) {
  return {
    type: 'FETCH_REPOSITORIES',
    repositories
  }
}

export function chooseRepository(repository) {
  return {
    type: 'CHOOSE_REPOSITORY',
    repository
  }
}