import request from 'superagent'

export const PENDING_POTENTIAL_MATCHES = 'PENDING_POTENTIAL_MATCHES'
export const POTENTIAL_MATCHES_SUCCESS = 'POTENTIAL_MATCHES_SUCCESS'
export const POTENTIAL_MATCHES_ERROR = 'POTENTIAL_MATCHES_ERROR'
export const LIKE_POTENTIAL_MATCH = 'LIKE_POTENTIAL_MATCH'

export function likePotentialMatch () {
  return {
    type: LIKE_POTENTIAL_MATCH
  }
}

export function pendingPotentialMatches () {
  return {
    type: PENDING_POTENTIAL_MATCHES
  }
}

export function potentialMatchesSuccess (users) {
  return {
    type: POTENTIAL_MATCHES_SUCCESS,
    users: potentialMatchesSuccess
  }
}

export function potentialMatchesError (message) {
  return {
    type: POTENTIAL_MATCHES_ERROR,
    message
  }
}

// export function potentialMatches (users) {
//   return dispatch => {
//     dispatch(pendingPotentialMatches())
//     request.get(`/api/v1/users/${users}`)
//       .then(res => dispatch(potentialMatchesSuccess(res.body)))
//       .catch(err => dispatch(potentialMatchesError(err.message)))
//   }
// }
