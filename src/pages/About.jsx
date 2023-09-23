import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import BannerBackgroundPropo from '../assets/Banner2.png';
import data from '../data/dataAbout';
import '../style/style.css'
import Dropdown from '../components/Dropdown';

export default function About() {
  return (
		<>
			<Header />
			<Banner img={BannerBackgroundPropo} text="" />
			{data.map((item) => (
				<Dropdown
					key={item.id}
					titles={item.title}
					descriptions={item.description}
				/>
			))}
			<Footer />
		</>
	);
}