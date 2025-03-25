'use client'

import React from 'react'

import { LottiePlayer } from '~/components/lottie-player'

import styles from './snake.module.css'

export const Snake = () => {
  return (
    <div className={styles.container}>
      <LottiePlayer
        src="/evgeniia-portfolio/lottie/snake-d-to-u.json"
        loop={false}
        autoplay
        renderConfig={{
          autoResize: true,
        }}
      />
    </div>
  )
}
