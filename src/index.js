import React from 'react';
import Logo from './components/Logo'
import Photo from './components/Photo'

const Main = () => {

  return(
    <>
      <Logo />
      <Photo countLike={10} countDeslike={-3} file={require('./assets/images/Mark.jpg')}/>

      <Photo countLike={7} countDeslike={-15} file={require('./assets/images/Gates.jpg')}/>

       <Photo countLike={3} countDeslike={-1}file={require('./assets/images/Jobs.jpg')}/>


    </>
  )

};

export default Main;
