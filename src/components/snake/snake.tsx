'use client'

import React from 'react'

import { LottiePlayer } from '~/components/lottie-player'

import styles from './snake.module.css'

export const Snake = () => {
  return (
    <LottiePlayer
      path="/evgeniia-portfolio/lottie/snake-d-to-u.json"
      renderer="svg"
      loop={true}
      autoplay={true}
      className={styles.container}
    />
  )
}
