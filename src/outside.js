export class Outside {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.gradient = this.ctx.createLinearGradient(
            0,
            0,
            0,
            this.canvas.height / 2
        );
        this.gradient.addColorStop(0, '#2c8ce7');
        this.gradient.addColorStop(0.5, '#5cb8f7');
        this.gradient.addColorStop(1, '#b0e5fb');

        this.fieldArray = [];
        for (let i = 0; i < this.canvas.height / 28; i++) {
            let elem = '';
            for (let j = 0; j < this.canvas.width; j++) {
                elem += Math.floor((Math.random() + 0.3) * 1.8);
            }
            this.fieldArray.push(elem);
        }
    }

    compute = () => {
        for (let i = 0; i < this.fieldArray.length; i++) {
            let j = i + 1;
            this.fieldArray[i] =
                this.fieldArray[i].substring(j) +
                this.fieldArray[i].substring(0, j);
        }
    };

    draw = () => {
        // console.time('test');
        // this.ctx.fillStyle = this.gradient;
        // this.ctx.fillRect(
        //     0,
        //     0,
        //     this.canvas.width,
        //     this.canvas.height / (10 / 8)
        // );
        this.ctx.fillStyle = '#579533';
        this.ctx.fillRect(
            0,
            this.canvas.height / (10 / 8),
            this.canvas.width,
            this.canvas.height / (10 / 2)
        );
        this.ctx.fillStyle = '#1b440b';
        for (let i = 0; i < this.fieldArray.length; i++) {
            for (let j = 0; j < this.fieldArray[i].length; j++) {
                if (this.fieldArray[i][j] >= 1) {
                    this.ctx.fillRect(
                        j,
                        this.canvas.height / (10 / 8) + i * 6,
                        1,
                        -this.fieldArray[i][j] - i / 3
                    );
                }
            }
        }

        // console.timeEnd('test');
        // console.log(this.fieldArray.length * this.fieldArray[0].length)
    };
}
