import {colors} from '../assets/colors'

export default function Navbar(props){
   return(
        <nav className={`flex flex-row justify-between w-full`} style={{backgroundColor: colors().mainColor}} >
            <img src="../src/assets/logo.png" alt="logo" />
            <ul>
                <li></li>
            </ul>
        </nav> 
   )
}