import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { PATREON_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-[#191917] border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row justify-around items-center">
          <h2 className="footer text-slate-50 text-4xl lg:text-[3rem] font-bold tracking-tighter leading-tight text-center lg:text-left lg:pl-4">
            MEES.
          </h2>
          {/* <div className="gap-y-3 my-12 flex flex-col lg:flex-col justify-center items-center lg:pl-4 lg:w-1/2">
          <a
              href="/"
              className="mx-3 text-2xl text-slate-50 font-bold hover:underline"
            >
              Início
            </a>
          <a
              href="/blog/"
              className="mx-3 text-2xl text-slate-50 font-bold hover:underline"
            >
              Blog
            </a>
          <a
              href="/contato/"
              className="mx-3 text-2xl text-slate-50 font-bold hover:underline"
            >
              Contato
            </a>
          </div> */}
          <div className="gap-y-3 flex flex-col lg:flex-col justify-center items-center lg:pl-4 ">
            <a
              href={`https://patreon.com/${PATREON_PATH}`}
              className=" mx-3 text-lg bg-none hover:bg-white hover:text-black border border-white text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Me apoie no Patreon!
            </a>
            <a
              href={`https://github.com/${EXAMPLE_PATH}`}
              className="mx-3 text-lg text-slate-50 font-bold hover:underline"
            >
              Twitch
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
