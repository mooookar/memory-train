import { Player } from './player';
import { Train } from './train';
import { Outside } from './outside';

export class MainScene {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.player = new Player(canvas, 'Vasya', {
            x: this.canvas.width / 2,
            y: this.canvas.height / (24 / 21),
        });
        this.train = new Train(canvas, {
            x: this.canvas.width / 2,
            y: this.canvas.height / (24 / 21),
        });
        this.outside = new Outside(canvas);

        this.lang =
            navigator.languages && navigator.languages.length
                ? navigator.languages[0]
                : navigator.userLanguage ||
                  navigator.language ||
                  navigator.browserLanguage ||
                  'en';

        console.log(this.lang);
    }

    compute = () => {
        this.player.compute();

        setTimeout(this.compute, 30);
    };

    render = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = '#FFF';
        this.ctx.font = 'normal 16px monospace';
        this.ctx.fillText(
            new Intl.DateTimeFormat(this.lang, {
                dateStyle: 'long',
            }).format(Date.now()),
            50,
            60
        );

        this.outside.draw();
        this.outside.compute();

        this.train.draw();
        this.player.draw();

        requestAnimationFrame(this.render);
    };
}
