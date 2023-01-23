import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import Wishlist from './components/WishList';
import BookContextProvider from './context/BookContext';
import Header from './header/header';
function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      <BookContextProvider>
       <Routes>
        <Route path='/home' element={<Search/>}>
        </Route>
       </Routes>
       <Routes>
        <Route path='/wishList' element={<Wishlist/>}>
        </Route>
       </Routes>
      </BookContextProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
