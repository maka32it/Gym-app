export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY ,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.comew'
	}
};

export const fetchData = async (url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data
}   

export const youtubeOptions = {
	method: 'GET',
	params: {id: 'UCE_M8A5yxnLfW0KghEeajjw'},
	headers: {
	  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
	  'X-RapidAPI-Host':'youtube-search-and-download.p.rapidapi.com'
	}
  };