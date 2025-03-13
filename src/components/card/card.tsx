import React from 'react';
import { getImageProps } from "next/image";
import { ImageProps } from "next/dist/shared/lib/get-img-props";
import clsx from "clsx";

type CardProps = {
    title: string;
    titleVariant?: 'black' | 'white';
    imgSrc: ImageProps['src'];
    tags: string[];
}

type CardTagProps = {
    children: React.ReactNode;
}

function getBackgroundImage(srcSet = '') {
    const imageSet = srcSet
        .split(', ')
        .map((str) => {
            const [url, dpi] = str.split(' ')
            return `url("${url}") ${dpi}`
        })
        .join(', ')
    return `image-set(${imageSet})`
}


const CardTag: React.FC<CardTagProps> = ({ children }) => {
    return <span className="px-3 py-2.5 text-primary-tag bg-primary rounded-lg">{children}</span>
}

const variants = {
    white: 'text-white',
    black: 'text-primary',
}

export const Card: React.FC<CardProps> = ({ title, titleVariant= 'black', imgSrc, tags }) => {
    const {
        props: { srcSet },
    } = getImageProps({ alt: '', width: 559, height: 524, src: imgSrc })
    const backgroundImage = getBackgroundImage(srcSet)

    const titleClassName = variants[titleVariant];

    return <div className={`h-131 px-7.5 py-6 rounded-xl bg-no-repeat bg-cover bg-center`} style={{ backgroundImage }}>
        <p className={clsx("text-[2.625rem]", titleClassName)}>{title}</p>
        <div className="mt-3 grid grid-flow-col auto-cols-max gap-3">
            {tags.map((tag) => (
                <CardTag key={tag}>
                    {tag}
                </CardTag>
            ))}
        </div>
    </div>
}
