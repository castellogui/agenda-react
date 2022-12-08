import firstWave from '../../assets/login/wave-1.svg'
import secondWave from '../../assets/login/wave-2.svg'

export default function Waves(){
    return (
        <>
            <img src={firstWave} alt="firstWave" className='absolute bottom-0'/>
            <img src={secondWave} alt="secondWave" className='absolute bottom-0'/>
        </>
    )
}