import React from 'react';
import { NewsCard } from './NewsCard';
import './NewsCards.css';

export const NewsCards = () => {
	const newsArticles = [
		{
			id: '1',
			img: 'https://3e236b279fe991541c50-44eaa1c82e17f74482c9114bb6de11e4.ssl.cf1.rackcdn.com/article/image/large_6323a1dc-4690-438b-a38e-beafe9fc91ad.jpg',
			title: `RCS Personal Finance Class Sparks Alumna's Career Interest`,
			content:
				'River Ellis, a 2015 graduate of Roxboro Community School, (RCS) has some important advice for current high school students. “High school can be tough. College can be tough. Life ...',
		},
		{
			id: '2',
			img: 'https://3e236b279fe991541c50-44eaa1c82e17f74482c9114bb6de11e4.ssl.cf1.rackcdn.com/article/image/large_a2aa8385-c0bc-4c6e-b70f-2fbf5026909e.jpg',
			title: 'What RCS Students Are Learning This Week',
			content: `Biology students in Mrs. Bailey's class work on a protein synthesis project. Dr. Davis's seniors make last minute adjustments to their Senior speeches. 7th and 8th grade Band...`,
		},
		{
			id: '3',
			img: 'https://cmsv2-assets.apptegy.net/uploads/2798/file/104485/1d8af95b-546f-4d0a-8777-caa9e71bc35e.png',
			title: `What RCS Students Are Learning This Week - 11/28-12/02`,
			content: `Mrs. King's AP US History students learn more about Antebellum reformers through a “speed dating” activity. 6th graders in Mrs. Stultz's Academic Success class enjoy time to rea...`,
		},
		{
			id: '4',
			img: 'https://3e236b279fe991541c50-44eaa1c82e17f74482c9114bb6de11e4.ssl.cf1.rackcdn.com/article/image/large_a2aa8385-c0bc-4c6e-b70f-2fbf5026909e.jpg',
			title: `What RCS Students Are Learning This Week - 11/14-11/18`,
			content: `Mrs. Conner's Earth and Environmental Science students participated in an escape room activity to review concepts of the Earth's layers, plate tectonics, the rock cycle, and weathe...`,
		},
	];

	return (
		<div className='newscards-wrapper'>
			{newsArticles.map((news) => (
				<NewsCard
					key={news.id}
					img={news.img}
					title={news.title}
					// content={news.content}
				/>
			))}
		</div>
	);
};
