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
            src="/evgeniia-portfolio/lottie/snake-d-to-u.json"
            loop={false}
            autoplay
          />
        </div>
      </section>
      <ProjectsContainer>
        <Card
          linkProps={{ href: '/projects/uber' }}
          imgProps={{
            width: 559,
            height: 524,
            src: '/evgeniia-portfolio/uber-mockup.png',
          }}
        >
          <CardTitle color="white">Uber Georgia</CardTitle>
          <CardTags tags={['social media', 'AI']} />
        </Card>
        <Card
          linkProps={{ href: '/projects/icji' }}
          imgProps={{
            width: 559,
            height: 524,
            src: '/evgeniia-portfolio/icji-identity-mockup.png',
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
            src: '/evgeniia-portfolio/pepsico-mockup.png',
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
            <p className="mt-7.5 text-lg text-primary-grey">
              The creator of this page
              <br />& multidisciplinary designer
            </p>
            <p className="mt-4 text-lg text-primary-grey">
              I develop complex identities,
              <br />
              social networks design, presintations
              <br />
              trendy print materials, and websites
            </p>
            <p className="mt-4 text-lg text-primary-grey">
              I work in Figma, Photoshop,
              <br />
              Illustrator, use new technologies
              <br />
              and AI in my designs
            </p>
          </div>
          <div className="pt-8.5 px-7.5 pb-7.5 rounded-xl bg-primary-grey-background flex flex-col">
            <div className="grid justify-between grid-flow-col items-start">
              <h5 className="text-[2.625rem]/[1]">
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
            <Button size="l" className="mt-7.5 w-full">
              Telegram →
            </Button>
          </div>
        </div>
      </section>
      <ProjectsContainer>
        <Card
          linkProps={{ href: '/projects/air-products' }}
          imgProps={{
            width: 559,
            height: 524,
            src: '/evgeniia-portfolio/gc-mockup.png',
          }}
        >
          <CardTitle>
            Air Products
            <br />
            gas company
          </CardTitle>
          <CardTags tags={['social media', 'brand materials']} />
        </Card>
        <Card
          linkProps={{ href: '/projects/sibur' }}
          imgProps={{
            width: 559,
            height: 524,
            src: '/evgeniia-portfolio/gc-mockup.png',
          }}
        >
          <CardTitle color="white">Sibur — Mendeleev project</CardTitle>
          <CardTags tags={['landing page', 'promo']} />
        </Card>
      </ProjectsContainer>
    </div>
  )
}
