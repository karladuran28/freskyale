import { useEffect, useState } from 'react';
import MainBody from './components/MainBody'
import NavMenu from './components/NavMenu'
import ParticlesComponent from './components/ParticlesComponent'
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import SpecialCharacter from './components/SpecialCharacter';
import OptionalBody from './components/OptionalBody';

function App() {

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <ParticlesComponent init={init}/>
      {/* <NavMenu/>
      <MainBody/> */}
      <OptionalBody/>

      {/* <SpecialCharacter/> */}
    </div>
  )
}

export default App
