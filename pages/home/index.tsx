import React from 'react';
import LandingPage from '../../components/teste';
import MoreStories from '../../components/more-stories';
import Post from '../../interfaces/post';
import { getAllPosts } from '../../lib/api';
import Footer from '../../components/footer'


type Props = {
  allPosts: Post[]
}


const index = ({ allPosts }) => {

  const morePosts = allPosts.slice(1)

  return (
    <div className='overflow-hidden bg-gray-100'>
        <LandingPage/>
        <div className='container mt-12 mx-auto px-5 '>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
        <Footer />
    </div>
  )
}

export default index



export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
