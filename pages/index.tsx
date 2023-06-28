import { useRecoilValue } from "recoil";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

import { Movie } from "@/typings";
import { modalState } from "@/atoms/modalAtom";

import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import FilmRow from "@/components/FilmRow";
import Modal from "@/components/Modal";

import requests from "@/utils/requests";

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
  adventureMovies: Movie[];
  animationMovies: Movie[];

  crimeMovies: Movie[];
  dramaMovies: Movie[];
  familyMovies: Movie[];
  musicMovies: Movie[];
  warMovies: Movie[];
  fantasyMovies: Movie[];
  historyMovies: Movie[];
  mysteryMovies: Movie[];
  sciencefictionMovies: Movie[];
  thrillerMovies: Movie[];
  westernMovies: Movie[];
}

export default function Home({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
  adventureMovies,
  animationMovies,

  crimeMovies,
  dramaMovies,
  familyMovies,
  musicMovies,
  warMovies,
  fantasyMovies,
  historyMovies,
  mysteryMovies,
  sciencefictionMovies,
  thrillerMovies,
  westernMovies
}: Props) {
  const showModal = useRecoilValue(modalState);

  return (
    <>
      <Navbar />
      {/* <Billboard /> */}
      <Banner netflixOriginals={netflixOriginals}/>
      {/* <div className="pb-[30rem]">
        <MovieList 
          title="Trending Now"
          data={movies}
        />
      </div> */}
      <section className="pb-[1rem] flex flex-col sm:mt-6 mt-5">
        <FilmRow 
          title='Trending'
          movies={trendingNow}
        />
        <FilmRow 
          title='Top Rated'
          movies={topRated}
        />
        <FilmRow 
          title='Action'
          movies={actionMovies}
        />
        <FilmRow 
          title='Adventure'
          movies={adventureMovies}
        />
        <div id="animation">
          <FilmRow 
            title='Animation'
            movies={animationMovies}
          />
        </div>
        <FilmRow 
          title='Comedy'
          movies={comedyMovies}
        />
        <FilmRow 
          title='Crime'
          movies={crimeMovies}
        />
        <FilmRow 
          title='Documentaries'
          movies={documentaries}
        />
        <FilmRow 
          title='Drama'
          movies={dramaMovies}
        />
        <FilmRow 
          title='Family'
          movies={familyMovies}
        />
        <FilmRow 
          title='Fantasy'
          movies={fantasyMovies}
        />  
        <FilmRow 
          title='History'
          movies={historyMovies}
        />
        <FilmRow 
          title='Horror'
          movies={horrorMovies}
        /> 
        <FilmRow 
          title='Music'
          movies={musicMovies}
        />  
        <FilmRow 
          title='Mystery'
          movies={mysteryMovies}
        />
        <FilmRow 
          title='Romance'
          movies={romanceMovies}
        />
        <FilmRow 
          title='Science-Fiction'
          movies={sciencefictionMovies}
        />
        <FilmRow 
          title='Thriller'
          movies={thrillerMovies}
        />
        <FilmRow 
          title='War'
          movies={warMovies}
        />
        <FilmRow 
          title='Western'
          movies={westernMovies}
        />         
      </section>
      {showModal && <Modal />}
    </>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
    adventureMovies,
    animationMovies,

    crimeMovies,
    dramaMovies,
    familyMovies,
    musicMovies,
    warMovies,
    fantasyMovies,
    historyMovies,
    mysteryMovies,
    sciencefictionMovies,
    thrillerMovies,
    westernMovies
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
    fetch(requests.fetchAdventureMovies).then((res) => res.json()),
    fetch(requests.fetchAnimationMovies).then((res) => res.json()),
    
    fetch(requests.fetchCrimeMovies).then((res) => res.json()),
    fetch(requests.fetchDramaMovies).then((res) => res.json()),
    fetch(requests.fetchFamilyMovies).then((res) => res.json()),

    fetch(requests.fetchMusicMovies).then((res) => res.json()),
    fetch(requests.fetchWarMovies).then((res) => res.json()),
    fetch(requests.fetchFantasyMovies).then((res) => res.json()),

    fetch(requests.fetchHistoryMovies).then((res) => res.json()),
    fetch(requests.fetchMysteryMovies).then((res) => res.json()),
    fetch(requests.fetchSciencefictionMovies).then((res) => res.json()),

    fetch(requests.fetchThrillerMovies).then((res) => res.json()),
    fetch(requests.fetchWesternMovies).then((res) => res.json())
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      adventureMovies: adventureMovies.results,
      animationMovies: animationMovies.results,

      crimeMovies: crimeMovies.results,
      dramaMovies: dramaMovies.results,
      familyMovies: familyMovies.results,
      musicMovies: musicMovies.results,
      warMovies: warMovies.results,
      fantasyMovies: fantasyMovies.results,
      historyMovies: historyMovies.results,
      mysteryMovies: mysteryMovies.results,
      sciencefictionMovies: sciencefictionMovies.results,
      thrillerMovies: thrillerMovies.results,
      westernMovies: westernMovies.results
    }
  }
}