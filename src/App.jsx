import { useState } from "react"
import SearchBox from "./SearchBox"
import Info from "./Info";
import Header from "./Header";
import Footer from "./Footer";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';


import LightbulbIcon from '@mui/icons-material/Lightbulb';

function App() {

  let [info,setInfo] = useState({ 
    city:"", 
temp:"",
wind: "",
des : "",
humidity:"",
feelsLike:"",
pressure:"",
maxTemp:"",
minTemp:"",
  });


let update = (result)=>{
  setInfo(result);
}

let [bulb,setBulb] = useState("bg-zinc-200");
let [col,setCol] = useState(true);

let light = ()=>{
  setBulb(bulb==="bg-zinc-200"?"bg-sky-100/90":"bg-zinc-200");
  setCol(!col);
}

let rang = col? " text-sky-900":"text-zinc-900" ;
  return (<>
    <div className={`${bulb} transition-all duration-1000  h-screen`}>
   
      <Header color={col}/>
   <SearchBox update = {update}/>


<Info color={col} data ={info}/>
<div className={`flex justify-center py-2 `}>
<span onClick={light} className={`${rang} fixed  right-4 bottom-2`}><LightbulbIcon/></span>
   
<Footer className=""/>


</div>
<Divider>
        <Chip label="Developer Muskan" size="large" />
  </Divider>
</div>
    


</>
  )
}

export default App
