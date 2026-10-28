const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
const labs = [
['Bio Lab','NATURE / LIFE / RESPONSIBILITY','From gardening and zoology to cooking and smart recycling, children discover the connections between life, resources and everyday choices.','A question to explore: how does food travel from the garden to our plate?','#759b6b'],
['Urban Lab','DESIGN / COMMUNITY / SYSTEMS','Architecture, design, biomimicry, transport, financial literacy and leadership. The city becomes a context for understanding how we live together.','A question to explore: what would a neighbourhood designed for children look like?','#24556a'],
['Flourishing Lab','BALANCE / RELATIONSHIPS / PURPOSE','Wellbeing, health, culture, physical education and personal development. A space for self-awareness and care for others.','A question to explore: what helps us feel well together?','#4a6d41'],
['Technology Lab','TECHNOLOGY / ENGINEERING / CREATION','Robotics, programming, electronics, 3D printing and IoT projects. Technology becomes a tool for research and creative problem-solving.','A question to explore: can we build a system that saves water?','#24556a'],
['Media Lab','VOICE / EXPRESSION / DIGITAL CULTURE','Podcasting, photography, video production, graphic design, animation and music. Children express ideas and learn to think critically about the messages around them.','A question to explore: how can we tell the story of our community?','#24556a'],
['LEGO Lab','BUILDING / LOGIC / COLLABORATION','From LEGO Classic to Technic and LEGO Education, children build with their hands and minds, test ideas and improve their prototypes.','A question to explore: what makes a bridge stronger?','#24556a']
];
const tabs = Array.from(document.querySelectorAll('[data-lab]'));
function selectLab(index) { const [title,category,description,example,color] = labs[index]; tabs.forEach((tab,i) => {tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;}); const panel=document.querySelector('#lab-panel'); panel.setAttribute('aria-labelledby',`lab-${index}`); panel.style.backgroundColor=color; panel.querySelector('h3').textContent=title; panel.querySelector('.eyebrow').textContent=category; document.querySelector('#lab-description').textContent=description; document.querySelector('#lab-example').textContent=example; }
tabs.forEach((tab,i) => {tab.addEventListener('click',()=>selectLab(i));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight'||e.key==='ArrowDown')next=(i+1)%tabs.length;if(e.key==='ArrowLeft'||e.key==='ArrowUp')next=(i-1+tabs.length)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();selectLab(next);tabs[next].focus();}});});
document.querySelector('#partner-form').addEventListener('submit', e => {
 e.preventDefault();
 const data = new FormData(e.currentTarget);
 const subject = `HPL Schools partnership — ${data.get('company')}, ${data.get('location')}`;
 const body = `Hello Olimpia,\n\nI would like to explore an HPL Schools partnership.\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')}\nLocation: ${data.get('location')}\n\nAbout the project:\n${data.get('message') || 'I would welcome an exploratory conversation.'}\n\nThank you,\n${data.get('name')}`;
 window.location.href = `mailto:olimpia@olimpiamesa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 document.querySelector('#form-status').textContent = 'Your enquiry is ready for your email app. If it does not open, please email olimpia@olimpiamesa.com directly.';
});
document.querySelector('#year').textContent = new Date().getFullYear();
