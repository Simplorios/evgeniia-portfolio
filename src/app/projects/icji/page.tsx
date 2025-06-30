import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import { ProjectHead } from '~/components/project-head'
import { VideoLoop } from '~/components/video-loop'

const BASE_PATH = '/evgeniia-portfolio/icji/'

const Section: React.FC<React.ComponentProps<'section'>> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={clsx(
        'container mx-auto py-20 border-b-4 border-primary',
        className,
      )}
      {...props}
    />
  )
}

export default function ICJI() {
  return (
    <>
      <ProjectHead
        title={
          <>
            Identity for The International
            <br />
            Center for Joint Initiatives
          </>
        }
        description="ICJI is a platform fostering economic and business collaboration between Russia and its global partners"
        task="Task: to develop a visual identity for the partnership initiative of ICJI with China, creating a holistic and effective brand image for the project"
        imgSrc={`${BASE_PATH}head.png`}
        imgAlt="ICJI"
      />
      <section className="container mx-auto mt-25">
        <h2 className="text-5xl/[1]">Result:</h2>

        <div className="mt-10 mx-auto aspect-[1.16] max-h-[90dvh] max-h-[90dvh]">
          <VideoLoop src={`${BASE_PATH}video.mp4`} className="w-full h-full" />
        </div>
      </section>
      <Section className="mt-5 px-4 md:px-0">
        <h2 className="text-[2rem]/[1] md:text-5xl/[1]">Inspiration</h2>

        {/* Mobile Layout */}
        <div className="mt-10 md:hidden">
          <div className="text-[1.25rem]/[1.5] space-y-2 mb-10">
            <p>→ chinese lantern</p>
            <p>→ chinese teahouse</p>
            <p>→ bamboo</p>
          </div>

          <div className="flex">
            <div className="flex flex-col space-y-6 flex-1">
              <div className="flex items-center">
                <Image
                  src={`${BASE_PATH}result/1.png`}
                  alt="Inspiration 1"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <Image
                  src={`${BASE_PATH}arrow.svg`}
                  alt="Arrow"
                  width={40}
                  height={17}
                  className="ml-4"
                />
              </div>
              <div className="flex items-center">
                <Image
                  src={`${BASE_PATH}result/2.png`}
                  alt="Inspiration 2"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <Image
                  src={`${BASE_PATH}arrow.svg`}
                  alt="Arrow"
                  width={40}
                  height={17}
                  className="ml-4"
                />
              </div>
              <div className="flex items-center">
                <Image
                  src={`${BASE_PATH}result/3.png`}
                  alt="Inspiration 3"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <Image
                  src={`${BASE_PATH}arrow.svg`}
                  alt="Arrow"
                  width={40}
                  height={17}
                  className="ml-4"
                />
              </div>
            </div>

            <div className="flex items-center justify-center flex-1">
              <Image
                src={`${BASE_PATH}result/result.png`}
                alt="Inspiration result"
                width={120}
                height={228}
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-x-12 mt-10">
          <div className="text-[1.75rem]/[1] flex flex-col justify-center">
            <p>→ chinese lantern</p>
            <p>→ chinese teahouse</p>
            <p>→ bamboo</p>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-center justify-center">
              <Image
                src={`${BASE_PATH}result/1.png`}
                alt="Inspiration 1"
                width={120}
                height={120}
                className="rounded-full"
              />
              <Image
                src={`${BASE_PATH}arrow.svg`}
                alt="Arrow"
                width={56.85}
                height={24.47}
                className="ml-6"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={`${BASE_PATH}result/2.png`}
                alt="Inspiration 2"
                width={120}
                height={120}
                className="rounded-full"
              />
              <Image
                src={`${BASE_PATH}arrow.svg`}
                alt="Arrow"
                width={56.85}
                height={24.47}
                className="ml-6"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={`${BASE_PATH}result/3.png`}
                alt="Inspiration 3"
                width={120}
                height={120}
                className="rounded-full"
              />
              <Image
                src={`${BASE_PATH}arrow.svg`}
                alt="Arrow"
                width={56.85}
                height={24.47}
                className="ml-6"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={`${BASE_PATH}result/result.png`}
              alt="Inspiration result"
              width={280}
              height={531}
            />
          </div>
        </div>
      </Section>

      <Section className="px-4 md:px-0">
        <h2 className="text-[2rem]/[1] md:text-5xl/[1]">Transformation</h2>

        {/* Mobile Layout */}
        <div className="mt-10 md:hidden">
          <p className="text-[1rem]/[1.4] mb-8">
            → The composition is built on a grid enclosed in a circle, which
            further develops into the famous Chinese lantern.
            <br />
            <br />
            Inside the circle is a geometric composition of Chinese symbols such
            as the tea house and bamboo
          </p>

          <div className="flex items-center justify-center gap-x-4">
            <Image
              src={`${BASE_PATH}transform/1.png`}
              alt="Transform 1"
              width={80}
              height={80}
            />
            <Image
              src={`${BASE_PATH}arrow.svg`}
              alt="Arrow"
              width={30}
              height={13}
            />
            <Image
              src={`${BASE_PATH}transform/2.png`}
              alt="Transform 2"
              width={80}
              height={80}
            />
            <Image
              src={`${BASE_PATH}arrow.svg`}
              alt="Arrow"
              width={30}
              height={13}
            />
            <Image
              src={`${BASE_PATH}result/result.png`}
              alt="Transform result"
              width={80}
              height={152}
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="mt-20 grid grid-cols-2 gap-x-12">
            <p className="text-[1.75rem]/[1]">
              → The composition is built on a grid enclosed in a circle, which
              further develops into the famous Chinese lantern.
              <br />
              <br />
              Inside the circle is a geometric composition of Chinese symbols
              such as the tea house and bamboo
            </p>
            <div className="grid grid-flow-col items-center gap-x-6">
              <Image
                src={`${BASE_PATH}transform/1.png`}
                alt="Transform 1"
                width={157}
                height={157}
              />
              <Image
                src={`${BASE_PATH}arrow.svg`}
                alt="Arrow"
                width={49.5}
                height={21.3}
              />

              <Image
                src={`${BASE_PATH}transform/2.png`}
                alt="Transform 2"
                width={157}
                height={157}
              />
              <Image
                src={`${BASE_PATH}arrow.svg`}
                alt="Arrow"
                width={49.5}
                height={21.3}
              />

              <Image
                src={`${BASE_PATH}result/result.png`}
                alt="Transform result"
                width={157}
                height={298}
              />
            </div>
          </div>
        </div>
      </Section>
      <Section className="px-4 md:px-0">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <h2 className="text-[2rem]/[1]">Logo</h2>
          <div className="mt-10 flex justify-center">
            <Image
              src={`${BASE_PATH}logo.png`}
              alt="icji logo"
              width={300}
              height={206}
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-12">
          <h2 className="text-5xl/[1] flex items-start">Logo</h2>
          <div className="flex justify-center">
            <Image
              src={`${BASE_PATH}logo.png`}
              alt="icji logo"
              width={620}
              height={426}
            />
          </div>
        </div>
      </Section>

      <Section className="px-4 md:px-0">
        <h2 className="text-[2rem]/[1] md:text-5xl/[1]">Typefaces</h2>

        {/* Mobile Layout */}
        <div className="mt-10 md:hidden">
          <p className="text-[1.5rem]/[1] mb-6">Cera CY</p>
          <Image
            src={`${BASE_PATH}typefaces/font.png`}
            alt="Font"
            width={350}
            height={223}
            className="w-full"
          />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-12 mt-10">
          <div className="flex flex-col justify-center">
            <p className="text-[2rem]/[1]">Cera CY</p>
          </div>
          <Image
            src={`${BASE_PATH}typefaces/font.png`}
            alt="Font"
            width={620}
            height={396}
          />
        </div>
      </Section>

      <Section className="px-4 md:px-0">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <h2 className="text-[2rem]/[1]">Business card</h2>
          <div className="mt-10">
            <Image
              src={`${BASE_PATH}products/business-card.png`}
              alt="Business card"
              width={350}
              height={233}
              className="w-full"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-12">
          <h2 className="text-5xl/[1] flex items-start">Business card</h2>
          <div className="flex justify-center">
            <Image
              src={`${BASE_PATH}products/business-card.png`}
              alt="Business card"
              width={620}
              height={414}
            />
          </div>
        </div>
      </Section>

      <Section className="px-4 md:px-0">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <h2 className="text-[2rem]/[1]">Envelope</h2>
          <div className="mt-10">
            <Image
              src={`${BASE_PATH}products/envelope.png`}
              alt="Envelope"
              width={350}
              height={233}
              className="w-full"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-12">
          <h2 className="text-5xl/[1] flex items-start">Envelope</h2>
          <div className="flex justify-center">
            <Image
              src={`${BASE_PATH}products/envelope.png`}
              alt="Envelope"
              width={620}
              height={414}
            />
          </div>
        </div>
      </Section>

      <Section className="px-4 md:px-0">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <h2 className="text-[2rem]/[1]">Tote bag</h2>
          <div className="mt-10">
            <Image
              src={`${BASE_PATH}products/bag.png`}
              alt="Tote bag"
              width={350}
              height={311}
              className="w-full"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-12">
          <h2 className="text-5xl/[1] flex items-start">Tote bag</h2>
          <div className="flex justify-center">
            <Image
              src={`${BASE_PATH}products/bag.png`}
              alt="Tote bag"
              width={620}
              height={551}
            />
          </div>
        </div>
      </Section>

      <Section className="px-4 md:px-0">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <h2 className="text-[2rem]/[1]">Box</h2>
          <div className="mt-10">
            <Image
              src={`${BASE_PATH}products/box.png`}
              alt="Box"
              width={350}
              height={301}
              className="w-full"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-12">
          <h2 className="text-5xl/[1] flex items-start">Box</h2>
          <div className="flex justify-center">
            <Image
              src={`${BASE_PATH}products/box.png`}
              alt="Box"
              width={620}
              height={534}
            />
          </div>
        </div>
      </Section>
      <Section className="border-none px-4 md:px-0">
        <h2 className="text-[2rem]/[1] md:text-5xl/[1]">SMM</h2>

        {/* Mobile Layout */}
        <div className="mt-10 md:hidden space-y-6">
          <Image
            src={`${BASE_PATH}smm/1.png`}
            alt="SMM 1"
            width={300}
            height={516}
            className="w-full max-w-[300px] mx-auto"
          />
          <Image
            src={`${BASE_PATH}smm/2.png`}
            alt="SMM 2"
            width={300}
            height={516}
            className="w-full max-w-[300px] mx-auto"
          />
          <Image
            src={`${BASE_PATH}smm/3.png`}
            alt="SMM 3"
            width={300}
            height={516}
            className="w-full max-w-[300px] mx-auto"
          />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="mt-20 grid grid-cols-3 justify-between">
            <Image
              src={`${BASE_PATH}smm/1.png`}
              alt="SMM 1"
              width={348}
              height={598}
            />
            <Image
              src={`${BASE_PATH}smm/2.png`}
              alt="SMM 2"
              width={348}
              height={598}
            />
            <Image
              src={`${BASE_PATH}smm/3.png`}
              alt="SMM 3"
              width={348}
              height={598}
            />
          </div>
        </div>
      </Section>
    </>
  )
}
