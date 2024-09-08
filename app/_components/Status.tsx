import {Section} from "@/app/_components/Section";
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Gamepad2, Gamepad, LucideIcon, Music, Baby, ArrowUpRight} from 'lucide-react'
import Link from "next/link";

export const Status =()=>{
    return(
        <Section className={'flex max-md:flex-col items-start gap-4 '}>
            <div className={'flex-[3] w-full h-full'}>
                <Card className={'w-full p-4 flex flex-col gap-2'}>
                    <p className={'text-lg text-muted-foreground'}>Some side projects.</p>
                    <div className={'flex flex-col gap-4'}>
                        {SIDE_PROJECTS.map((project,index)=>(
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url='/'
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className={'flex-[2] flex flex-col gap-4 w-full'}>
                <Card className={'p-4 flex-1'}>
                    <p className={'text-lg text-muted-foreground'}>Some Works</p>
                    <div className={'flex flex-col gap-4'}>
                        {WORKS.map((work,index)=>(
                                <Work
                                    key={index}
                                    {...work}
                                />
                            ))}
                    </div>
                </Card>
                <Card className={'p-4 flex-1 flex flex-col gap-4'}>
                    <p className={'text-lg text-muted-foreground'}>Contact Me</p>
                    <ContactCard
                        image={'/image/me.jpeg'}
                        mediumImage={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png'}
                        name={'HanakhinDev'}
                        description={'contact me on linkedIn!'}
                    />
                    <ContactCard
                    image={'/image/me.jpeg'}
                    mediumImage={'https://static.vecteezy.com/ti/vecteur-libre/p3/13948544-logo-gmail-sur-fond-blanc-transparent-gratuit-vectoriel.jpg'}
                    name={'Hanakhin N-M'}
                    description={'contact me on Gmail!'}
                />

                </Card>
            </div>
        </Section>
    )
}


const ContactCard = (props:{
    image:string,
    mediumImage:string,
    name:string,
    description:string,
})=>{
    return(

    <Card className={'p-3 bg-accent/10 flex items-center gap-4 '}>
        <div className={'relative'}>
            <img src={props.image} alt={props.name} className={"w-10 h-10"}/>
            <img src={props.mediumImage} alt={props.name} className={"w-4 h-4 -bottom-1 -right-1 rounded-full absolute "}/>
        </div>
        <div className={'flex flex-col gap-2'}>
            <div className={'inline-flex gap-2'}>
                <p className={'text-lg font-semibold rounded-full object-contain'}>{props.name}</p>
            </div>
            <p className={'text-xs text-muted-foreground'}>{props.description}</p>
        </div>
        <ArrowUpRight size={16}/>
    </Card>
    )
}

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Gamepad2,
        title: "Video Games Shop",
        description: 'React.js,Tailwind.css',
        url: '/'
    },
    {
        Logo: Music,
        title: "Extiguisher gestion app",
        description: 'Symfony,React.js',
        url: '/'

    },
    {
        Logo: Gamepad,
        title: "Another Video Game Shop",
        description: 'Next.js, React.js, Tailwind.css',
        url:'/'
    },
    {
        Logo: Gamepad,
        title: "Another Video Game Shop",
        description: 'Next.js, React.js, Tailwind.css',
        url:'/'
    },
    {
        Logo: Gamepad,
        title: "Another Video Game Shop",
        description: 'Next.js, React.js, Tailwind.css',
        url:'/'
    },
]


type SideProjectProps={
    Logo:LucideIcon,
    title:string,
    description:string,
    url:string
}

const SideProject = (props: SideProjectProps)=>{
    return(
        <Link href={props.url} className={'inline-flex gap-4 items-center hover:bg-accent/50 transition-colors p-1 rounded'} >
                <span className={'bg-accent text-accent-foreground p-3 rounded'}>
                    <props.Logo size={22}/>
                </span>
            <div className={'flex flex-col gap-2'}>
                <p className={'text-lg font-semibold'}>{props.title}</p>
                <p className={'text-sm text-muted-foreground'}>{props.description}</p>
            </div>
        </Link>
    )
}

const WORKS:WorkProps=[
    {
        image:'/logo/atomus.svg',
        title: "Atomus",
        role: 'Lead developer',
        date: 'june 2021 ',
        url:'#',
        freelance:true
    },
    {
        image: '/logo/h.png',
        title: 'First Website',
        role: 'Founder',
        date: 'july 2024',
        url: 'https://hanakhin.github.io/PortfolioSerious'
    }

]

type WorkProps={
    image:string,
    title:string,
    role:string,
    date:string,
    description:string,
    url:string,
    freelance? : boolean
}

const Work = (props: WorkProps)=>{
    return(
        <Link href={props.url} className={'inline-flex gap-4 items-center hover:bg-accent/50 transition-colors p-1 rounded'} target={'_blank'}>
                <span className={'bg-accent text-accent-foreground p-3 rounded'}>
                    <img src={props.image} alt={props.title} className={'w-7 h-7 object-contain'}/>
                </span>
                <div className={'flex flex-col gap-2'}>
                    <div className={'inline-flex gap-2'}>
                        <p className={'text-lg font-semibold'}>{props.title}</p>
                        {props.freelance && <Badge variant="outline" className={'text-primary rounded'}>Freelance</Badge>}
                    </div>
                    <p className={'text-xs text-muted-foreground'}>{props.role}</p>
                </div>
                <div className={'ml-auto'}>
                    <p className={'text-xs text-end text-muted-foreground'}>{props.date}</p>
                </div>

        </Link>
    )
}