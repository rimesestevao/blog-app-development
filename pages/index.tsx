import React from 'react';
import LandingPage from '../components/teste';
import MoreStories from '../components/more-stories';
import Post from '../interfaces/post';
import { getAllPosts } from '../lib/api';
import Footer from '../components/footer'


type Props = {
  allPosts: Post[]
}


const index = ({ allPosts }) => {

  const morePosts = allPosts.slice(0, 2)

  return (
    <div className='overflow-hidden bg-gray-100'>
        <LandingPage/>
        <div className='container mt-6 mx-auto px-12 '>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
        <div className='container mb-12 mt-6 mx-auto px-12 '>
          <h2 className="my-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">O que fazemos?</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.
<br/>
Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.
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
