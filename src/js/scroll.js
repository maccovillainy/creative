class Scroll {
  constructor(maxPages) {
    this.currentPos = 1;
    this.maxPages = maxPages || 4;
    this.up = document.querySelector('.scroll-control__up');
    this.info = document.querySelector('.scroll-control__info');
    this.down = document.querySelector('.scroll-control__down');
    this.up.addEventListener('click', (e) => {
      e.preventDefault();
      this.getUp()
    });
    this.down.addEventListener('click', (e) => {
      e.preventDefault();
      this.getDown()
    });
    this.event = true;
    onePageScroll(".main", {
      animationTime: 1000,
      beforeMove: this.beforeMove.bind(this),
      afterMove: this.afterMove.bind(this),
      pagination: false,
    });

    document.addEventListener('scroll', () => {
      if (this.currentPos != this.maxPages) {
        window.scrollTo(0, 0);
      }
      if (window.pageYOffset === 0 && this.currentPos == this.maxPages) {
        document.addEventListener('mousewheel', _mouseWheelHandler);
        document.addEventListener('DOMMouseScroll', _mouseWheelHandler);
        document.onkeydown = _keydownHandler;
      }
    });
  }

  getUp() {
    if (this.currentPos <= 0) {
      return false
    }
    moveUp(".main");
  }

  getDown() {
    if (this.currentPos >= this.maxPages) {

      return false
    }
    moveDown(".main");
  }

  changeInfo(index) {
    this.info.innerHTML = `${index}/${this.maxPages}`;
  }

  beforeMove(index) {
    this.currentPos = index;
    this.changeInfo(this.currentPos);
    if (!this.event) {
      document.addEventListener('mousewheel', _mouseWheelHandler);
      document.addEventListener('DOMMouseScroll', _mouseWheelHandler);
      document.onkeydown = _keydownHandler;
    }
  }

  afterMove(index) {
    if (index == this.maxPages) {
      document.removeEventListener('mousewheel', _mouseWheelHandler);
      document.removeEventListener('DOMMouseScroll', _mouseWheelHandler);
      document.onkeydown = () => {
      };
      window.scrollTo(0, 1);
      this.event = false;
      return
    }
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0);
    }
  }
}

export default Scroll;