import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://swapi.dev/api/films/'); //busca os dados neste caminho
  const data = await res.json(); //recebe  o json do caminho acima

  return {
    props: {movies: data.results} //retorna em movies o conteúdo de results - que faz parte de data
  }
}

const getMovieNames = ({movies}) => { //usando os dados contidos em movies 
  return (
    <div>
      <Head>
        <title>Filmes</title>
      </Head>
      <h2>Filmes</h2>
      {movies.map(movie => ( //mapeia os dados de movies e retorna o título de cada filme baseado em seu id
        <Link href={'/films/episode_' + movie.episode_id} key={movie.episode_id}>
          <a>
            <h3>{movie.title}</h3> 
          </a>
        </Link>
      ))}
    </div>
  );
}

export default getMovieNames