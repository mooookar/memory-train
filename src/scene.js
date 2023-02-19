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
    }

    compute = () => {
        this.player.compute();

        setTimeout(this.compute, 30);
    };

    render = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.outside.draw();
        this.outside.compute();

        this.train.draw();
        this.player.draw();

        requestAnimationFrame(this.render);
    };
}
