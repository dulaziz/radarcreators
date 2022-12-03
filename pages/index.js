import Head from 'next/head'

//components
import Layout from '../components/layout'
import Table from '../components/table'

export default function Home () {
  return (
    <>
      <Layout title='Dashboard'>
        <h1 className="text-xl font-semibold text-slate-500 mb-8">
          Dashboard
        </h1>
          <Table />
      </Layout>
    </>
  )
}
