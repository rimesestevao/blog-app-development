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
          <h2 className="my-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">Quem sou eu?</h2>
          Olá! Meu nome é Estevão e eu sou um desenvolvedor web. Tenho 2 anos de experiência em desenvolvimento web focado em <strong>React</strong> e <strong>Svelte</strong> para o front-end e <strong>C#</strong> para o back-end. A 4 anos procuro ampliar meus conhecimentos como desenvolvedor fullstack através dos meus estudos, que ocasionaram o surgimento desse blog.
          <br/>
          Apaixonado por game design e game development, esse blog surgiu com o intuito de mostrar meus estudos e minhas decisões para toda a comunidade de desenvolvedores, em busca sempre de melhorar minhas habilidades em áreas já dominadas e, com certeza, mostrar minha jornada aprendendo e iniciando um game do zero. 
          Convido os visitante a dar uma conferida no meu trabalho: gosto de receber feedbacks e saber quais pontos podem ser melhorados.
          <br/>
          <br/>
          Se quiserem saber mais sobre mim vou deixar minhas redes socias e meu contato logo abaixo.
          <br/>
          <br/>
          <strong>BJUNDA.</strong>
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
