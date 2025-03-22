import { Button } from '~/components/button'
import { Card, CardTags, CardTitle } from '~/components/card'
import { LottiePlayer } from '~/components/lottie-player'
import { ProjectsContainer } from '~/components/projects-container'
import { Tag } from '~/components/tag'

import styles from './page.module.css'

export default function Home() {
  return (
    <div className="container mx-auto">
      <section className="relative h-[1066px]">
        <div className="pt-[221px]">
          <h1 className="text-[5.375rem]/[1.02] font-(family-name:--font-nimpkish)">
            dEsign that
            <br />
            aMplifiEs
            <br />
            your braNd
          </h1>
          <Button className="mt-8">View work</Button>
        </div>
        <div className="absolute h-[1066px] w-[1566px] top-0 left-38.5">
          <LottiePlayer
            src={'/lottie/snake-d-to-u.json'}
            loop={false}
            autoplay
          />
        </div>
      </section>
      <ProjectsContainer className="py-5 grid grid-flow-col auto-cols-fr gap-10">
        <Card imgProps={{ width: 559, height: 524, src: '/uber-mockup.png' }}>
          <CardTitle color="white">Uber Georgia</CardTitle>
          <CardTags tags={['social media', 'AI']} />
        </Card>
        <Card
          imgProps={{
            width: 559,
            height: 524,
            src: '/icji-identity-mockup.png',
          }}
        >
          <CardTitle>ICJI identity</CardTitle>
          <CardTags tags={['identity', 'brand book']} />
        </Card>
      </ProjectsContainer>
      <ProjectsContainer className="py-5">
        <Card
          imgProps={{ width: 1160, height: 524, src: '/pepsico-mockup.png' }}
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
      <section className="pt-10 pb-20">
        <p className="text-[5.375rem]/[1.37] text-center font-(family-name:--font-nimpkish)">
          hello!
        </p>
        <div className="mt-16 grid grid-flow-col grid-cols-2 gap-10">
          <div className="pt-8.5 px-7.5 pb-7.5 rounded-xl bg-primary-grey-background">
            <h5 className="text-[2.625rem]">
              I’m Evgen
              <span className={styles['letter-above']} data-letter-above={'W'}>
                ii
              </span>
              a
            </h5>
            <p className="mt-7.5 text-primary-grey">
              The creator of this page
              <br />& multidisciplinary designer
            </p>
            <p className="mt-4 text-primary-grey">
              I develop complex identities,
              <br />
              social networks design, presintations
              <br />
              trendy print materials, and websites
            </p>
            <p className="mt-4 text-primary-grey">
              I work in Figma, Photoshop,
              <br />
              Illustrator, use new technologies
              <br />
              and AI in my designs
            </p>
          </div>
          <div className="pt-8.5 px-7.5 pb-7.5 rounded-xl bg-primary-grey-background">
            <div className="grid justify-between grid-flow-col items-start">
              <h5 className="text-[2.625rem]/[1]">
                Let&apos;s discuss
                <br />
                your project
              </h5>
              <Tag>10-15 min</Tag>
            </div>
            <p className="mt-7.5 text-primary-grey">
              Let&apos;s figure out the task,
              <br />
              fill out a small brief together
              <br />
              and schedule a call
            </p>
          </div>
        </div>
      </section>
      <ProjectsContainer>
        <Card imgProps={{ width: 559, height: 524, src: '/gc-mockup.png' }}>
          <CardTitle>
            Air Products
            <br />
            gas company
          </CardTitle>
          <CardTags tags={['social media', 'brand materials']} />
        </Card>
        <Card imgProps={{ width: 559, height: 524, src: '/gc-mockup.png' }}>
          <CardTitle color="white">Sibur — Mendeleev project</CardTitle>
          <CardTags tags={['landing page', 'promo']} />
        </Card>
      </ProjectsContainer>
    </div>
  )
}
