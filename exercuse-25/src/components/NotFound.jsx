import {useRouteError, Link} from 'react-router'

function NotFound() {
  const error = useRouteError();


  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow m-auto w-2xl mt-10 p-8'>
      <h1 className='text-red-500 p-4'>Error</h1>
      <p className='text-red-500 p-4'>{error.statusText || error.message}</p>
      <p className='text-red-500 p-4'>We couldn't find what you were looking for </p>
      <Link to="/" className=' p-4 shadow-md bg-red-600 text-white rounded-md mb-2 '>Go back to the Home page</Link>
    </div>
  )
}

export default NotFound
