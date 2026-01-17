import React from 'react'
import Me from './components/Me'
import MyProjects from './components/MyProjects'
import MySkills from './components/MySkills'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='bg-zinc-950 text-white'>
      <Me/>
      <MyProjects/>
      <MySkills/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App