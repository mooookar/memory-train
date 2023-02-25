import { Prop } from './props';

export class Train {
    constructor(canvas, position) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.pos = position;

        this.props = new Array(~~(this.canvas.width / 100))
            .fill(undefined)
            .map(() => new Prop(canvas, { ...this.pos }));
    }

    draw = () => {
        //wheels
        this.ctx.fillStyle = '#00000066';
        this.ctx.fillRect(0, this.pos.y + 42, this.canvas.width, 15);
        this.ctx.fillStyle = '#888';
        this.ctx.fillRect(0, this.pos.y + 48, this.canvas.width, 3);
        this.ctx.fillStyle = '#000';
        this.ctx.beginPath();
        this.ctx.arc(
            this.canvas.width / 10,
            this.pos.y + 30,
            20,
            0,
            2 * Math.PI
        );
        this.ctx.arc(
            this.canvas.width - this.canvas.width / 10,
            this.pos.y + 30,
            20,
            0,
            2 * Math.PI
        );
        this.ctx.fillRect(this.canvas.width / 10 + 30, this.pos.y + 25, 50, 15);
        this.ctx.fill();
        this.ctx.closePath();

        //wall + windows
        this.ctx.fillStyle = '#000';
        this.ctx.roundRect(
            this.canvas.width / (3 / 2),
            this.pos.y - 125,
            100,
            16,
            [10, 10, 0, 0]
        );
        this.ctx.fill();
        this.ctx.fillRect(0, this.pos.y - 113, this.canvas.width, 3);
        this.ctx.fillStyle = '#77541c';
        this.ctx.fillRect(0, this.pos.y - 110, this.canvas.width, 11);
        this.ctx.fillStyle = '#9a7232';
        this.ctx.fillRect(0, this.pos.y - 100, this.canvas.width, 30);
        this.ctx.fillRect(0, this.pos.y - 30, this.canvas.width, 30);
        for (let i = -this.canvas.width / 2; i < this.canvas.width; i += 100) {
            this.ctx.fillRect(i, this.pos.y - 100, 20, 100);
        }
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(0, this.pos.y + 10, this.canvas.width, 20);

        //props
        this.props.forEach((prop) => prop.draw());

        //rails
        this.ctx.fillStyle = '#aaa';
        this.ctx.fillRect(0, this.pos.y - 85, this.canvas.width, 3);
        this.ctx.fillStyle = '#ccc';
        for (let i = -this.canvas.width / 2; i < this.canvas.width; i += 150) {
            this.ctx.fillRect(i, this.pos.y - 100, 3, 20);
        }

        // seats
        this.ctx.fillStyle = '#662b12';
        this.ctx.fillRect(0, this.pos.y - 10, this.canvas.width, 11);

        this.ctx.beginPath();
        this.ctx.fillStyle = '#1d482e';
        for (let i = -this.canvas.width / 2; i < this.canvas.width; i += 100) {
            this.ctx.roundRect(i, this.pos.y - 40, 97, 30, [10, 10, 0, 0]);
        }
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = '#387651';
        for (let i = -this.canvas.width / 2; i < this.canvas.width; i += 100) {
            this.ctx.roundRect(i, this.pos.y - 14, 97, 8, [5, 5, 0, 0]);
        }
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.fillStyle = '#231d18';
        this.ctx.fillRect(0, this.pos.y, this.canvas.width, 15);
    };
}
