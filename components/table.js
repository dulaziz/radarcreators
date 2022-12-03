import React, { useState } from 'react'

//icon
import {FiSearch} from 'react-icons/fi'


export default function Table() {
  const Creators = [
      {
        id: "1",
        date: "01/01/1961",
        media: "Radar Bogor",
        video: "The Sliding Mr. Bones (Next Stop, Pottersville)",
        creators: "Malcolm Lockyer",
        views: "1961k",
        angegment: "1961k",
      },
      {
        id: "2",
        date: "01/01/1961",
        media: "Radar Cianjur",
        video: "The Sliding Mr. Bones (Next Stop, Pottersville)",
        creators: "Malcolm Lockyer",
        views: "1961k",
        angegment: "1961k",
      },
    ];

  const [value, setValue] = useState('');
  const [dataSource, setDataSource] = useState(Creators);
  const [tableFilter, setTableFilter] = useState([]);

  const filterData = (e) => {
    if(e.target.value != ""){
      setValue(e.target.value);
      const filterTable = dataSource.filter(o=>Object.keys(o).some(k=>String(o[k])
      .toLowerCase().includes(e.target.value.toLowerCase())
      ));
      setTableFilter([...filterTable])
    } else{
      setValue(e.target.value);
      setDataSource([...dataSource])
    }
  }

  return (
    <div className='my-8'>
      <div className='flex justify-between mb-3'>
        <div>
          <form>
            <div className='flex space-x-3'>
              <input type='date' className='h-10 border-slate-200 border rounded-md focus:outline-none focus:border-sky-500 py-2 px-4' />
              <select name="" id="" className='h-10 border-slate-200 border rounded focus:outline-none focus:border-sky-500 py-2 px-4'>
                <option value="">Radar Bogor</option>
                <option value="">Radar Cianjur</option>
                <option value="">Radar Depok</option>
                <option value="">Radar Sukabumi</option>
              </select>
              <button class="h-10 px-6 font-semibold rounded bg-slate-800 text-white hover:bg-slate-700 transition" type="submit">
                Filter
              </button>
            </div>
          </form>
        </div>
        <div>
        <form>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <FiSearch />
            </div>
            <input type='text' value={value} onChange={filterData} className='p-4 h-10 pl-10 border-slate-200 border rounded focus:outline-none focus:border-sky-500 placeholder-slate-400 py-2' placeholder='Search...' />
          </div>
        </form>
        </div>
      </div>

      <table className="overflow-x-auto w-full text-left text-base">
        <thead className='border-y border-dark-purple'>
          <tr>
            <th className='py-3'>Date</th>
            <th className='py-3'>Media</th>
            <th className='py-3'>Video</th>
            <th className='py-3'>Creators</th>
            <th className='py-3'>Views</th>
            <th className='py-3'>Angegment</th>
            <th className='py-3'>Action</th>
          </tr>
        </thead>
        <tbody className='font-normal'>
          {value.length > 0 ? tableFilter.map((data, id) => {
              return (
                <tr className='border-b' key={id}>
                  <td className='py-1'>{data.date}</td>
                  <td className='py-3'>{data.media}</td>
                  <td className='py-1'>{data.video}</td>
                  <td className='py-1'>{data.creators}</td>
                  <td className='py-1'>{data.views}</td>
                  <td className='py-1'>{data.angegment}</td>
                  <td className='py-1'>
                    <button className='text-dark-purple font-semibold hover:underline'>Edit</button>
                  </td>
                </tr>
              )
            }):
            dataSource.map((data, id) => {
              return (
                <tr className='border-b' key={id}>
                  <td className='py-1'>{data.date}</td>
                  <td className='py-3'>{data.media}</td>
                  <td className='py-1'>{data.video}</td>
                  <td className='py-1'>{data.creators}</td>
                  <td className='py-1'>{data.views}</td>
                  <td className='py-1'>{data.angegment}</td>
                  <td className='py-1'>
                    <button className='text-dark-purple font-semibold hover:underline'>Edit</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
  )
}
