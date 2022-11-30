import { Link } from 'react-router-dom'
import {colors} from '../assets/colors'

export default function Navbar(props){
   return(
        <nav className={`flex flex-row justify-between w-full h-12`} style={{backgroundColor: colors().mainColor}} >
            <div className='h-full'>
                <Link to={'/home'}>
                <img src="../src/assets/logo.png" alt="logo" className='p-2 h-full'/>
                </Link>
            </div>
            <ul className='flex flex-row gap-5 items-center mx-10 text-[white] font-bold'>
                <li className='hover:scale-110 transition-all'><Link to={'/contatos'}>Contatos</Link></li>
                <li className='hover:scale-110 transition-all'><Link to={'/usuarios'}>Usuários</Link></li>
                <li className='hover:scale-110 transition-all'><Link to={'/configuracoes'}>Configurações</Link></li>
            </ul>
        </nav> 
   )
}