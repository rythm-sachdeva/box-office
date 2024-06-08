

const BASE_URL='https://api.tvmaze.com'


const Tvmaze = async queryString => {
  try {
    const response = await fetch(`${BASE_URL}${queryString}`);
    const body = await response.json();
    return body;
  } catch (error) {
   throw new Error(error.message)
  }
};

export const searchForShows = (query) => Tvmaze(`/search/shows?q=${query}`)

export const searchForPeople = (query) => Tvmaze(`/search/people?q=${query}`)

export const getShowsById = (showId) => Tvmaze(`/shows/${showId}?embed[]=seasons&embed[]=cast`)

export const getShowsByIds = async (starredShow) => {
  const apiRequestPromises = starredShow.map((showId)=> getShowsById(showId))
  const result = await Promise.all(apiRequestPromises)
  return result
}
