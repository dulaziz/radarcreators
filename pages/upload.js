import React from 'react'

import Layout from '../components/layout'

//icon
import {FiSearch} from 'react-icons/fi'

export default function upload() {
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
    <Layout>
        <h1 className="text-xl font-semibold text-slate-500 mb-8">
          Upload
        </h1>

        <div className='flex justify-between mb-9'>
            <div>
              <form>
                <div className='flex space-x-3'>
                  <input type='date' className='h-10 border-slate-200 border rounded-md focus:outline-none focus:border-sky-500 py-2 px-4' />
                  <select name="" id="" className='h-10 border-slate-200 border rounded-md focus:outline-none focus:border-sky-500 py-2 px-4'>
                    <option value="">Radar Bogor</option>
                    <option value="">Radar Cianjur</option>
                    <option value="">Radar Depok</option>
                    <option value="">Radar Sukabumi</option>
                  </select>
                    <input type="file" className="block text-slate-500 border border-slate-200 bg-white rounded-md
                    file:mr-4 file:py-2 file:px-4 file:cursor-pointer file:rounded-l-md file:border-0 file:text-sm file:font-semibold file:h-full file:bg-slate-800 file:text-white hover:file:bg-slate-700
                    "/>
                    <input type='text' className='h-10 border-slate-200 border rounded-md focus:outline-none focus:border-sky-500 py-2 px-4' />
                  <button className="h-10 px-6 text-sm font-semibold rounded bg-green-600 text-white hover:bg-green-500 transition" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

            <form className='mb-3'>
                <div className='relative'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <FiSearch />
                    </div> 
                <input type='text' className='p-4 h-10 pl-10 pr-20 border-slate-200 border rounded focus:outline-none focus:border-sky-500 placeholder-slate-400 py-2' placeholder='Search...' />
                <button className='text-sm absolute inset-y-0 left-64 px-3 rounded-r bg-slate-800 hover:bg-slate-700 text-white font-semibold'>Search</button>
                </div>
            </form>

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
