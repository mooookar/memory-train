export class Player {
    constructor(canvas, name, position) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.pos = position;
        this.destination = { ...position };
        this.name = name;
        this.distance = 0;
        this.shouldMove = false;
        this.lookLeft = false;
        this.oscillator = 0;

        window.addEventListener('click', this.handleClick);
    }

    handleClick = (evt) => {
        this.shouldMove = true;
        if (evt.clientX - this.canvas.offsetLeft < this.pos.x) {
            this.lookLeft = true;
        } else {
            this.lookLeft = false;
        }
        this.destination.x = evt.clientX - this.canvas.offsetLeft;
        this.destination.y = evt.clientY;
    };

    handleKeyPress = (event) => {};

    compute = () => {
        //move in 1d

        this.distance = Math.abs(this.pos.x - this.destination.x);
        if (this.distance > 5) {
            this.pos.x =
                this.pos.x +
                (this.destination.x - this.pos.x) / (this.distance / 5);
            this.oscillator = Math.sin(Date.now() / 50);
        } else {
            this.shouldMove = false;
            this.oscillator = 0;
        }

        // move in 2d
        //
        // if (this.shouldMove) {
        //     console.log("compute")
        //     this.distance = ~~Math.hypot(
        //         Math.abs(this.pos.x - this.destination.x),
        //         Math.abs(this.pos.y - this.destination.y)
        //     );
        //     if (this.distance > 2) {
        //         this.pos.x =
        //             this.pos.x +
        //             (this.destination.x - this.pos.x) / (this.distance / 5);
        //         this.pos.y =
        //             this.pos.y +
        //             (this.destination.y - this.pos.y) / (this.distance / 5);
        //     } else {
        //         this.shouldMove = false;
        //     }
        // }
    };

    draw = () => {
        //shadow
        this.ctx.beginPath();
        this.ctx.fillStyle = '#00000044';
        this.ctx.fillRect(this.pos.x - 15, this.pos.y, 30, 10);
        this.ctx.closePath();

        //pants
        this.ctx.beginPath();
        this.ctx.fillStyle = '#428099';
        this.ctx.fillRect(this.pos.x - 10, this.pos.y - 25, 20, 10);
        this.ctx.fillRect(
            this.pos.x - 10,
            this.pos.y - 20,
            5,
            23
        );
        this.ctx.fillRect(
            this.pos.x + 5,
            this.pos.y - 20,
            5,
            23
        );
        this.ctx.fillStyle = '#FFF';
        this.ctx.fillRect(
            this.pos.x - 10,
            this.pos.y + this.oscillator * 3,
            5,
            5
        );
        this.ctx.fillRect(
            this.pos.x + 5,
            this.pos.y - this.oscillator * 3,
            5,
            5
        );
        this.ctx.closePath();

        //backhand
        this.ctx.fillStyle = '#edc9ad';
        this.ctx.fillRect(this.pos.x + 10, this.pos.y - 35, 5, 20);
        this.ctx.closePath();

        //body
        this.ctx.beginPath();
        this.ctx.fillStyle = '#FFF';
        this.ctx.fillRect(this.pos.x - 10, this.pos.y - 35, 20, 10);
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.fillStyle = '#edc9ad';
        this.ctx.fillRect(this.pos.x - 5, this.pos.y - 35, 10, 5);
        this.ctx.closePath();

        //head
        this.ctx.beginPath();
        this.ctx.fillStyle = '#ff7700';
        this.ctx.fillRect(
            this.pos.x - (this.lookLeft ? 10 : 15),
            this.pos.y - 60,
            25,
            20
        );
        this.ctx.fillRect(
            this.pos.x + (this.lookLeft ? -13 : 8),
            this.pos.y - 63,
            5,
            5
        );
        this.ctx.fillStyle = '#edc9ad';
        this.ctx.fillRect(this.pos.x - 10, this.pos.y - 55, 20, 21);
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(
            this.pos.x - (this.lookLeft ? 10 : 5),
            this.pos.y - 45,
            5,
            5
        );
        this.ctx.fillRect(
            this.pos.x + (this.lookLeft ? 0 : 5),
            this.pos.y - 45,
            5,
            5
        );
        this.ctx.closePath();

        //fronthand
        this.ctx.fillStyle = '#edc9ad';
        this.ctx.fillRect(this.pos.x - 15, this.pos.y - 35, 5, 20);
        this.ctx.closePath();
    };
}
