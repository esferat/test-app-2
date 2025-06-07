class CircleGradient {
  private _context: CanvasRenderingContext2D;
  private grd: CanvasGradient | null = null;
  private ap: number | null = null;
  private af: number | null = null;
  private xp: number | null = null;
  private yp: number | null = null;
  private xf: number | null = null;
  private yf: number | null = null;
  private apRad: number | null = null;
  private afRad: number | null = null;

  private requestId: number | null = null;

  private readonly width: number;
  private readonly height: number;

  private rad = Math.PI / 180;
  private angleIncrement = 0;
  private R = 180;
  private colorsLength = 5;
  private A = 360 / this.colorsLength;

  constructor(container: HTMLCanvasElement) {
    this._context = container.getContext('2d')!;
    this.width = container.width = container.clientWidth;
    this.height = container.height = container.clientHeight;
  }

  draw() {
    this._context.lineWidth = 10;
    this._context.clearRect(0, 0, this.width, this.height);

    if (this.angleIncrement >= 360) {
      this.angleIncrement = 0;
    } else {
      this.angleIncrement++;
    }

    for (let i = 0; i < this.colorsLength; i++) {
      this.ap = this.A * i;
      this.af = this.A * (i + 1) + 0.5;

      this.apRad = this.rad * this.ap;
      this.afRad = this.rad * this.af;

      this._context.beginPath();
      this._context.arc(this.width / 2, this.height / 2, this.R, this.apRad, this.afRad);

      this.xp = this.width / 2 + this.R * Math.cos(this.apRad);
      this.yp = this.height / 2 + this.R * Math.sin(this.apRad);
      this.xf = this.width / 2 + this.R * Math.cos(this.afRad);
      this.yf = this.height / 2 + this.R * Math.sin(this.afRad);

      this.grd = this._context.createLinearGradient(this.xp, this.yp, this.xf, this.yf);
      this.grd.addColorStop(0, 'hsl(' + (this.ap + this.angleIncrement) + ',100%,50%)');
      this.grd.addColorStop(1, 'hsl(' + (this.af + this.angleIncrement) + ',100%,50%)');

      this._context.strokeStyle = this.grd;
      this._context.stroke();
    }

    this.requestId = requestAnimationFrame(() => {
      this.draw();
    });
  }

  public start() {
    this.requestId = requestAnimationFrame(() => {
      this.draw();
    });
    console.log('start', this.requestId);
  }

  public stop() {
    if (this.requestId) {
      cancelAnimationFrame(this.requestId);
      console.log('stop', this.requestId);
    }
  }
}

export default CircleGradient;
