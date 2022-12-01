import Head from 'next/head'
import HomeMain from '../components/HomeMain'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Head>
        <title>JNTUH Results Stats</title>
        <link rel='icon' href='/financial.ico' />
        <meta
          property='og:url'
          content='https://jntuh-results-stats.vercel.app/'
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='JNTUH Results Statistics' />
        <meta name='twitter:card' content='summary' />
        <meta
          property='og:description'
          content='Get all results from JNTUH with just your hallticket number in one place.'
        />
        <meta
          property='og:image'
          content={
            'https://raw.githubusercontent.com/ShravanPatelSJ/jntuh-results-stats/main/homepage.jpg'
          }
        />
      </Head>
      <HomeMain />
      <Footer />
    </div>
  )
}

export default Home
