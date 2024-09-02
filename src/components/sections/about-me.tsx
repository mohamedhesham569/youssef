import Image from 'next/image';

import SagarFullPose from '/public/images/sagar-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-center gap-12 md:flex-row">
        {/* Image */}
        {/* <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={SagarFullPose}
              alt="Fullpose of Sagar"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div> */}

        {/* Content */}
        <div className="flex max-w-xl  flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
          Hi, my name is Youssef.
During university, I had internships in the data field. I enjoyed what I did, but it didn't feel right for me. Eventually, I began to study the data analysis track after I heard my brother and I met Data Analysts and scientists talk about it . Finding out what they did changed the trajectory of my career. 
          </Typography>
          <Typography>
           They built reports and dashboards which amazed me. They used modern tools and How they trained machines how to mimic human beings. I love all that and I want to make similar. learned how much a career in data could earn was the icing on the cake. I was hooked. I began relentlessly studying Excel, SQL, Tableau, Power BI, etc.
A few months later, I landed my first role as a freelance data analyst.
          </Typography>
          {/* <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.E. in Computer Engineering
              </Typography>
              <Typography component="li">Full time freelancer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Aspiring indie hacker</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography> */}
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
