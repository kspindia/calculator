import React from 'react'
import Button from './Button'
import OutputBox from './OutputBox'
import {useDispatch,useSelector} from 'react-redux'
import {loadAns, loadBackspace, loadButtons, loadClear} from './redux/actions'
import { CALCULATOR_KEY } from './redux/reducer'



function Calculator() {
  const dispatch = useDispatch()

  const viewCalculator = useSelector((state)=>{
    return state[CALCULATOR_KEY]
  })

  return (
    
    <div className='cal-box'>
      {/* {JSON.stringify(viewCalculator)} */}
      <h1>React Calculator</h1>
      <OutputBox value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans}/>
      <div className="button-row">
      <Button onClick={()=>dispatch(loadBackspace())} label={'C'}/>
      <Button onClick={()=>dispatch(loadClear())} label={'AC'}/>
      <Button onClick={()=>dispatch(loadButtons('.'))} label={'.'}/>
      <Button onClick={()=>dispatch(loadButtons('/'))} label={'/'}/>
    </div>
    <div className="button-row">
      <Button onClick={()=>dispatch(loadButtons(7))} label={'7'}/>
      <Button onClick={()=>dispatch(loadButtons(8))} label={'8'}/>
      <Button onClick={()=>dispatch(loadButtons(9))} label={'9'}/>
      <Button onClick={()=>dispatch(loadButtons('*'))} label={'*'}/>
    </div>
    <div className="button-row">
      <Button onClick={()=>dispatch(loadButtons(4))} label={'4'}/>
      <Button onClick={()=>dispatch(loadButtons(5))} label={'5'}/>
      <Button onClick={()=>dispatch(loadButtons(6))} label={'6'}/>
      <Button onClick={()=>dispatch(loadButtons('-'))} label={'-'}/>
    </div>
    <div className="button-row">
      <Button onClick={()=>dispatch(loadButtons(1))} label={'1'}/>
      <Button onClick={()=>dispatch(loadButtons(2))} label={'2'}/>
      <Button onClick={()=>dispatch(loadButtons(3))} label={'3'}/>
      <Button onClick={()=>dispatch(loadButtons('+'))} label={'+'}/>
    </div>
    <div className="button-row">
      <Button onClick={()=>dispatch(loadButtons(0))} label={'0'}/>
      <Button onClick={()=>dispatch(loadAns())} label={'='}/>
    </div>
    </div>
  )
}

export default Calculator
