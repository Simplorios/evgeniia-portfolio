import React from 'react'

import Image from 'next/image'

import { ProjectHead } from '~/components/project-head'

const BASE_PATH = '/evgeniia-portfolio/wedding/'

export default function Wedding() {
  return (
    <>
      <ProjectHead
        title={
          <>
            Wedding
            <br />
            polygrathy
          </>
        }
        imgSrc={`${BASE_PATH}head.png`}
        imgAlt="Head"
        task="Task: to create an Instagram page based on the main brand book, while expressing the authenticity and spirit of the city of Tbilisi"
        description="Development of Instagram feed for launching Uber Black in Tbilisi, as part of work at “Social Animals” agency team"
      />

      <section className="mt-25 mx-auto container">
        <h2 className=" text-[3rem]/[1]">Wedding #1</h2>
        <div className="mt-10 grid grid-flow-col auto-cols-max gap-10">
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-1-1.png`}
              width={539}
              height={810}
              alt="Wedding 1 1"
            />
            <Image
              src={`${BASE_PATH}wedding-1-4.png`}
              width={539}
              height={646}
              alt="Wedding 1 4"
            />
          </div>
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-1-2.png`}
              width={580}
              height={431}
              alt="Wedding 1 2"
            />
            <Image
              src={`${BASE_PATH}wedding-1-3.png`}
              width={580}
              height={588}
              alt="Wedding 1 3"
            />
            <Image
              src={`${BASE_PATH}wedding-1-5.png`}
              width={580}
              height={397}
              alt="Wedding 1 5"
            />
          </div>
        </div>
      </section>

      <section className="mt-25 mx-auto container">
        <h2 className=" text-[3rem]/[1]">Wedding #2</h2>
        <div className="mt-10 grid grid-flow-col auto-cols-max gap-10">
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-2-1.png`}
              width={540}
              height={674}
              alt="Wedding 2 1"
            />
            <Image
              src={`${BASE_PATH}wedding-2-3.png`}
              width={540}
              height={674}
              alt="Wedding 2 3"
            />
          </div>
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-2-2.png`}
              width={580}
              height={758}
              alt="Wedding 2 2"
            />
            <Image
              src={`${BASE_PATH}wedding-2-4.png`}
              width={580}
              height={590}
              alt="Wedding 2 4"
            />
          </div>
        </div>
        <Image
          src={`${BASE_PATH}wedding-2-5.png`}
          width={1160}
          height={773}
          alt="Wedding 2 5"
          className="mt-10"
        />
      </section>

      <section className="mt-25 mx-auto container">
        <h2 className=" text-[3rem]/[1]">Wedding #3</h2>
        <div className="mt-10 grid grid-flow-col auto-cols-max gap-10">
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-3-1.png`}
              width={540}
              height={674}
              alt="Wedding 3 1"
            />
            <Image
              src={`${BASE_PATH}wedding-3-2.png`}
              width={540}
              height={1168}
              alt="Wedding 3 2"
            />
          </div>
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-3-3.png`}
              width={580}
              height={317}
              alt="Wedding 3 3"
            />
            <Image
              src={`${BASE_PATH}wedding-3-4.png`}
              width={580}
              height={717}
              alt="Wedding 3 4"
            />
            <Image
              src={`${BASE_PATH}wedding-3-5.png`}
              width={580}
              height={768}
              alt="Wedding 3 5"
            />
          </div>
        </div>
      </section>

      <section className="mt-25 mx-auto pb-35 container">
        <h2 className=" text-[3rem]/[1]">Wedding #4</h2>
        <div className="mt-10 grid grid-flow-col auto-cols-max gap-10">
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-4-1.png`}
              width={540}
              height={675}
              alt="Wedding 4 1"
            />
            <Image
              src={`${BASE_PATH}wedding-4-2.png`}
              width={540}
              height={547}
              alt="Wedding 4 2"
            />
            <Image
              src={`${BASE_PATH}wedding-4-3.png`}
              width={540}
              height={531}
              alt="Wedding 4 3"
            />
          </div>
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-4-4.png`}
              width={581}
              height={813}
              alt="Wedding 4 4"
            />
            <Image
              src={`${BASE_PATH}wedding-4-5.png`}
              width={582}
              height={980}
              alt="Wedding 4 5"
            />
          </div>
        </div>
      </section>
    </>
  )
}
