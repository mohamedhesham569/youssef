import { Github,Linkedin } from 'lucide-react';

import LogoTableau from '/public/images/logos/5953920271624814781-removebg-preview.png';
import LogoLooker from '/public/images/logos/5956076057444598550-removebg-preview(1).png';
import LogoSQL from '/public/images/logos/5956076057444598548-removebg-preview.png';
import LogoPython from '/public/images/logos/5953920271624814790-removebg-preview.png';
import LogoWord from '/public/images/logos/5953920271624814773-removebg-preview.png';
import LogoExcel from '/public/images/logos/5953920271624814777-removebg-preview.png';
import LogoPowepoint from '/public/images/logos/5953920271624814778-removebg-preview.png';
import LogoFabric from '/public/images/logos/5953920271624814779-removebg-preview.png';
import LogoETL from '/public/images/logos/etl_9850879.png';
import LogoPowerPi from '/public/images/logos/5953920271624814780-removebg-preview.png';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoVezloo from '/public/images/logos/5953920271624814764-removebg-preview.png';
import LogoEscwa from '/public/images/logos/5953920271624814772-removebg-preview.png';
import Logonu from '/public/images/logos/5953920271624814771-removebg-preview.png';

import Project2 from '/public/images/project2.png';
import Project1 from '/public/images/project1.png';
import Project3 from '/public/images/project3.png';
import Project4 from '/public/images/project4.png';
import Project5 from '/public/images/project5.png';
import Project7 from '/public/images/project7.png';
import Project6 from '/public/images/project6.png';
import Project8 from '/public/images/project8.png';

import cer1 from '/public/images/5956076057444598627.jpg';
import cer2 from '/public/images/5956076057444598628.jpg';
import cer3 from '/public/images/5956076057444598629.jpg';
import cer4 from '/public/images/5956076057444598630.jpg';
import cer5 from '/public/images/5956076057444598631.jpg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/Youssef-FahmyEG',
  GITHUB_REPO: '',
  TWITTER: '',
  FIGMA: '',
  FIGMA_FILE:
    '',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Certificates',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/Youssef-FahmyEG',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/youssefhosny',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Excel',
    logo: LogoExcel,
    
  },
  {
    label: 'Word',
    logo: LogoWord,

  },
  {
    label: 'Powerpoint',
    logo: LogoPowepoint,

  },
  {
    label: 'ETL',
    logo: LogoETL,
  
  },
  {
    label: 'Power Bi',
    logo: LogoPowerPi,
    
  },
  {
    label: 'Tableau',
    logo: LogoTableau,
    
  },
  {
    label: 'Looker Studio',
    logo: LogoLooker,
  
  },
  {
    label: 'SQL',
    logo: LogoSQL,
  
  },
  {
    label: 'Python',
    logo: LogoPython,
    
  },
  {
    label: 'Fabric',
    logo: LogoFabric,
  
  },
  {
    label: 'Git',
    logo: LogoGit,
  }
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: Logonu,
    logoAlt: ' NeuronetiX logo',
    position: ' Data Analyst Intern',
    startDate: new Date(2024, 7),
    currentlyWorkHere: true,
    summary: [
      'Using Python libraries (such as Pandas, NumPy and Matplotlib) to analyze data sets, extract insights, and prepare reports for decision-making purposes.',
      'Creating interactive dashboards and visualizations in Excel and Power BI to present data trends and insights effectively.',
      'Applying analytical skills and critical thinking to solve technical challenges and optimize processes.',
    ],
  },
  {
    logo: LogoUpwork,
    logoAlt: 'Upwork logo',
    position: 'Data Analyst Freelancer',
    startDate: new Date(2023, 4),
    currentlyWorkHere: true,
    summary: [
      'Conducting data analysis projects for various clients.',
      'Developing and maintaining dashboards to provide actionable insights using visualization tools.',
    ],
  },
  {
    logo: LogoVezloo,
    logoAlt: 'Vezloo logo',
    position: 'Data Entry Specialist',
    startDate: new Date(2021, 7),
    endDate: new Date(2021, 10),
    summary: [
      'Verified data accuracy and making necessary corrections.',
      'Managed and prioritized multiple data entry tasks to meet deadlines',

    ],
  },
  {
    logo: LogoEscwa,
    logoAlt: 'Escwa logo',
    position: ' Data Annotator',
    startDate: new Date(2020, 10),
    endDate: new Date(2021, 2),
    summary: [
      'Annotated Hard, Soft Skills, Certifications, Degrees, Fields, and Years of Experience in job descriptions.',
      'Gathered and interpreted the data, investigated the problem, isolated and attacked the root cause.',

    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Financial Analysis',
    description:
        'I utilized Power BI for advanced data visualization, leveraging Power Query for data cleaning and transformation and DAX for complex calculations and insightful measures. The project focused on identifying key trends and metrics through the creation of Key Performance Indicators (KPIs) that aid strategic decision-making.Steps Applied:Define a business question to solve.Conduct Exploratory Data Analysis (EDA).Clean and prepare data using Power Query.Use DAX to establish relationships for data modeling.Create KPIs using DAX.Build a dynamic dashboard to visualize insights.Key Performance Indicators (KPIs):',
      
    url: 'https://drive.google.com/file/d/1XrEzvtWwXkQr0PzrktUc4lVMjn90iAbM/view?usp=drive_link',
    previewImage: Project1,
    type:"powerpi",
    technologies: [
      'Power BI ',
      'Dax',
      'Data Modeling',
      'Data Visualization',
    ],
  },
  {
    name: 'Car Analysis',
    description:
      'I leveraged advanced data visualization techniques with Power BI to uncover key trends and metrics. Power Query enabled data cleaning and transformation, while DAX allowed for complex calculations and insightful measures. Incorporating Key Performance Indicators (KPIs) provided valuable insights for strategic decision-making.Steps applied in the project:( Business Questions for problem-solving - EDA ( Exploratory Data Analysis) - Cleaning and preparing data using power query - After cleaning data, using DAX to create relations for data modeling - Create some KPIs using DAX - Build a Dynamic Dashboard to show insights )',
    url: 'https://drive.google.com/file/d/1WtbxT8T49JFveosYry0m5kfG3P0ZBlrb/view?usp=drive_link',
    previewImage: Project2,
    type:"powerpi",
    technologies: [
      'Power BI ',
      'Dax',
      'Data Modeling',
      'Data Visualization',
    ],
  },
  {
    name: 'Order Analysis',
    description:
      'The dashboards reveal a significant decline in overall business performance compared to the previous year. Sales have dropped by 33% to $1.45M, while costs decreased by 29% to $1.35M, and quantity sold fell by 36% to 51K units. The top product by sales was "Côte de Blaye" with $164K, but the worst-performing product was "Chocolade," with only 1,759 units sold. The "Beverages" category led in both sales and orders, contributing 21.36% of sales and 24.65% of orders. Germany was the top country, accounting for 15% of all orders, with 121 orders in total. Top customers include "Horst Kloss" and "Jose Pavarotti," with sales of $122K and $121K, respectively. "Cunewalde" and "Boise" were the top cities by sales, each contributing over $120K. The analysis also shows a noticeable decline in orders, down by 34% to 830, with slightly more orders placed on weekends (422) than on business days (408). The best-performing employee was "Margaret," with 156 orders. Additionally, 8 products were discontinued, leaving 69 still active. The data indicates areas for potential growth by focusing on high-performing customers, cities, and products despite the overall downturn.',
    url: 'https://drive.google.com/file/d/1Cocwz6lctd5x8NHVJSX_xr8gWayeF_i-/view?usp=drive_link',
    previewImage: Project3,
    type:"powerpi",
    technologies: [
      'Power BI ',
      'Dax',
      'Data Modeling',
      'Data Visualization',
    ],
  },
  {
    name: 'Lionel Messi\'s Career',
    description:'The dashboard provides an overview of Lionel Messi\'s career statistics and personal details:Personal Information: Messi was born on June 24, 1987, making him 36 years old. He holds Argentinian citizenship and stands 1.70 meters tall, weighing 72 kilograms. He plays as a Right Winger (RW).Career Achievements: Messi has made 889 appearances, primarily in La Liga, which is his most-played competition. Over his career, he has scored 721 goals and provided 344 assists.Market Value: As of now, his market value is estimated at €35.00 million.Trophies: The dashboard highlights Messi\'/s extensive trophy collection, including prestigious awards and cups, symbolized by the icons displayed at the bottom.',
    url: '',
    previewImage: Project4,
    type:"powerpi",
    technologies: [
      'Power BI ',
      'Dax',
      'Data Modeling',
      'Data Visualization',
    ],
  },
  {
    name: 'World Population in 2023',
    description:'The dashboard provides a detailed analysis of the global population distribution and migration patterns as of 2023. The total world population is recorded at 8,043,901,603 people. The pie chart shows the distribution of this population by region, with Asia having the largest share at 59%, followed by Africa at 17%, Europe and Latin America both at 9.4%, North America at 4.6%, and Oceania with the smallest share. The bar chart lists the top 10 most populous countries, with India and China leading significantly, followed by the United States, Indonesia, and Pakistan, indicating a concentration of the global population in these countries. The net migration by region chart shows varying trends, with Asia experiencing a net loss of 1.4 million migrants, while North America and Europe have net gains of around 1 million each, indicating these regions are key destinations for migration. Africa, Latin America, and Oceania show lower levels of net migration, with Africa having a net gain of 529,000 and Europe a net gain of 994,800. ',
    url: '',
    previewImage: Project7,
    type:"Looker",
    technologies: [
      'Looker ',
      'Data Visualization',
    ],
  },
  {
    name: 'Financial Performance',
    description:'The report provides an overview of weekly financial performance, highlighting revenue, costs, profit margins, and top product sales. This week’s total revenue is $75,926, while the total costs amount to $69,716, indicating that the company has maintained a positive revenue stream but still faces significant costs. The revenue and cost charts show daily trends, with the highest revenue occurring towards the end of the week, particularly on Friday and Saturday, suggesting increased sales activity during those days. The profit margin trend is displayed month by month, starting at 18% in January, dipping to a low of 14% in March and June, and fluctuating throughout the year, ending at 14% in December. This reflects variability in profitability, likely due to seasonal factors or cost variations. The sales target achievement is currently at 76%, indicating that the company is on track but still needs to make further efforts to meet its goals fully. The list of top products by sales shows that Jane Smith leads with $19,932 in sales, followed closely by Alex Johnson and Michael Brown, both of whom have multiple entries with slightly lower sales figures. This suggests that a few key salespeople are driving most of the revenue. The report also uses icons next to the sales figures, which could represent different products or categories sold by each salesperson, implying a diverse range of products contributing to overall sales. Overall, this report provides a clear picture of the financial status and sales performance, allowing for strategic adjustments in both cost management and sales efforts to improve profitability and meet sales targets. ',
    url: 'https://drive.google.com/file/d/1ljaNB6xOoA6WSpHWtXyXCjVznABD7T-g/view?usp=drive_link',
    previewImage: Project6,
    type:"Tableau",
    technologies: [
      'Tableau ',
      'Dax',
      'Data Modeling',
      'Data Visualization',
    ],
  },
  {
    name: 'Adidas Dashboard',
    description:'The sales dashboard reveals a total revenue of $899.9 million, with New York being the most successful state. Men\'s street footwear emerged as the top-selling product category, reflecting consumer preference. The majority of sales, $356.64 million, came from online transactions, surpassing both in-store and outlet sales. July was the most profitable month, generating $95 million, indicating a peak in consumer spending during this period. Male customers accounted for the largest share of units sold, with 939,000 units purchased.In terms of profit, the dashboard shows a total of $332.1 million, with 2,478,861 units sold. West Gear led the retail segment with $243 million in sales, followed by Foot Locker at $220 million. The Western region was the most lucrative, contributing $270 million to the overall sales. The dashboard also highlights seasonal and regional differences in sales, with online shopping and men\'s footwear consistently driving revenue. These insights suggest targeted strategies could further enhance sales in high-performing regions and product categories, particularly during peak months.',
    url: 'https://drive.google.com/file/d/1qM-d6tHtKwwpoI6OdCAKKpLY4SVK9W3h/view?usp=drive_link',
    previewImage: Project5,
    type:"powerpi",
    technologies: [
      'powerpi ',
      'LOD',
      'Data Modelling',
      'Data Visualization',
    ],
  },
  {
    name: 'Restaurant Orders Dashboard',
    description:'The dashboard provides a detailed analysis of a restaurant\'s total sales, segmented by product type, time, region, payment method, and cuisine. The total sales amount to $160,281, with Basic products contributing 64.04% ($102,650) and Premium products making up 35.96% ($57,631). Sales performance is categorized by weekdays and weekends, highlighting the highest sales for specific items like Dolo and White Sauce, which indicate customer preferences. Payment methods are also analyzed, showing that 37% of sales are through credit cards on delivery ($45,674), 34% are cash on delivery ($54,581), and 28% via direct credit card payment ($60,026). The dashboard further breaks down total sales by cuisine type, with European cuisine accounting for 31.52%, followed by Middle Eastern at 29.87%, Arabian at 18.95%, Asian at 13.47%, and African at 7.12%, reflecting the diverse culinary preferences of customers. Regional sales distribution is presented on a world map, where Europe leads with the highest sales percentages over multiple years, while Africa shows a significant decrease in 2018. The restaurant has achieved 65% of its sales target,',
    url: 'https://drive.google.com/file/d/1idH008b3QdtIsyZ-opmuOqeYR1CB34mM/view?usp=drive_link',
    previewImage: Project8,
    type:"Excel",
    technologies: [
      'Microsoft Excel PivotTable ',
      'Power Query',
      'Power Pivot',
      'DAX',
      'Data Visualization',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    
    personAvatar: cer1,
   },
  {
    
    personAvatar: cer2,
    },
  {
   
    personAvatar: cer3,
    },
  {
    
    personAvatar: cer4,
    },
  {
    
    personAvatar: cer5,
    },
];
