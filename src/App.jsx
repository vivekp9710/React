import { createContext, useState } from 'react'
import './App.css'
import FunState from './2.user_state/FunState'
import ClassState from './2.user_state/classstate'
import StateProject1 from './2.user_state/StateProject1'
import FunProps from "./3.props/FunProps"
import ClassProps from "./3.props/ClassProps"
import FragmentTest from "./6.Fragment/FragmentTest"
import ListKey from "./7.List/ListKey"
import InputCom from './8.input/InputCom'
import ConditionalRendering from './4.ConditionalRender/ConditionalRendering'
import MapLoop from './4.ConditionalRender/Maploop'
import Map from "./5.Map/Map"
import MultipleInputCom from './8.input/MultipleInputCom'
import BootStrapCom from './9.Bootstrap/BootStrapCom'
import DeleteCom from './8.input/DeleteCom'
import UpdateCom from './8.input/UpdateCom'
import UpdateTest from './8.input/UpdateTest'
import ApiCom from './10.API/ApiCom'
import RegForm from "./8.input/RegForm"
import LifeCycleMethod from './11.LifeCycle/LifeCycleMethod'
import LocalstorageCom from './12.Local-Storage/LocalstorageCom'
import UseEffectCom from './13.Hooks/useEffect/UseEffectCom'
import StopWatch from './Stopwatch/StopWatch'

import router from "./14.router/About"
import Router from './14.router/Router'
import UseReducerCom from "./13.Hooks/useReducer/UseReducerCom"
import App2 from './16.Redux/App2'
import AppToolkit from './17.ReduxToolkit/AppToolkit'
import RegForm1 from './8.input/RegForm1'


function App() {

  return (
    <>
      <Header />
      {/* <StateProject1 /> */}

      {/* <FunState /> */}
      {/* <ClassState /> */}

      {/* <FunProps name={"vivek"} /> */}
      {/* <ConditionalRendering /> */}
      {/* <MapLoop /> */}
      {/* <Map /> */}
      {/* // <FragmentTest /> */}
      {/* <ListKey /> */}
      {/* <InputCom /> */}
      {/* <MultipleInputCom /> */}
      {/* <BootStrapCom /> */}
      {/* <UpdateCom /> */}
      {/* <UpdateTest /> */}
      {/* <ApiCom /> */}
      {/* <LifeCycleMethod /> */}

      {/* <LocalstorageCom /> */}
      {/* <DeleteCom /> */}
      {/* <Router /> */}
      {/* <StopWatch /> */}
      {/* <WomenCom /> */}
      {/* <Home /> */}
      {/* <App2 /> */}
      {/* <UseReducerCom /> */}
      {/* <LoginForm /> */}
      {/* <ContextCom /> */}
      {/* {<RegForm />} */}
      {/* <RegForm1 /> */}
      {/* <AppToolkit /> */}
    </>
  );


}

export default App;
