 import React from 'react'
 import{Routes, Route } from 'react-router-dom'
 import './App.css'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import WomanPage from './stores/pages/WomanPage'
import MenPage from './stores/pages/MenPage'
import SpeakersPage from './stores/pages/SpeakersPage'
import AcPage from './stores/pages/AcPage'
import FurniturePage from './stores/pages/FurniturePage'
import FridgePage from './stores/pages/FridgePage'
import BooksPage from './stores/pages/BooksPage'
import KitchenPage from './stores/pages/KitchenPage'
import Watchpage from './stores/pages/Watchpage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'
import MenSingle from './singles/MenSingle'
import WomanSingle from './singles/WomanSingle'
import FridgeSingle from './singles/FridgeSingle'
import WatchSingle from './singles/WatchSingle'
import KitchenSingle from './singles/KitchenSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import AcSingle from './singles/AcSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import BookSingle from './singles/BooksSingle'
import TvPage from './stores/pages/TvPage'
import TvSingle from './singles/TvSingle'
 
 
 
 const App = () => {
   return (
     <div>
      <Routes>
        <Route path='/' element ={<LandingPage />}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path= '/woman' element={<WomanPage/>}/>
        <Route path= '/men' element={<MenPage/>} />
        <Route path= '/speakers' element={<SpeakersPage/>}/>
        <Route path='/ac' element={<AcPage/>}/>
        <Route path='/furniture' element={<FurniturePage/>}/>
        <Route path='/fridge' element={<FridgePage/>}/>
        <Route path='/books'  element={<BooksPage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
        <Route path='/watch' element={<Watchpage/>}/>
        <Route path='/tv' element={<TvPage/>}/>

          <Route path = '/mobiles/:id' element ={<MobileSingle/>}/>
       <Route path ='/cart' element={<UserCart/>} />
         <Route path ='/men/:id' element ={<MenSingle/>} />
         <Route path='/woman/:id' element={<WomanSingle/>}/>
         <Route path='/fridge/:id' element = {<FridgeSingle />} />
         <Route path='/watch/:id' element = {<WatchSingle />} />
         <Route path='/kitchen/:id' element = {<KitchenSingle />} />
         <Route path='/speakers/:id' element={<SpeakerSingle/>} />
         <Route path='/ac/:id' element={<AcSingle/>} />
         <Route path='/furniture/:id' element={<FurnitureSingle/>} />
         <Route path='/books/:id' element={<BookSingle/>}/>
        {/* <Route path='/tv/:id'  element={<TvSingle/>} />*/}
      </Routes>
        
     </div>
   )
 }
 
 export default App           
 