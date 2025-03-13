import { Button } from "~/components/button";
import { Card } from "~/components/card";

export default function Home() {

    return (
        <div className="container mx-auto">
            <section className="h-dvh">
                <div className="pt-[221px]">
                    <h1 className="text-[5.375rem]/[1.02] font-(family-name:--font-nimpkish)">
                        dEsign that<br/>aMplifiEs<br/>your braNd
                    </h1>
                    <Button className="mt-8">
                        View work
                    </Button>
                </div>
            </section>
            <section className="py-5 grid grid-flow-col gap-10">
                <Card title="Uber Georgia" titleVariant="white" imgSrc="/uber-mockup.png"
                      tags={['social media', 'AI']}/>
                <Card title="Uber Georgia" imgSrc="/icji-identity-mockup.png" tags={['identity', 'brand book']}/>
            </section>
        </div>
    );
}
