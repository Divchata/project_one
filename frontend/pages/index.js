import Head from 'next/head'
import CompleteWithOptions from "../components/activities/CompleteWithOptions";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <header className="header">
            Choose the correct answer
        </header>

      <main>
          <CompleteWithOptions/>
      </main>

    </div>
  )
}
