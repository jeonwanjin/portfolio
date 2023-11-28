import '../../css/main.css'
import intro from '../../img/intro.png'
import clock from '../../img/clock.png'
import monitor from '../../img/monitor.png'
import btn from '../../img/btn.png'
import Back from './back';

const Main = () => {

    return (  
      <div className="main">
        <div className='intro'><img src={intro}></img></div>
        <div className='flash'></div>
        <div className='clockWrap'><img className='clock' src={clock}></img></div>
        <div className='monitorWrap'><img className='monitor' src={monitor}></img></div>
        <div className='btnWrap'><img className='btn' src={btn}></img></div>
        <Back />
      </div>
      
    );
}
 
export default Main;