import { FC, useState } from "react";
import { Outlet } from "@umijs/max";
import Music1 from "@/components/Music1";
import { useModel } from "@umijs/max";
import { Popup, NavBar } from 'antd-mobile';
import MusicDetails from '@/components/MusicDetails';
import PlaymusicList from "@/components/PlayMusicList";
import { useMatch } from "@umijs/max";
import { history } from "@umijs/max";
const LayOut2: FC = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [data,setData] = useState(1);
  const upDatePage = ()=>{
    setTimeout(() => {
      setData(data+1);
    }, 200)
  }

  const back = () =>{
    history.back();
  }
  
  let PathList = ['/qinzhonjin','/','/chenqian','/xujiapeng'];
  const backBar=()=>{
    
    if(PathList.includes(location.pathname))
    {
      return false;
    }else{
      return (
        <NavBar onBack={back}>{document.title}</NavBar>
      );
    } ;
  }

  return (
    <div onClick={()=>(upDatePage())} id="root_1">
      {backBar()}
      <div>
      <Outlet></Outlet>
      </div>
      <div>
        <div>
        <Music1 updateVisible={setVisible1} updateVisible2={setVisible2}></Music1>
        </div>
      <Popup onClick={()=>upDatePage()} visible={visible1} onMaskClick={() => { setVisible1(false) }} bodyStyle={{ height: '100vh' }} >
        <MusicDetails TorF={false} >
          <div onClick={() => setVisible1(false)} style={{ backgroundColor: "#ddd", margin: '0 auto', width: '40%', height: '6px', borderRadius: '3px' }} ></div>
        </MusicDetails>
      </Popup>
      <Popup visible={visible2} onMaskClick={() => { setVisible2(false)}}  bodyStyle={{ height: '60vh' }} >
        <div onClick={()=>{  upDatePage()}}>
        <PlaymusicList></PlaymusicList>
        </div>
      </Popup>
      </div>
    </div>
  )
}

export default LayOut2;