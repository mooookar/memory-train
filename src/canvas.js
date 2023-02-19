let self = null;

export class MainCanvas {
    constructor() {
        if (self !== null) {
            return self;
        }

        this.canvas = null;
        this.context = null;
        this.resizeTimeout = null;
    }

    static get() {
        if (self === null) {
            self = new MainCanvas();
        }

        return self;
    }

    init = () => {
        console.log('canvas init');
        const cnvs = document.createElement('canvas');
        cnvs.id = "canvas"
        cnvs.width = innerWidth;
        cnvs.height = innerHeight;
        document.body.appendChild(cnvs);
        const context = cnvs.getContext('2d');

        this.canvas = cnvs;
        this.context = context;

        return self;
    };

    // resizeCanvas = () => {
    //     if (this.resizeTimeout) {
    //         clearTimeout(this.resizeTimeout);
    //     }

    //     this.resizeTimeout = setTimeout(() => {
    //         console.log('resize canvas');
    //         this.canvas.width = window.innerWidth;
    //         this.canvas.height = window.innerHeight;
    //     }, 500);
    // };

    getCanvas = () => {
        return this.canvas;
    };

    getContext = () => {
        return this.context;
    };
}
