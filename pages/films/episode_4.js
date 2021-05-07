import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://swapi.dev/api/films/1'); //busca os dados neste caminho
  const data = await res.json(); //recebe  o json do caminho acima

  return {
    props: {movie: data,
            char: data.characters,
    } //retorna em movie o conteúdo geral e em char apenas characters
  }
}

const getMovieInfo = ({movie, char}) => { //usando os dados de movie e char como parâmetros, são retornados os dados mencionados abaixo
  return (
    <div>
      <Head>
        <title>A New Hope</title>
      </Head>
      <h2>{movie.title}</h2>
      <p>Diretor: {movie.director}</p>
      <p>Produtor(es): {movie.producer}</p>
      <p>Data de lançamento: {movie.release_date}</p>
      <p>{movie.opening_crawl}</p>
      <h3>Personagens</h3>
      <a>{char[0]}</a>
    </div>
  );
}

export default getMovieInfo