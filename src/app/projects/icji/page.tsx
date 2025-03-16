import React from "react";
import { ProjectHead } from "~/components/project-head";
import Image from "next/image";

export default function ICJI() {
    return <>
        <ProjectHead title="Identity for The International Center for Joint Initiatives"
                     description="ICJI is a platform fostering economic and business collaboration between Russia and its global partners"
                     task="Task: to develop a visual identity for the partnership initiative of ICJI with China, creating a holistic and effective brand image for the project"
                     imgSrc="/icji-identity-mockup.png"
                     imgAlt="ICJI"
        />
        <section className="container mx-auto mt-25">
            <h2 className="text-5xl/[1]">Result:</h2>
            <Image className="mt-10" src="/icji-result.png" alt="ICJI Result" width={1215} height={1039}/>
        </section>
        <section>
            <h2 className="text-5xl/[1]">Result:</h2>
            <div className="text-[1.75rem]/[1]">
                <p>→ chinese lantern</p>
                <p>→ chinese teahouse</p>
                <p>→ bamboo</p>
            </div>
            <Image src="/icji-in-1.png" alt="Inspiration 1" width={187.67} height={187.67}/>
            <Image src="/icji-in-2.png" alt="Inspiration 2" width={187.67} height={187.67}/>
            <Image src="/icji-in-3.png" alt="Inspiration 3" width={187.67} height={187.67}/>

        </section>
    </>
};
