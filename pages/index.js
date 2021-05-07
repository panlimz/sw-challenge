import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() { //página de início apenas com um link para a página de filmes
  return (
    <div className="container">
      <Head>
        <title>SW Challenge</title>
      </Head>
      <main>
        <h2 className="title">
          <p>Bem vindos ao primeiro desafio</p>
        </h2>
        <Link href="/films">
          <a><Image src={"https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"} className="sw-logo" alt="logo" width="300"  height="145"/></a>
        </Link>
        <p>
            Clique no logo para iniciar
        </p>
      </main>
    </div>
  )
}

