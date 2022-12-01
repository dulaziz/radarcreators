import React from 'react'

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

export default function table() {
  return (
    <div className='my-8'>
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
          {Creators.map((data, id) => (
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
          ))}
        </tbody>
      </table>
      </div>
  )
}
