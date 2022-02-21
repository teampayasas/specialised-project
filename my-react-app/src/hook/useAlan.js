import {useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
export default function useAlan() {
    useEffect(() => {
        alanBtn({
            key: 'e98b154fd089d01807425dd7b3d167e72e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
              if (commandData.command === 'go:back') {
                // Call the client code that will react to the received command
              }
            }
        });
      }, []);
    return null
}
