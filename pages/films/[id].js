// export const getStaticPaths = async () => {
//   const res = await fetch('https://swapi.dev/api/films/');
//   const data = await res.json();

//   const paths = arrayData.map(movie => {
//     return {
//       params: {id: movie.episode_id.toString()}
//     }
//   })

//   return{
//     paths,
//     fallback: false
//   }
// }

// export const getstaticProps = async (ctx) => {
//   const id = ctx.params.id;
//   const res = await fetch('https://swapi.dev/api/films/' + id)
//   const data = await res.json();

//   return {
//     props: {movie: data}
//   }

// }

// const movieDetails = ({movie}) => {
//   return (
//     <div>
//       <h2>Detalhes do filme + {movie.title}</h2>
//     </div>
//   );

// }

// export default movieDetails;