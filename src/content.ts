import { mount } from 'svelte';
import './app.css';
import Content from './Content.svelte';

export enum SiteWhitelist {
	gmgnai = 'https://gmgn.ai/sol/token/'
}

const url = location.href;
if (url.startsWith(SiteWhitelist.gmgnai)) {
	const root = document.createElement('div');
	root.id = 'cabal-extension-root';
	document.body.appendChild(root);
	const mint = location.pathname.split('/sol/token/')[1];
	console.log('gmgn', mint);

	mount(Content, {
		target: root
	});
}
