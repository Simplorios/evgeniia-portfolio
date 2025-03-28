import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import { ProjectHead } from '~/components/project-head'
import { VideoLoop } from '~/components/video-loop'

type SectionProps = React.HTMLAttributes<HTMLElement>

const Section: React.FC<SectionProps> = ({ className, ...props }) => {
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
        imgSrc="/evgeniia-portfolio/icji-identity-mockup.png"
        imgAlt="ICJI"
      />
      <section className="container mx-auto mt-25">
        <h2 className="text-5xl/[1]">Result:</h2>

        <VideoLoop
          src="/evgeniia-portfolio/icji/video.mp4"
          className="mt-10 aspect-[1.17]"
        />
      </section>
      <Section className="mt-5 grid grid-flow-col gap-x-14 gap-y-11.5 grid-cols-3 grid-rows-3">
        <h2 className="text-5xl/[1]">Inspiration</h2>
        <div className="text-[1.75rem]/[1] row-span-2">
          <p>→ chinese lantern</p>
          <p>→ chinese teahouse</p>
          <p>→ bamboo</p>
        </div>

        <div className="grid grid-cols-2 gap-x-14 items-center">
          <Image
            src="/evgeniia-portfolio/icji/result/icji-in-1.png"
            alt="Inspiration 1"
            width={187.67}
            height={187.67}
          />
          <Image
            src="/evgeniia-portfolio/icji/arrow.svg"
            alt="Arrow"
            width={56.85}
            height={24.47}
          />
        </div>
        <div className="grid grid-cols-2 gap-x-14 items-center">
          <Image
            src="/evgeniia-portfolio/icji/result/icji-in-2.png"
            alt="Inspiration 2"
            width={187.67}
            height={187.67}
          />
          <Image
            src="/evgeniia-portfolio/icji/arrow.svg"
            alt="Arrow"
            width={56.85}
            height={24.47}
          />
        </div>
        <div className="grid grid-cols-2 gap-x-14 items-center">
          <Image
            src="/evgeniia-portfolio/icji/result/icji-in-3.png"
            alt="Inspiration 3"
            width={187.67}
            height={187.67}
          />
          <Image
            src="/evgeniia-portfolio/icji/arrow.svg"
            alt="Arrow"
            width={56.85}
            height={24.47}
          />
        </div>
        <Image
          className="row-span-3"
          src="/evgeniia-portfolio/icji/result/icji-in-result.png"
          alt="Inspiration result"
          width={369}
          height={699}
        />
      </Section>

      <Section>
        <h2 className="text-5xl/[1]">Transformation</h2>
        <div className="mt-20 grid grid-cols-2 gap-x-12">
          <p className="text-[1.75rem]/[1]">
            → The composition is built on a grid enclosed in a circle, which
            further develops into the famous Chinese lantern.
            <br />
            <br />
            Inside the circle is a geometric composition of Chinese symbols such
            as the tea house and bamboo
          </p>
          <div className="grid grid-flow-col items-center gap-x-6">
            <Image
              src="/evgeniia-portfolio/icji/transform/icji-transform-1.png"
              alt="Transform 1"
              width={157}
              height={157}
            />
            <Image
              src="/evgeniia-portfolio/icji/arrow.svg"
              alt="Arrow"
              width={49.5}
              height={21.3}
            />

            <Image
              src="/evgeniia-portfolio/icji/transform/icji-transform-2.png"
              alt="Transform 2"
              width={157}
              height={157}
            />
            <Image
              src="/evgeniia-portfolio/icji/arrow.svg"
              alt="Arrow"
              width={49.5}
              height={21.3}
            />

            <Image
              src="/evgeniia-portfolio/icji/result/icji-in-result.png"
              alt="Transform result"
              width={157}
              height={298}
            />
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-5xl/[1]">Logo</h2>
        <div></div>
      </Section>
      <Section className="grid grid-cols-2 grid-rows-3">
        <h2 className="text-5xl/[1]">Typefaces</h2>
        <Image
          className="row-span-3"
          src="/evgeniia-portfolio/icji/typefaces/font.png"
          alt="Font"
          width={780}
          height={498}
        />
        <p className="text-[2rem]/[1] row-span-2">Cera CY</p>
      </Section>
      <Section className="grid grid-cols-2 justify-between gap-y-22">
        <h2 className="text-5xl/[1]">Business card</h2>
        <Image
          src="/evgeniia-portfolio/icji/products/business-card.png"
          alt="Business card"
          width={693}
          height={462}
        />

        <h2 className="text-5xl/[1]">Envelope</h2>
        <Image
          src="/evgeniia-portfolio/icji/products/envelope.png"
          alt="Envelope"
          width={693}
          height={462}
        />

        <h2 className="text-5xl/[1]">Tote bags</h2>
        <Image
          src="/evgeniia-portfolio/icji/products/bag.png"
          alt="Tote bags"
          width={693}
          height={616}
        />

        <h2 className="text-5xl/[1]">Box</h2>
        <Image
          src="/evgeniia-portfolio/icji/products/box.png"
          alt="Box"
          width={693}
          height={597}
        />
      </Section>
      <Section className="border-none">
        <h2 className="text-5xl/[1]">Tote bags</h2>
        <div className="mt-20 grid grid-cols-3 justify-between">
          <Image
            src="/evgeniia-portfolio/icji/smm/1.png"
            alt="SMM 1"
            width={348}
            height={598}
          />
          <Image
            src="/evgeniia-portfolio/icji/smm/2.png"
            alt="SMM 2"
            width={348}
            height={598}
          />
          <Image
            src="/evgeniia-portfolio/icji/smm/3.png"
            alt="SMM 3"
            width={348}
            height={598}
          />
        </div>
      </Section>
    </>
  )
}
