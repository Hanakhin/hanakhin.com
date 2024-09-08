import {Section} from "@/app/_components/Section";
import {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";
import {FaFigma, FaReact} from "react-icons/fa";

const Code = ({className, ...props}:ComponentPropsWithoutRef<'span'>)=>{
    return(
        <span className={cn("bg-accent/30 font-mono border border-accent p-1 rounded text-primary hover:bg-accent/50 inline-flex items-center gap-2",className)}{...props}/>
    )
}


export const Hero = () =>{
    return<Section className={'flex max-md:flex-col items-start gap-4 '}>
        <div className={'flex-[3] w-full flex flex-col gap-2'}>
            <h1 className={'font-caption text-4xl text-primary'}>Hanakhin Nouni-Massotte</h1>
            <h3 className={'text-2xl font-caption'}>Apprentice Web Developer & Designer</h3>
            <p>
                I Love <Code><FaReact/>Coding</Code> & <Code> <FaFigma/>Designing</Code> websites.

            </p>
        </div>
        <div className={'flex-[2] max-md:m-auto ml-auto'}>
            <img src={'/image/me.jpeg'} className={'w-full h-auto max-w-xs rounded-full max-md:w-56 '} alt={'me'}/>
        </div>
    </Section>
}