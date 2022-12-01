const HomeHeader = () => {
  return (
    <>
      <h1 className='p-4 text-black dark:text-white text-3xl font-bold sm:text-6xl'>
        Welcome to{' '}
        <a
          className='text-blue-400 hover:text-blue-600 hover:underline'
          href='https://github.com/ShravanPatelSJ/jntuh-results-stats'
          target='_blank'
        >
          JNTUH Results Statistics
        </a>
      </h1>

      <p className='home-header-caption text-black dark:text-white mt-6 text-base sm:text-xl'>
        Get all your results in one place.{' '}
        <i>
          Just your <b>hallticket</b>, to rule them all.
        </i>
      </p>
    </>
  )
}

export default HomeHeader
