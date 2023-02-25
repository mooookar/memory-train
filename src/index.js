import './style.css';
import trainAmbient from './train_ambient.mp3';

import { MainCanvas } from './canvas';
import { MainScene } from './scene';

document.addEventListener('DOMContentLoaded', () => createDesktop());

let audio = null;

function createDesktop() {
    const mainCanvas = new MainCanvas();
    mainCanvas.init();
    const mainScene = new MainScene(mainCanvas.getCanvas());

    // window.addEventListener('resize', () => {
    //     mainCanvas.resizeCanvas();
    // });

    const info = document.createElement('div');
    info.id = 'info';
    const nameDiv = document.createElement('div');
    nameDiv.id = 'name';
    const dateDiv = document.createElement('div');
    dateDiv.id = 'date';
    const descriptionDiv = document.createElement('div');
    descriptionDiv.id = 'description';
    info.appendChild(nameDiv);
    info.appendChild(dateDiv);
    info.appendChild(descriptionDiv);

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;

    const response = fetch(
        `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/deaths/${month}/${day}`
    )
        .then((res) => res.json())
        .then((data) => {
            const { deaths } = data;
            const { year, pages } = deaths[2];
            const { normalizedtitle: name, extract: description } = pages[0];

            dateDiv.innerText = "Died " +  new Intl.DateTimeFormat(navigator.language, {
                dateStyle: 'long',
            }).format(new Date(`${year}-${month}-${day}`));
            nameDiv.innerText = name;
            descriptionDiv.innerText = description;
        });

    const start = document.createElement('div');
    start.id = 'start';
    start.innerHTML = '...dive in...';
    document.body.appendChild(start);

    window.addEventListener('click', () => {
        if (!audio) {
            document.body.removeChild(start);
            audio = new Audio(trainAmbient);
            audio.volume = 0.3;
            audio.loop = true;
            audio.play();
            mainCanvas.getCanvas().style.background =
                'linear-gradient(180deg, rgba(50,104,255,1) 0%, rgba(156,230,255,1) 100%)';
            mainScene.render();
            mainScene.compute();

            // document.body.appendChild(info);
        }
    });
}
