import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Pages/Layout'
import './App.css'
import { Home } from './Pages/Home'
import { Blog } from './Pages/Blog'
import { BlogNew } from './Pages/BlogNew'
import { BlogContextProvider } from './Context/BlogContextProvider'
import { BlogEdit } from './Pages/BlogEdit'
import { BlogDetail } from './Pages/BlogDetail'

function App() {

  return (
    <BlogContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path="/blog/new" element={<BlogNew/>}/>
            <Route path="/blog/edit/:id" element={<BlogEdit/>}/>
            <Route path='/blog/:id' element={<BlogDetail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </BlogContextProvider>
  )
}

export default App
