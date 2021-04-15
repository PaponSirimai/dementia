import React from 'react'
import { Facebook, Line, Twitter } from './Icons'

const Share = (): JSX.Element => {
  return (
    <>
      <div className="fixed h-full w-full bg-[#4842e0] overflow-hidden">
        <section className="flex flex-col justify-between h-full py-12">
          <h1 className="text-2xl font-medium text-center text-[#a7a5f0]">
            ลิงก์ข้อมูล
            <br /> ที่เป็นประโยชน์เกี่ยวกับ
            <br /> ภาวะสมองเสื่อม
          </h1>

          <div className="flex flex-col self-center w-full px-8 pt-4 space-y-4 md:max-w-1/2">
            <button
              type="button"
              className="inline-flex justify-center items-center px-6 py-3 text-lg font-medium text-primary bg-[#a7a5f0] border border-transparent rounded-md shadow-lg hover:bg-gray-100 focus:outline-none"
            >
              ‘ยากันลืม’ คู่มือเตือนความจำ
            </button>
            <button
              type="button"
              className="inline-flex justify-center items-center px-6 py-3 text-lg font-medium text-primary bg-[#a7a5f0] border border-transparent rounded-md shadow-lg hover:bg-gray-100 focus:outline-none"
            >
              สายด่วนดูแล ผู้ป่วยสมองเสื่อม
            </button>
            <button
              type="button"
              className="inline-flex justify-center items-center px-6 py-3 text-lg font-medium text-primary bg-[#a7a5f0] border border-transparent rounded-md shadow-lg hover:bg-gray-100 focus:outline-none"
            >
              ดาวน์โหลดแบบคัดกรอง
            </button>
          </div>

          <div className="pt-4">
            <h2 className="text-2xl font-medium text-center text-[#e7e7f9]">แชร์สิ่งนี้ให้คนที่คุณรัก</h2>
            <div className="flex justify-center pt-6 space-x-4 text-[#a7a5f0]">
              <Line className="flex-shrink-0 w-12 h-12 cursor-pointer md:w-24 md:h-24 hover:text-white" />
              <Facebook className="flex-shrink-0 w-12 h-12 cursor-pointer md:w-24 md:h-24 hover:text-white" />
              <Twitter className="flex-shrink-0 w-12 h-12 cursor-pointer md:w-24 md:h-24 hover:text-white" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Share
