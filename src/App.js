
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/root/root';
import Home from './components/home/home';
import ItemsList from './components/itemList/itemList';
import Item from './components/item/item';

const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path=":type" element={<ItemsList/>}/>
      <Route path=":type/:id" element={<Item/>}/>
    </Route>
  )
);

function App() {
  

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;