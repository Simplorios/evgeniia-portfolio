import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '~/components/button'
import { Card, CardTags, CardTitle } from '~/components/card'
import { ProjectsContainer } from '~/components/projects-container'
import { Snake } from '~/components/snake'
import { Tag } from '~/components/tag'

import styles from './page.module.css'

const BASE_PATH = '/evgeniia-portfolio/main/'

const LetsDiscuss = () => {
  return (
    <div className="pt-8.5 px-7.5 pb-7.5 rounded-xl bg-primary-grey-background flex flex-col">
      <div className="grid justify-between grid-flow-col items-start">
        <h5 className="text-[1.75rem]/[1] md:text-[2.625rem]/[1]">
          Let&apos;s discuss
          <br />
          your project
        </h5>
        <Tag>10-15 min</Tag>
      </div>
      <p className="mt-7.5 text-lg text-primary-grey grow">
        Let&apos;s figure out the task,
        <br />
        fill out a small brief together
        <br />
        and schedule a call
      </p>
      <Button size="m" className="mt-7.5 w-full" asChild={true}>
        <a
          href="https://t.me/janeeremeeva"
          rel="noopener,noreferrer"
          target="_blank"
        >
          Telegram →
        </a>
      </Button>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="relative h-dvh mb-10 md:mb-25">
        <div className="pt-[80px] md:pt-[160px] px-4 md:px-0 container mx-auto">
          <h1 className="text-[4rem]/[1.02] md:text-[5.375rem]/[1.02] font-(family-name:--font-nimpkish)">
            dEsign that
            <br />
            aMplifiEs
            <br />
            your braNd
          </h1>
          <Button className="mt-8" asChild={true}>
            <Link href="#projects">View work</Link>
          </Button>
        </div>
        <Snake />
      </section>
      <div className="container mx-auto pb-35 px-4 md:px-0">
        <ProjectsContainer id="projects">
          <Card
            linkProps={{ href: '/projects/uber' }}
            imgProps={{
              width: 559,
              height: 524,
              src: `${BASE_PATH}uber.png`,
            }}
          >
            <CardTitle color="white">Uber Georgia</CardTitle>
            <CardTags tags={['social media']} />
          </Card>
          <Card
            linkProps={{ href: '/projects/icji' }}
            imgProps={{
              width: 559,
              height: 524,
              src: `${BASE_PATH}icji.png`,
            }}
          >
            <CardTitle>ICJI identity</CardTitle>
            <CardTags tags={['identity', 'brand book']} />
          </Card>
        </ProjectsContainer>
        <ProjectsContainer>
          <Card
            linkProps={{ href: '/projects/pepsico' }}
            imgProps={{
              width: 1160,
              height: 524,
              src: `/evgeniia-portfolio/pepsico/head.png`,
              className: 'object-cover object-top',
            }}
          >
            <CardTitle color="white" position="center">
              PepsiCo web-game
            </CardTitle>
            <CardTags
              tags={['web-site', 'illustration', 'ai']}
              position="center"
            />
          </Card>
        </ProjectsContainer>
        <section id="about" className="pt-10 pb-20">
          <p className="text-[3rem]/[1.37] md:text-[5.375rem]/[1.37] text-center font-(family-name:--font-nimpkish)">
            hello!
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-flow-col md:grid-cols-2 gap-10">
            <div className="pt-8.5 px-7.5 pb-7.5 rounded-xl bg-primary-grey-background">
              <h5 className="text-[2rem] md:text-[2.625rem]">
                I’m Evgen
                <span
                  className={styles['letter-above']}
                  data-letter-above={'W'}
                >
                  ii
                </span>
                a
              </h5>
              <p className="mt-7.5 text-lg text-primary-grey">
                The creator of this page
                <br />& multidisciplinary designer
              </p>
              <p className="mt-4 text-lg text-primary-grey">
                I develop complex identities,
                <br />
                social networks design,
                <br />
                presentations, trendy print
                <br />
                materials, and websites
              </p>
              <p className="mt-4 text-lg text-primary-grey">
                I work in Figma, Photoshop,
                <br />
                Illustrator, use new technologies
                <br />
                and AI in my designs
              </p>
            </div>
            <LetsDiscuss />
          </div>
        </section>
        <ProjectsContainer>
          <Card
            linkProps={{ href: '/projects/air-products' }}
            imgProps={{
              width: 559,
              height: 524,
              src: `${BASE_PATH}gc.png`,
            }}
          >
            <CardTitle>
              Air Products
              <br />
              gas company
            </CardTitle>
            <CardTags tags={['social media']} />
          </Card>
          <Card
            linkProps={{ href: '/projects/sibur' }}
            imgProps={{
              width: 559,
              height: 524,
              src: `${BASE_PATH}sibur.png`,
            }}
          >
            <CardTitle color="white">Sibur — Mendeleev project</CardTitle>
            <CardTags tags={['landing page', 'promo']} />
          </Card>
        </ProjectsContainer>
        <ProjectsContainer>
          <Card
            linkProps={{ href: '/projects/say-what' }}
            imgProps={{
              width: 1160,
              height: 524,
              src: `/evgeniia-portfolio/say-what/head.png`,
              className: 'object-cover object-bottom md:object-top',
            }}
          >
            <CardTitle color="white" position="center">
              Say What — sport store
            </CardTitle>
            <CardTags tags={['branding', 'identity']} position="center" />
          </Card>
        </ProjectsContainer>
        <ProjectsContainer>
          <Card
            linkProps={{ href: '/projects/wedding' }}
            imgProps={{
              width: 559,
              height: 524,
              src: `/evgeniia-portfolio/wedding/wedding-card.png`,
            }}
          >
            <CardTitle color="white">
              Wedding
              <br />
              polygrathy
            </CardTitle>
            <CardTags tags={['printing']} />
          </Card>
          <Card
            linkProps={{ href: '/projects/bonduelle' }}
            imgProps={{
              width: 559,
              height: 524,
              src: `${BASE_PATH}bonduelle.png`,
            }}
          >
            <CardTitle color="white">Bonduelle</CardTitle>
            <CardTags tags={['brand materials']} />
          </Card>
        </ProjectsContainer>

        <section className="mt-21 grid grid-cols-1 md:grid-flow-col md:auto-cols-fr gap-10">
          <div className="rounded-xl bg-primary-grey-background flex justify-center items-center py-16 md:py-20">
            <Image
              src="/evgeniia-portfolio/logo.svg"
              alt="Logo bottom"
              width={134}
              height={185}
            />
          </div>
          <LetsDiscuss />
        </section>
      </div>
    </>
  )
}
