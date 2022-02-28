import React , {useState , useEffect} from "react";
import { QuoteContainer } from "./StyledQuote";


const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };




const Quote = () => {

    const [playing, toggle] = useAudio('https://hporx.com/wp-content/themes/astra-child/assets/images/audio.mp3');



  return (
    <QuoteContainer>

      <div className="controles-button">
        <div className="controles-button-voice" onClick={toggle} >
        {playing ? (
             <img
             src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/29_Sound_alt-24.png"
             alt="voice"
           />

        ) : (
            <img
            src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/30_Sound_off-24.png"
            alt="voice"
          />
        )}
         
        </div>
        <div className="controles-button-quote">&rdquo;</div>
      </div>    
    </QuoteContainer>
  );
};

export default Quote;
