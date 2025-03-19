'use client';

import dynamic from 'next/dynamic'

export const LottiePlayer = dynamic(
    () =>
        import('@lottiefiles/dotlottie-react').then(
            (mod) => mod.DotLottieReact
        ),
    {
        ssr: false,
    }
)
