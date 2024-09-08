import { Section } from './Section'
import {GithubIcon} from "./icons/githubIcon";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {LinkedinIcon} from "@/app/_components/icons/LinkedinIcon";

export const Header = () =>{
    return(
        <header className={'sticky top-0 py-4'}>
            <Section className={'flex items-baseline'}>
                <h1 className={'text-lg font-bold text-primary-foreground'}>Hanakhin.com</h1>
                <div className={'flex-1'}/>
                <ul className={'flex items-center gap-2'}>
                    <Link
                        href={'https://github.com/hanakhin'}
                        className={cn(buttonVariants({variant: 'outline'}), 'size-10 p-2')}
                        target={'_blank'}
                    >
                        <GithubIcon size={22} className={'text-foreground'}/>
                    </Link>
                    <Link
                        href={'https://linkedin.com/hanakhin'}
                        className={cn(buttonVariants({variant: 'outline'}), 'size-10 p-2')}
                        target={'_blank'}
                    >
                        <LinkedinIcon size={22} className={'text-foreground'}/>
                    </Link>
                </ul>
            </Section>
        </header>
    )
}