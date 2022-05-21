const projects = [
  {
    id: '1',
    title: 'project-1',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    live: 'https://ababaug.github.io/mobile-portfolio/',
    source: 'https://github.com/ababaug/mobile-portfolio',
  },
  {
    id: '2',
    title: 'project-2',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    live: 'https://ababaug.github.io/mobile-portfolio/',
    source: 'https://github.com/ababaug/mobile-portfolio',
  },
  {
    id: '3',
    title: 'project-3',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    image: 'https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    live: 'https://ababaug.github.io/mobile-portfolio/',
    source: 'https://github.com/ababaug/mobile-portfolio',
  },
  {
    id: '4',
    title: 'project-4',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    image: 'https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    live: 'https://facebook.com',
    source: 'https://github.com/ababaug/mobile-portfolio',
  },
];
const myModal = document.querySelector('#myModal');
const closeModal = document.querySelector('.btn-close');
closeModal.addEventListener('click', () => {
  myModal.style.display = 'none';
});
document.querySelectorAll('.see-project').forEach((element) => {
  element.addEventListener('click', () => {
    const projectId = parseInt(element.getAttribute('data-project'), 10);
    const title = document.querySelector('.modal-title');
    const description = document.querySelector('.pop-up-paragraph');
    const image = document.querySelector('.pop-image');
    title.textContent = projects[projectId].title;
    description.textContent = projects[projectId].description;
    image.src = projects[projectId].image;
    const seeLive = document.querySelector('#seelive');
    seeLive.href = projects[projectId].live;
    const seeSource = document.querySelector('#seeSource');
    seeSource.href = projects[projectId].source;

    myModal.style.display = 'block';
  });
});