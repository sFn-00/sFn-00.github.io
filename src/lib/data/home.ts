import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Szymon';

export const lastName = 'Szafoni';

export const description =
	'Hi I am Fullstack Developer based in Łódź, Poland. I spend most of the working in the Java language currently focused on being proficient with frontend libraries. I am also passionate in algortihms which I found pretty exciting to do in my freetime.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/sFn-00/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/szymon-szafoni-226a0922b/'
	},

	{
		platform: Platform.Email,
		link: 'szymon.s@poczta.onet.eu'
	},
];

export const skills = getSkills('java', 'spring','sql', 'html', 'css', 'reactjs', 'vuejs',);
