import Head from 'next/head'

//components
import Layout from '../components/layout'
import Table from '../components/table'

//icon
import {FiSearch} from 'react-icons/fi'


export default function Home () {
  return (
    <>
      <Layout title='Dashboard'>
        <h1 className="text-xl font-semibold text-slate-500 mb-8">
          Dashboard
        </h1>

        <div>
          <div className='flex justify-between'>
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
                <input type='text' className='p-4 h-10 pl-10 pr-20 border-slate-200 border rounded focus:outline-none focus:border-sky-500 placeholder-slate-400 py-2' placeholder='Search...' />
                <button className='absolute inset-y-0 right-0 px-3 rounded-r bg-slate-800 hover:bg-slate-700 text-white font-semibold'>Search</button>
              </div>
            </form>
            </div>
          </div>

          <Table />
          
        </div>
      </Layout>
    </>
  )
}
