import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
// import './App.css'

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
			.then(res => res.json());

		SetTopAnime(temp.data.slice(0, 25));
		SetAnimeList(temp.data.slice(0,12));
	}

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query=ani) => {
		const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=20 `)
			.then(res => res.json());
		SetAnimeList(temp.data);
		
	}
	function GenreHandler(id){
		 const genre=document.getElementById(id).innerHTML;
		 FetchGenreAnime(genre)
		 

	}
	// const FetchGenreAnime= async(gn)=>{
	// 	const temp= await fetch('https://api.jikan.moe/v4/anime')
	// 	 .then(res=>res.json());
	// 	 const p=temp.data;
	// 	 console.log(p);
	// 	 p.map(anime=>(

	// 	  if(anime.genres.name==gn)
	// 		{
	// 			SetAnimeList(temp.data.slice(0,12));
	// 		}
	// 	))

	// }
	const FetchGenreAnime = async (gn) => {
		try {
		  const response = await fetch('https://api.jikan.moe/v4/anime');
		  const temp = await response.json();
		  const p = temp.data;
		  console.log(p);
	  
		  const filteredAnime = p.filter(anime =>
			anime.genres.some(genre => genre.name === gn)
		  );
	  
		  if (filteredAnime.length > 0) {
			SetAnimeList(filteredAnime.slice(0, 100));
		  } else {
			console.error('No anime found for the given genre');
		  }
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  }
	  

	useEffect(() => {
		GetTopAnime();
	}, []);
	
	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<Sidebar 
					topAnime={topAnime} />
				<MainContent
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
					animeList={animeList} />
			</div>
			<Footer GenreHandler={GenreHandler}/>
		</div>
	);
} 

export default App;