export class Prop {
    constructor(canvas, position) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.pos = { ...position, x: Math.random() * canvas.width - 20 };
        this.type = Math.ceil(Math.random() * 5);
        console.log(this.type);
    }

    draw = () => {
        switch (this.type) {
            case 1: {
                this.ctx.beginPath();
                this.ctx.fillStyle = '#331111';
                this.ctx.fillRect(this.pos.x, this.pos.y - 85, 40, -12);
                this.ctx.fillStyle = '#552222';
                this.ctx.fillRect(this.pos.x, this.pos.y - 85, 30, -12);
                this.ctx.moveTo(this.pos.x + 10, this.pos.y - 90);
                this.ctx.lineTo(this.pos.x + 10, this.pos.y - 87);
                this.ctx.lineTo(this.pos.x + 20, this.pos.y - 87);
                this.ctx.lineTo(this.pos.x + 20, this.pos.y - 90);
                this.ctx.strokeStyle = 'yellow';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
                this.ctx.closePath();
                break;
            }
            case 2: {
                this.ctx.beginPath();
                this.ctx.moveTo(this.pos.x, this.pos.y - 85);
                this.ctx.lineTo(this.pos.x + 1, this.pos.y - 89);
                this.ctx.lineTo(this.pos.x + 5, this.pos.y - 94);
                this.ctx.lineTo(this.pos.x + 15, this.pos.y - 99);
                this.ctx.lineTo(this.pos.x + 20, this.pos.y - 97);
                this.ctx.lineTo(this.pos.x + 25, this.pos.y - 98);
                this.ctx.lineTo(this.pos.x + 35, this.pos.y - 92);
                this.ctx.lineTo(this.pos.x + 38, this.pos.y - 88);
                this.ctx.lineTo(this.pos.x + 35, this.pos.y - 85);
                this.ctx.fillStyle = '#222255';
                this.ctx.fill();
                this.ctx.closePath();
                this.ctx.beginPath();
                this.ctx.moveTo(this.pos.x + 25, this.pos.y - 97);
                this.ctx.lineTo(this.pos.x + 38, this.pos.y - 88);
                this.ctx.lineTo(this.pos.x + 35, this.pos.y - 92);
                this.ctx.lineTo(this.pos.x + 38, this.pos.y - 85);
                this.ctx.lineTo(this.pos.x + 28, this.pos.y - 85);
                this.ctx.fillStyle = '#000';
                this.ctx.fill();
                this.ctx.closePath();
                break;
            }
            case 3: {
                this.ctx.beginPath();
                this.ctx.fillStyle = '#000000';
                this.ctx.fillRect(this.pos.x, this.pos.y - 85, 40, -10);
                this.ctx.fillStyle = '#222222';
                this.ctx.fillRect(this.pos.x, this.pos.y - 85, 30, -10);
                this.ctx.moveTo(this.pos.x + 10, this.pos.y - 89);
                this.ctx.lineTo(this.pos.x + 10, this.pos.y - 87);
                this.ctx.lineTo(this.pos.x + 20, this.pos.y - 87);
                this.ctx.lineTo(this.pos.x + 20, this.pos.y - 89);
                this.ctx.strokeStyle = 'orange';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
                this.ctx.closePath();
                break;
            }
            case 4: {
                this.ctx.beginPath();
                this.ctx.fillStyle = '#aa0000';
                this.ctx.fillRect(this.pos.x, this.pos.y - 85, 10, -15);
                this.ctx.fillStyle = '#880000';
                this.ctx.fillRect(this.pos.x + 7, this.pos.y - 85, 3, -15);
                this.ctx.fillStyle = '#aaa';
                this.ctx.fillRect(this.pos.x, this.pos.y - 85, 10, -2);
                this.ctx.fillRect(this.pos.x, this.pos.y - 100, 10, 2);
                this.ctx.closePath();
                break;
            }
            case 5: {
                this.ctx.beginPath();
                this.ctx.fillStyle = '#006600';
                this.ctx.fillRect(this.pos.x, this.pos.y - 85, 30, -15);
                this.ctx.fillStyle = '#004400';
                this.ctx.fillRect(this.pos.x + 25, this.pos.y - 85, 5, -15);
                this.ctx.moveTo(this.pos.x, this.pos.y - 95);
                this.ctx.lineTo(this.pos.x + 11, this.pos.y - 90);
                this.ctx.lineTo(this.pos.x + 14, this.pos.y - 90);
                this.ctx.lineTo(this.pos.x + 30, this.pos.y - 95);
                this.ctx.strokeStyle = '#004400';
                this.ctx.stroke();
                this.ctx.closePath();
                break;
            }
            default: {
                break;
            }
        }
    };
}
