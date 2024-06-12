import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import SoilMoistureChart from './soilMoistureChart';
function SoilMoisture2024() {
  const [Id,setId] = useState(null)
  const [Data,setData] = useState(null);
  const fetchData = async (id,year)=>{
      try{
          const response = await axios.get(`http://localhost:5000/data-collection/soil-moisture-${year}/spectrum/${id}`);
          setData(response.data);
          setId(id);
          // console.log(response.data);
      } 
      catch(error){
          console.log(error);
      }
  }
  return (
    <>
            <div className="text-center my-2">
              <button className='my-button mx-2 disable-link' id="spectrum-1" >Block-1</button>
              <button className='my-button mx-2 disable-link' id="spectrum-2" >Block-2</button>
              <button className='my-button mx-2 disable-link' id="spectrum-3" >Block-3</button>
              <button className='my-button mx-2' id="spectrum-4" onClick={()=>fetchData(4,2024)}>Block-4</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2 disable-link' id="spectrum-5">Block-5</button>
              <button className='my-button mx-2' id="spectrum-6" onClick={()=>fetchData(6,2024)} >Block-6</button>
              <button className='my-button mx-2' id="spectrum-7" onClick={()=>fetchData(7,2024)}>Block-7</button>
              <button className='my-button mx-2 disable-link' id="spectrum-8">Block-8</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2' id="spectrum-9" onClick={()=>fetchData(9,2024)}>Block-9</button>
              <button className='my-button mx-2' id="spectrum-10" onClick={()=>fetchData(10,2024)}>Block-10</button>
              <button className='my-button mx-2' id="spectrum-11" onClick={()=>fetchData(11,2024)}>Block-11</button>
              <button className='my-button mx-2' id="spectrum-12" onClick={()=>fetchData(12,2024)}>Block-12</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2' id="spectrum-13" onClick={()=>fetchData(13,2024)}>Block-13</button>
              <button className='my-button mx-2' id="spectrum-14" onClick={()=>fetchData(14,2024)}>Block-14</button>
              <button className='my-button mx-2' id="spectrum-15" onClick={()=>fetchData(15,2024)}>Block-15</button>
              <button className='my-button mx-2 disable-link' id="spectrum-16" >Block-16</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2 disable-link' id="spectrum-17" >Block-17</button>
              <button className='my-button mx-2 disable-link' id="spectrum-18" >Block-18</button>
              <button className='my-button mx-2 disable-link' id="spectrum-19" >Block-19</button>
              <button className='my-button mx-2 disable-link' id="spectrum-20" >Block-20</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2' id="spectrum-21" onClick={()=>fetchData(21,2024)}>Block-21</button>
              <button className='my-button mx-2' id="spectrum-22" onClick={()=>fetchData(22,2024)}>Block-22</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2 disable-link' id="spectrum-23" >Block-23</button>
              <button className='my-button mx-2' id="spectrum-24" onClick={()=>fetchData(24,2024)}>Block-24</button>
            </div>
            <SoilMoistureChart data={Data} id={Id}/>      
    </>
  );
}
export default SoilMoisture2024;