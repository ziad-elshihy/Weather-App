/* eslint-disable react/prop-types */
// React
import { useState, useEffect } from 'react';

// React-Icon
import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs';

const Speech = ({ setSearchValue }) => {
   const [show, setShow] = useState(false);
   const [voiceSearch, setVoiceSearch] = useState(false);
   const [recognition, setRecognition] = useState(null);

   useEffect(() => {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
         const newRecognition = new SpeechRecognition();
         newRecognition.continuous = true;
         newRecognition.lang = 'en-ar'
         setRecognition(newRecognition);
      } else {
         console.error('Speech recognition is not supported in this browser.');
      }
   }, []);

   const openVoice = () => {
      setShow(true);
      setVoiceSearch(true);

      if (recognition) {
         recognition.start();
         recognition.onresult = (event) => {
            const { transcript } = event.results[0][0];
            if (transcript === null || transcript === "" || transcript === " ") {
               setVoiceSearch(true);
               recognition.start();
            } else if (transcript === 'delete') {
               setSearchValue('');
            } else {
               setShow(false);
               setVoiceSearch(false);
               setSearchValue(transcript);
            }
         }
      }
   }

   const closeVoice = () => {
      setShow(false);
      setVoiceSearch(false);

      if (recognition) {
         recognition.stop();
      }
   }

   return (
      <>
         {
            recognition
            && <div className='mic'>
               {
                  voiceSearch
                     ? <span
                        className='toggle'
                        onClick={closeVoice}
                     >
                        <BsFillMicMuteFill />
                     </span>
                     : <span
                        className='toggle'
                        onClick={openVoice}
                     >
                        <BsFillMicFill />
                     </span>
               }
               <span className={`mic-span ${show ? '' : 'show-tool-tip'}`}>
                  Say &nbsp;&apos;Delete&apos;&nbsp; to reset input
               </span>
            </div>
         }
      </>

   )
}

export default Speech;
