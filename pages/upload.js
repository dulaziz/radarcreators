import React from 'react'

import Layout from '../components/layout'

//icon
import {FiSearch} from 'react-icons/fi'

export default function Upload() {
    const Uploader = [
        {
          id: "1",
          date: "01/01/1961",
          media: "Radar Bogor",
          video: "The Sliding Mr. Bones (Next Stop, Pottersville)",
          creators: "Malcolm Lockyer",
        },
        {
          id: "2",
          date: "01/01/1961",
          media: "Radar Bogor",
          video: "The Sliding Mr. Bones (Next Stop, Pottersville)",
          creators: "Malcolm Lockyer, John Doe",
        },
      ];

  return (
    <Layout title='Upload'>
        <h1 className="text-xl font-semibold text-slate-500 mb-8">
          Upload
        </h1>

        <div className='mb-10 bg-white p-3 rounded-md shadow-md shadow-slate-200/40'>
        <h2 className='text-md text-slate-500 mb-1'>Input File</h2>
        <hr className='mb-6'/>
          <div className='grid grid-cols-3 gap-3 mb-6'>
            <input type='date' className='h-10 border-slate-200 border rounded-md focus:outline-none focus:border-sky-500 py-2 px-4' />
            <select name="" id="" className='h-10 border-slate-200 border rounded-md focus:outline-none focus:border-sky-500 py-2 px-4'>
              <option value="">Radar Bogor</option>
              <option value="">Radar Cianjur</option>
              <option value="">Radar Depok</option>
              <option value="">Radar Sukabumi</option>
            </select>
            <text type='text' className='h-10 border-slate-200 border rounded-md focus:outline-none focus:border-sky-500 py-2 px-4' placeholder='Creators...'/>
            <div className='col-span-2'>
            <input type="file" className="block w-full text-slate-500 border border-slate-200 bg-white rounded-md
            file:mr-4 file:py-2 file:px-4 file:cursor-pointer file:rounded-l-md file:border-0 file:text-sm file:font-semibold file:h-full file:bg-slate-800 file:text-white hover:file:bg-slate-700
            "/>
            </div>
            <button className="px-6 text-sm font-semibold rounded bg-green-600 text-white hover:bg-green-500 transition" type="submit">
              Submit
            </button>
          </div>
          <hr className='mb-3'/>
          <div className='flex justify-end'>
          <button className="h-10 px-6 text-sm font-semibold rounded bg-green-600 text-white hover:bg-green-500 transition" type="submit">
              Submit
            </button>
          </div>
        </div>

        <div className='flex items-center justify-between mb-3'>
          <h2 className='text-md text-slate-500'>Data Upload</h2>
          <form>
              <div className='relative'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <FiSearch />
                  </div> 
              <input type='text' className='p-4 h-10 pl-10 pr-20 border-slate-200 border rounded focus:outline-none focus:border-sky-500 placeholder-slate-400 py-2' placeholder='Search...' />
              </div>
          </form>
        </div>

        <div className=''>
            <table className="overflow-x-auto w-full text-left text-base">
                <thead className='border-y border-dark-purple'>
                    <tr>
                        <th className='py-3'>Date</th>
                        <th className='py-3'>Media</th>
                        <th className='py-3'>Video</th>
                        <th className='py-3'>Creators</th>
                        <th className='py-3'>Action</th>
                    </tr>
                </thead>
                <tbody className='font-normal'>
                {Uploader.map((upload, id) => (
                <tr className='border-b' key={id}>
                    <td className='py-1'>{upload.date}</td>
                    <td className='py-3'>{upload.media}</td>
                    <td className='py-1'>{upload.video}</td>
                    <td className='py-1'>{upload.creators}</td>
                    <td className='py-1'>
                    <button className='text-dark-purple font-semibold hover:underline'>Edit</button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    </Layout>
  )
}
