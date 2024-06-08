import { Routes,Route,BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import MainLayout from "./components/MainLayout";
import Show from "./pages/Show";
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter >
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Starred" element={<Starred/>}/> 
        </Route>
        <Route path="/show/:showId" element={<Show/>}/>
        <Route path="*" element={<div>Page Not Found</div>}/>
      </Routes>
    </BrowserRouter>
     </QueryClientProvider>
  );
}

export default App;
