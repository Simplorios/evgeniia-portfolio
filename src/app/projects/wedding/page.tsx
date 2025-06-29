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
        task="Task: to create a unique visual identity for each couple by considering their wishes and references — crafting personalized designs for an unforgettable celebration"
        description="Wedding polygraphy style development in collaboration with decorators and wedding agencies"
      />

      <section className="mt-25 mx-auto container px-4 md:px-0">
        <h2 className="text-[2rem]/[1] md:text-[3rem]/[1]">Wedding #1</h2>
        <div className="mt-10 hidden md:grid md:grid-flow-col md:auto-cols-max md:gap-10">
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-1-1.png`}
              width={539}
              height={810}
              alt="Wedding 1 1"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-1-4.png`}
              width={539}
              height={646}
              alt="Wedding 1 4"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-1-2.png`}
              width={580}
              height={431}
              alt="Wedding 1 2"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-1-3.png`}
              width={580}
              height={588}
              alt="Wedding 1 3"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-1-5.png`}
              width={580}
              height={397}
              alt="Wedding 1 5"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <div className="mt-10 md:hidden grid grid-cols-2 gap-0">
        <div className="flex flex-col justify-between h-full pr-1">
          <Image
            src={`${BASE_PATH}wedding-1-1.png`}
            width={539}
            height={810}
            alt="Wedding 1 1"
            className="w-full h-auto object-cover mb-6"
          />
          <Image
            src={`${BASE_PATH}wedding-1-4.png`}
            width={539}
            height={646}
            alt="Wedding 1 4"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col justify-between h-full pl-1">
          <Image
            src={`${BASE_PATH}wedding-1-2.png`}
            width={580}
            height={431}
            alt="Wedding 1 2"
            className="w-full h-auto object-cover mb-6"
          />
          <Image
            src={`${BASE_PATH}wedding-1-3.png`}
            width={580}
            height={588}
            alt="Wedding 1 3"
            className="w-full h-auto object-cover mb-6"
          />
          <Image
            src={`${BASE_PATH}wedding-1-5.png`}
            width={580}
            height={397}
            alt="Wedding 1 5"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <section className="mt-25 mx-auto container px-4 md:px-0">
        <h2 className="text-[2rem]/[1] md:text-[3rem]/[1]">Wedding #2</h2>
        <div className="mt-10 hidden md:grid md:grid-flow-col md:auto-cols-max md:gap-10">
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-2-1.png`}
              width={540}
              height={674}
              alt="Wedding 2 1"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-2-3.png`}
              width={540}
              height={674}
              alt="Wedding 2 3"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-2-2.png`}
              width={580}
              height={758}
              alt="Wedding 2 2"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-2-4.png`}
              width={580}
              height={590}
              alt="Wedding 2 4"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <Image
          src={`${BASE_PATH}wedding-2-5.png`}
          width={1160}
          height={773}
          alt="Wedding 2 5"
          className="mt-10 w-full h-auto hidden md:block"
        />
      </section>
      <div className="mt-10 md:hidden grid grid-cols-2 gap-0">
        <div className="flex flex-col justify-between h-full pr-1">
          <Image
            src={`${BASE_PATH}wedding-2-1.png`}
            width={540}
            height={674}
            alt="Wedding 2 1"
            className="w-full h-auto object-cover mb-6"
          />
          <Image
            src={`${BASE_PATH}wedding-2-3.png`}
            width={540}
            height={674}
            alt="Wedding 2 3"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col justify-between h-full pl-1">
          <Image
            src={`${BASE_PATH}wedding-2-2.png`}
            width={580}
            height={758}
            alt="Wedding 2 2"
            className="w-full h-auto object-cover mb-6"
          />
          <Image
            src={`${BASE_PATH}wedding-2-4.png`}
            width={580}
            height={590}
            alt="Wedding 2 4"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="mt-6 md:hidden">
        <Image
          src={`${BASE_PATH}wedding-2-5.png`}
          width={1160}
          height={773}
          alt="Wedding 2 5"
          className="w-full h-auto"
        />
      </div>

      <section className="mt-25 mx-auto container px-4 md:px-0">
        <h2 className="text-[2rem]/[1] md:text-[3rem]/[1]">Wedding #3</h2>
        <div className="mt-10 hidden md:grid md:grid-flow-col md:auto-cols-max md:gap-10">
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-3-1.png`}
              width={540}
              height={674}
              alt="Wedding 3 1"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-3-2.png`}
              width={540}
              height={1168}
              alt="Wedding 3 2"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-3-3.png`}
              width={580}
              height={317}
              alt="Wedding 3 3"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-3-4.png`}
              width={580}
              height={717}
              alt="Wedding 3 4"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-3-5.png`}
              width={580}
              height={768}
              alt="Wedding 3 5"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <div className="mt-10 md:hidden grid grid-cols-2 gap-0">
        <div className="flex flex-col justify-between h-full pr-1">
          <Image
            src={`${BASE_PATH}wedding-3-1.png`}
            width={540}
            height={674}
            alt="Wedding 3 1"
            className="w-full h-auto object-cover mb-6"
          />
          <Image
            src={`${BASE_PATH}wedding-3-2.png`}
            width={540}
            height={1168}
            alt="Wedding 3 2"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col justify-between h-full pl-1">
          <Image
            src={`${BASE_PATH}wedding-3-3.png`}
            width={580}
            height={317}
            alt="Wedding 3 3"
            className="w-full h-auto object-cover mb-6"
          />
          <Image
            src={`${BASE_PATH}wedding-3-4.png`}
            width={580}
            height={717}
            alt="Wedding 3 4"
            className="w-full h-auto object-cover mb-6"
          />
          <Image
            src={`${BASE_PATH}wedding-3-5.png`}
            width={580}
            height={768}
            alt="Wedding 3 5"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <section className="mt-25 mx-auto container px-4 md:px-0">
        <h2 className="text-[2rem]/[1] md:text-[3rem]/[1]">Wedding #4</h2>
        <div className="mt-10 hidden md:grid md:grid-flow-col md:auto-cols-max md:gap-10">
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-4-1.png`}
              width={540}
              height={675}
              alt="Wedding 4 1"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-4-2.png`}
              width={540}
              height={547}
              alt="Wedding 4 2"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-4-3.png`}
              width={540}
              height={531}
              alt="Wedding 4 3"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-4-4.png`}
              width={581}
              height={813}
              alt="Wedding 4 4"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-4-5.png`}
              width={582}
              height={980}
              alt="Wedding 4 5"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <div className="mt-10 mb-35 md:hidden grid grid-cols-2 gap-0">
        <div className="flex flex-col justify-between h-full pr-1">
          <Image
            src={`${BASE_PATH}wedding-4-1.png`}
            width={540}
            height={675}
            alt="Wedding 4 1"
            className="w-full h-auto object-cover mb-6"
          />
          <Image
            src={`${BASE_PATH}wedding-4-2.png`}
            width={540}
            height={547}
            alt="Wedding 4 2"
            className="w-full h-auto object-cover mb-6"
          />
          <Image
            src={`${BASE_PATH}wedding-4-3.png`}
            width={540}
            height={531}
            alt="Wedding 4 3"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col justify-between h-full pl-1">
          <Image
            src={`${BASE_PATH}wedding-4-4.png`}
            width={581}
            height={813}
            alt="Wedding 4 4"
            className="w-full h-auto object-cover mb-6"
          />
          <Image
            src={`${BASE_PATH}wedding-4-5.png`}
            width={582}
            height={980}
            alt="Wedding 4 5"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <section className="mt-25 mx-auto container px-4 md:px-0">
        <h2 className="text-[2rem]/[1] md:text-[3rem]/[1]">Wedding #5</h2>
        <div className="mt-10 hidden md:grid md:grid-flow-col md:auto-cols-max md:gap-10">
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-5-1.png`}
              width={540}
              height={675}
              alt="Wedding 5 1"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-5-3.png`}
              width={540}
              height={531}
              alt="Wedding 5 3"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-5-5.png`}
              width={581}
              height={813}
              alt="Wedding 5 5"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-5-7.png`}
              width={582}
              height={980}
              alt="Wedding 5 7"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-flow-row gap-10">
            <Image
              src={`${BASE_PATH}wedding-5-2.png`}
              width={540}
              height={547}
              alt="Wedding 5 2"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-5-4.png`}
              width={540}
              height={531}
              alt="Wedding 5 4"
              className="w-full h-auto object-cover"
            />
            <Image
              src={`${BASE_PATH}wedding-5-6.png`}
              width={582}
              height={980}
              alt="Wedding 5 6"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <div className="mt-10 mb-35 md:hidden grid grid-cols-2 gap-0">
        <div className="flex flex-col justify-between h-full pr-1">
          <Image
            src={`${BASE_PATH}wedding-5-1.png`}
            width={540}
            height={675}
            alt="Wedding 5 1"
            className="w-full h-auto object-cover mb-2"
          />
          <Image
            src={`${BASE_PATH}wedding-5-3.png`}
            width={540}
            height={531}
            alt="Wedding 5 3"
            className="w-full h-auto object-cover mb-2"
          />
          <Image
            src={`${BASE_PATH}wedding-5-5.png`}
            width={581}
            height={813}
            alt="Wedding 5 5"
            className="w-full h-auto object-cover mb-2"
          />
          <Image
            src={`${BASE_PATH}wedding-5-7.png`}
            width={582}
            height={980}
            alt="Wedding 5 7"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col justify-between h-full pl-1">
          <Image
            src={`${BASE_PATH}wedding-5-2.png`}
            width={540}
            height={547}
            alt="Wedding 5 2"
            className="w-full h-auto object-cover mb-2"
          />
          <Image
            src={`${BASE_PATH}wedding-5-4.png`}
            width={540}
            height={531}
            alt="Wedding 5 4"
            className="w-full h-auto object-cover mb-2"
          />
          <Image
            src={`${BASE_PATH}wedding-5-6.png`}
            width={582}
            height={980}
            alt="Wedding 5 6"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </>
  )
}
