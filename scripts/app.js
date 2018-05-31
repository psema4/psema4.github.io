// simplified project template (psema4.github.io)

let index = [
		'Atomic OS',
		'Atomic VE',
		'Pine',
		'Dimension-N',
		'Outbrk',
		'Lost',
		'Scroller Builder',
		'Tic-Tac-Toe',
		'node-refserver',
		'UniCHIP8',
		'asphault',
		'JSDog',
		'spritefast',
	],
	
	tvars = {
		"Atomic OS": {
			category: 'Experimental SPA\'s',
			href: '#atomic-os',
			title: 'Atomic OS',
			status: 'stalled',
			type: 'experimental',
			stage: 'pre-alpha',
			sourceUrl: 'https://github.com/psema4/Atomic-OS',
			imageUrls: [
				'/images/atomos11.jpg',
				'/images/missing.png',
			],
			content: `<p>A self-contained microsystem & application development library.</p>
					  <p>Note: Atomic OS v3, rearchitected with multi-process support is in early development. A release is expected Q4, 2018.</p>`,
			seeAlso: [
				{ text: "Try Atomic OS v1", url: "http://atomos.sourceforge.net/aos-1.1/index.html" },
				{ text: "Try Atomic OS v2", url: "http://psema4.github.io/Atomic-OS/" },
				{ text: "Atomic OS v1.1 sources", url: "https://sourceforge.net/projects/atomos/" },
			],
		},
		"Atomic VE": {
			category: 'Experimental SPA\'s',
			href: '#atomic-ve',
			title: 'Atomic VE',
			status: 'stalled',
			type: 'experimental',
			stage: 'pre-alpha',
			sourceUrl: 'https://github.com/psema4/Atomic-VE',
			imageUrls: [
				'/images/missing.png',
			],
			content: 'Self Contained Visual HTML5 Editor',
			seeAlso: [
				{ text: 'Try Atomic VE', url: 'http://psema4.github.io/Atomic-VE/' },
				{ text: 'Atomic OS', url: '#atomic-os' }
			],
		},
		"Pine": {
			category: 'Games',
			href: '#pine',
			title: 'Pine',
			status: 'stalled',
			type: 'experimental',
			stage: 'alpha',
			sourceUrl: 'https://github.com/psema4/pine',
			imageUrls: [
				'/images/missing.png',
			],
			content: 'An HTML 5 gaming environment based on Raspberry Pi',
			seeAlso: [
				{ text: 'Client', url: 'https://github.com/psema4/pine-client' },
				{ text: 'Server', url: 'https://github.com/psema4/pine-server' },
				{ text: 'Distro', url: 'https://github.com/psema4/pine-distro' },
			]
		},
		"Dimension-N": {
			category: 'Games',
			href: '#dimension-n',
			title: 'Dimension-N',
			status: 'inactive',
			type: 'experimental',
			stage: 'pre-alpha',
			sourceUrl: 'https://github.com/psema4/dimension-n',
			imageUrls: [
				'/images/dimension-n-overview.png',
			],
			content: 'Proof-of-concept strategy for packaging, distributing & hosting multiplayer web games as npm packages',
			seeAlso: [
				{ text: 'Prototype game "Alpha"', url: 'https://github.com/psema4/dn-game-alpha' },
			]
		},
		"Outbrk": {
			category: 'Games',
			href: '#outbrk',
			title: 'Outbrk',
			status: 'inactive',
			type: 'experimental',
			stage: 'pre-alpha',
			sourceUrl: 'https://github.com/psema4/outbrk/tree/develop',
			imageUrls: [
				'/images/missing.png',
			],
			content: 'A tiny game engine for js13k',
			seeAlso: [
				{ text: 'Outbrk example', url: 'https://psema4.github.io/outbrk/' }
			],
		},
		"Lost": {
			category: 'Games',
			href: '#lost',
			title: 'Lost',
			status: 'inactive',
			type: 'experimental',
			stage: 'pre-alpha',
			sourceUrl: 'https://github.com/psema4/lost',
			imageUrls: [
				'/images/missing.png',
			],
			content: 'A web-based roguelike game for js13k 2017',
			seeAlso: [
				{ text: 'Play "Lost"', url: 'https://psema4.github.io/lost/' },
				{ text: 'js13k 2017', url: 'http://2017.js13kgames.com/' },
			],
		},
		"Scroller Builder": {
			category: 'Games',
			href: '#scroller-builder',
			title: 'Scroller Builder',
			status: 'inactive',
			type: 'experimental',
			stage: 'pre-alpha',
			sourceUrl: 'https://github.com/psema4/Scroller-Builder',
			imageUrls: [
				'/images/missing.png',
			],
			content: 'Build 2D Scroller games in HTML5',
		},
		"Tic-Tac-Toe": {
			category: 'Games',
			href: '#tic-tac-toe',
			title: 'Tic-Tac-Toe',
			status: 'inactive',
			type: 'experimental',
			stage: 'beta',
			sourceUrl: 'https://github.com/psema4/TicTacToe',
			imageUrls: [
				'/images/missing.png',
			],
			content: 'A prototype HTML5 game for the OUYA console',
		},
		"node-refserver": {
			category: 'Tools & Reference',
			href: '#node-refserver',
			title: 'node-refserver',
			status: 'inactive',
			type: 'reference',
			stage: 'stable',
			sourceUrl: 'https://github.com/psema4/node-refserver',
			imageUrls: [
				'/images/missing.png',
			],
			content: 'A basic reference Express.js and Socket.io server',
		},
		"UniCHIP8": {
			category: 'Tools & Reference',
			href: '#unichip8',
			title: 'UniCHIP8',
			status: 'active',
			type: 'reference',
			stage: 'alpha',
			sourceUrl: 'https://github.com/psema4/unichip8',
			imageUrls: [
				'/images/missing.png',
			],
			content: '<p>A CHIP-8 virtual machine for Unity 3D</p><p>Expected release: 2018-06-02</p>',
		},
		"asphault": {
			category: 'Tools & Reference',
			href: '#asphault',
			title: 'asphault',
			status: 'inactive',
			type: 'reference',
			stage: 'stable',
			sourceUrl: 'https://github.com/psema4/asphault',
			imageUrls: [
				'/images/missing.png',
			],
			content: 'A Hello, World repository to test Concrete CI features.',
			seeAlso: [
				{ text: 'Concrete CI', url: 'https://github.com/psema4/concrete' }
			]
		},
		"JSDog": {
			category: 'Tools & Reference',
			href: '#jsdog',
			title: 'JSDog',
			status: 'inactive',
			type: 'tools',
			stage: 'beta',
			sourceUrl: 'https://github.com/psema4/JSDog',
			imageUrls: [
				'/images/missing.png',
			],
			content: 'Simple JSDoc documentation generator',
			seeAlso: [
				{ text: 'Dogfood: Example Output', url: 'http://psema4.github.io/JSDog/' },
			],
		},
		"spritefast": {
			category: 'Tools & Reference',
			href: '#spritefast',
			title: 'spritefast',
			status: 'inactive',
			type: 'tools',
			stage: 'alpha',
			sourceUrl: 'https://github.com/psema4/spritefast',
			imageUrls: [
				'/images/missing.png',
			],
			content: 'A visual tool for creating quick and dirty CSS sprites',
		},
	}
;

function renderProjectIndex(target) {
	let templateHead = `<div class="content">`,
		templateFoot = `</div>`,
		rendered = '',
		categories = []
	;

	rendered += templateHead;
	
	// determine categories
	index.forEach((i) => { categories.push( tvars[i].category ); });
	categories = Array.from(new Set(categories)); // uniq

	// render project by category
	categories.forEach((c) => {
		rendered += `<h4>${c}</h4><ul>`;
		index.forEach((i) => {
			if (tvars[i].category === c) {
				let templateBody = `<li><a href="${tvars[i].href}" onclick="router('${tvars[i].href}');">${tvars[i].title}</a></li>`;
				rendered += templateBody;
			}
		});
		rendered += `</ul>`;
	});
	
	rendered += templateFoot;
	
	if (target) {
		let projectIndex = document.createElement('div');
		projectIndex.innerHTML = rendered;
		target.appendChild(projectIndex);
		
	} else {
		return rendered;
	}
}

function renderProject(tvars = {}, target) {
	let template = `<h2>${tvars.title}</h2>

		<div class="project-info">
			<div class="summary">
				<ul>
					<li><span class="label">Status: </span><span class="value">${tvars.status}</span></li>
					<li><span class="label">Type: </span><span class="value">${tvars.type}</span></li>
					<li><span class="label">Stage: </span><span class="value">${tvars.stage}</span></li>
					<li><span class="label">Source: </span><span class="value"><a href="${tvars.sourceUrl}">${tvars.sourceUrl}</a></span></li>
				</ul>
			</div>

			<div class="screenshots">`;
	
	tvars.imageUrls.forEach((i) => {
		template += `<img src="${i}" width="80%" title="Screenshot" alt="Screenshot"><br/>`;
	});

	template += `
			</div>
		</div>

		<h4>Description</h4>
		${tvars.content}
`;

		if (tvars.seeAlso && tvars.seeAlso.length > 0) {
			template += `<p>&nbsp;</p><h4>See Also</h4><ul>`;
			tvars.seeAlso.forEach((i) => {
				if (/^#/.test(i.url)) {
					template += `<li><a onclick="router('${i.url}')">${i.text}</a></li>`;
				} else {
					template += `<li><a href="${i.url}" target="_blank" rel="noopener noreferrer">${i.text}</a></li>`;
				}
			});
			template += `</ul>`;
		}

	
	if (target) {
		let project = document.createElement('div');
		project.innerHTML = template;
		target.appendChild(project);
		
	} else {
		return template
	}
}

function show(name) {
	if (name && tvars[name]) {
		let projectTarget = document.querySelector('#content');
		projectTarget.innerHTML = '';
		renderProject(tvars[name], projectTarget);
	}
}

function router(newRoute) {
	let project = false;
	const routeHash = (newRoute) ? newRoute : location.hash;

	for (p in tvars) {
		if (tvars[p].href && tvars[p].href == routeHash) {
			project = p;
		}
	}

	if (project) {
		location.hash = routeHash;
		show(project);
	}
}

window.addEventListener('hashchange', router);

window.addEventListener('load', () => {
	let indexTarget = document.querySelector('#index');
	renderProjectIndex(indexTarget)
	router();
});