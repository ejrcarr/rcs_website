import React, { useContext } from 'react';
import { AchievementCard } from './AchievementCard';
import LanguageContext from '../../context/language/languageContext';
import travel_img from '../../imgs/travel_card_img.jpeg';
import volunteer_img from '../../imgs/volunteer-card-img.jpg';
import athletic_img from '../../imgs/athletics_card.jpg';
import './Achievements.css';
import { Card } from './Card';

export const Achievements = () => {
	const languageContext = useContext(LanguageContext);
	const { active } = languageContext;
	const achievements = [
		{
			id: '0',
			icon: 'fas fa-university',
			title: '#1 Best Schools',
			spanishTitle: '#1 Mejores Escuelas ',
			english:
				'RCS was voted Best Middle School, Best High School in Person County for the past four years',
			spanish:
				'RCS estaba votada como la mejor escuela intermedia y la mejor escuela secundaria del condado de Person durante los últimos cuatro años',
		},
		{
			id: '1',
			icon: 'fas fa-graduation-cap',
			title: 'Graduation Rate',
			spanishTitle: 'Tasa de graduación',
			english:
				'RCS maintains a graduation rate consistently near 100% since 2006',
			spanish:
				'RCS mantiene una tasa de graduación constantemente cerca del 100%',
		},
		{
			id: '2',
			icon: 'fas fa-globe-americas',
			title: 'International Travel',
			spanishTitle: 'Viaje internacional',
			english:
				'RCS offers opportunity to study abroad with the RCS in Spain and Europe Trip',
			spanish:
				'RCS ofrece una oportunidad de estudiar en el extranjero con las programas de RCS in Spain and Europe Trip',
		},
		{
			id: '3',
			icon: 'fas fa-hands-helping',
			title: 'Community Focused',
			spanishTitle: 'Servicio de Comunidad',
			english:
				'RCS promotes community appreciation with programs like Bulldogs Care Day',
			spanish:
				'RCS promueve una comunidad junta con programas como Bulldogs Care Day',
		},
	];

	const achievementCards = [
		{
			id: '0',
			img: travel_img,
			title: 'RCS in Spain',
			spanishTitle: 'RCS en España',
			english:
				'RCS in Spain allows students to experience the culture and traditions they learn in class',
			spanish:
				'RCS en España se permite los estudiantes experimentar la cultura y las tradiciones que se aprenden en clase',
		},
		{
			id: '1',
			img: volunteer_img,
			title: 'Bulldog Care Day',
			spanishTitle: 'Día de Bulldog Care',
			english:
				'RCS holds an event every year to give back to the community with volunteer work',
			spanish: '',
		},
		{
			id: '2',
			img: athletic_img,
			title: 'Athletics',
			spanishTitle: 'Athletico',
			english:
				'Teams from RCS have consistently won Regional and Conference Championships',
			spanish: '',
		},
	];

	return (
		<div className='why-section'>
			<div className='achievements-title'>
				{active === null && (
					<h1>
						Why <span>RCS?</span>
					</h1>
				)}

				{active !== null && (
					<h1 lang='es'>
						¿Por qué <span>RCS?</span>
					</h1>
				)}
			</div>
			<div className='achievements-container'>
				{achievements.map((achievement) => (
					<AchievementCard
						key={achievement.id}
						icon={achievement.icon}
						title={active ? achievement.spanishTitle : achievement.title}
						description={active ? achievement.spanish : achievement.english}
					/>
				))}
			</div>
			<div className='card-wrapper'>
				{achievementCards.map((card) => (
					<Card
						key={card.id}
						image={card.img}
						title={active ? card.spanishTitle : card.title}
						description={active ? card.spanish : card.english}
					/>
				))}
			</div>
		</div>
	);
};
