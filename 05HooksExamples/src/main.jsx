import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NewApp from './NewApp.jsx'
import UseRefExample from './UseRefExample.jsx'
import UseReducerEx from './UseReducerEx.jsx'
import UseCallBack from './UseCallBack.jsx'
import UseLayoutEffectExamples from './useLayoutEffectExamples.jsx'
import CustomHook from './Components/CustomHook.jsx'

createRoot(document.getElementById('root')).render(

    <CustomHook />

)
