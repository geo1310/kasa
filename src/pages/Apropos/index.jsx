import '../../styles/Apropos.css';
import Banner from '../../components/Banner'
import bannerPhoto from '../../assets/kalen-emsley-montagnes foret.webp'


function Apropos() {
  
  return (
    <div>
        <Banner img={bannerPhoto} text=''/>
        <div className='apropos'>A propos</div>
    </div>
    
  );
}

export default Apropos;
