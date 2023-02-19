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

    const start = document.createElement("div")
    start.id = "start"
    start.innerHTML = "...dive in..."
    document.body.appendChild(start)

    window.addEventListener('click', () => {
        if (!audio) {
            document.body.removeChild(start);
            audio = new Audio(trainAmbient);
            audio.volume = 0.3;
            audio.loop = true;
            audio.play();

            mainCanvas.getCanvas().style.background = "linear-gradient(180deg, rgba(50,104,255,1) 0%, rgba(156,230,255,1) 100%)"
            mainScene.render();
            mainScene.compute();
        }
    });
}
