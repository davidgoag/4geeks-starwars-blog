const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterList: [],
			planetList: [],
			favoritesList: []
		},
		actions: {
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planetList: data.results }))
					.catch(err => console.error(err));
			},
			getCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({ characterList: data.results }))
					.catch(err => console.error(err));
			},
			addFavorites: name => {
				let favsList = getStore().favoritesList;
				favsList.push(name);
				setStore({ favoritesList: favsList });
			}
		}
	};
};

export default getState;
