import oyoImg from '../assets/oyo.png'
import javaImg from '../assets/javalogo.svg'
import springImg from '../assets/springboot.png'
import sqlImg from '../assets/sql.png'
import redisImg from '../assets/redis.png'
import githubImg from '../assets/github.png'
import intellijImg from '../assets/intellij.jpg'
import awsImg from '../assets/aws.jpg'
import paytmImg from '../assets/paytm.jpg'
import nodejsImg from '../assets/nodejs.png'
import mongoDbImg from '../assets/mongodb.gif'
import postgresImg from '../assets/postgres.png'
import visualStudioImg from '../assets/visualStudio.jpg'
import rocketScienceImg from '../assets/rocketScience.jpg'
import pythonImg from '../assets/python.png'
import reactImg from '../assets/react.png'
import gcpImg from '../assets/gcp.png'
import siaImg from '../assets/sia.png'
import ibmDb2 from '../assets/ibmdb2.png'
export const skills_ls = [
	javaImg, springImg, nodejsImg, redisImg, awsImg, gcpImg, postgresImg, mongoDbImg, pythonImg
]
export const work_experience = [
	{
		id: 1,
		companyName: "oyo",
		companyImage: oyoImg,
		dateStarted: 'June 2019',
		dateEnded: 'July 2020',
		companyUrl: 'https://www.oyorooms.com/',
		isCurrentlyWorkingHere: false,
		jobTitle: "Software Developer",
		points: [
			{
				title: "BFF Middleware Layer",
				point: [`Designed and implemented a scalable and robust microservice for the efficient retrieval of 
				information from multiple microservices, leveraging the power of Java and the Spring Boot framework.`,
					`Achieved a significant improvement in hotel page response time, reducing it by 40%.`,
					`Contributed to the successful migration from a monolithic to a microservices
				architecture, as a valued member of the team.`]
			}

		],
		technologies: [javaImg, springImg, awsImg, redisImg, sqlImg, intellijImg, githubImg]
	},
	{
		id: 2,
		companyName: "paytm",
		companyImage: paytmImg,
		dateStarted: 'July 2020',
		dateEnded: 'September 2021',
		companyUrl: 'https://paytm.com/',
		isCurrentlyWorkingHere: false,
		jobTitle: "Software Developer",
		points: [
			{
				title: "Order Management System",
				point: [`Developed a sophisticated and efficient convenience fee panel for the order cart team,
				effectively reducing dependencies and streamlining the management of setting
				convenience fee rules.`,
					`Enhanced the overall code quality by writing and integrating comprehensive unit tests
				utilizing the Jest framework.`,
					`Contributed to the implementation of a robust error tracking system, by writing
				consumers using the Kafka-node module in Node.js.`]
			}

		],
		technologies: [nodejsImg, mongoDbImg, awsImg, postgresImg, visualStudioImg]
	},
	{
		id: 3,
		companyName: "Rocket Science",
		companyImage: rocketScienceImg,
		dateStarted: 'December 2021',
		dateEnded: 'May 2022',
		companyUrl: 'https://rocketscience.one/',
		isCurrentlyWorkingHere: false,
		jobTitle: "Software Developer",
		points: [
			{
				title: "Sales Insights Solution for Loreal Canada",
				point: [`Designed and Developed a microservice entirely from scratch that exposes REST APIs
				in Python for retrieving sales data and trending keywords from Amazon Search
				through Google Cloud Storage integration.`,
					`Provided insightful recommendations aimed at aiding informed decision-making
					processes for sponsoring new products on Amazon while concurrently reducing
					costs associated with non-relevant sponsored products.`]
			}
		],
		technologies: [pythonImg, reactImg, gcpImg, postgresImg]
	},
	{
		id: 4,
		companyName: "Sia Innovations",
		companyImage: siaImg,
		dateStarted: 'May 2022',
		dateEnded: 'Feb 2023',
		companyUrl: 'https://www.siainnovations.com/',
		isCurrentlyWorkingHere: false,
		jobTitle: "Software Developer",
		points: [
			{
				title: "Driver Management Portal for VA transport",
				point: [`Designed, developed, and implemented robust and secure APIs using Java and
				Spring Boot, including integration of comprehensive test cases. These API's provided
				features such as storing driver information, scheduling the pick up of driver.`,
					`Actively participated in technical discussions and code review meetings to ensure
					adherence to best practices and high-quality standards.`]
			},
			{
				title: "OpenText Crawler for Hydro-Quebec",
				point: [
					`Implemented a crawler to feed IBM Watson Discovery with the information stored on
					Open Text ecosystem.`
				]
			}
		],
		technologies: [javaImg, springImg, ibmDb2]
	}
]
