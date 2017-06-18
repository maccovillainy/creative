export default class Slider {
  constructor(images) {
    this.images = images || [];
    this.maxImages = this.images.length;
    this.content = document.querySelector('.content img');
    this.next = document.querySelector('.slider__control--right');
    this.prev = document.querySelector('.slider__control--left');
    this.change = true;
    this.id = 1;
    this.buttons = document.querySelector('.buttons-container__row');
    this.buttons.innerHTML = this.images.map((obj, i) => `
      <button data-id=${obj.id} class="${i === 0 && 'active-button'} button buttons-container__button">${obj.text}</button>
    `).join('');
    this.activeButton = document.querySelector(`.buttons-container__row button[data-id="1"]`);
    this.buttons.addEventListener('click', e => this.onButton(e));
    this.next.addEventListener('click', (e) => {
      e.preventDefault();
      this.getNext()
    });
    this.prev.addEventListener('click', (e) => {
      e.preventDefault();
      this.getPrev()
    });
    this.content.onload = () => this.content.removeAttribute('style');
    this.content.addEventListener('transitionend', () => this.changePath());
  }

  onButton(e) {
    let target = e.target;
    while (target != this.buttons) {
      if (target.tagName.toLowerCase() === 'button') {
        let index = target.getAttribute('data-id');
        if (index != this.id) {
          this.changeImage(index)
        }
        return;
      }
      target = target.parentNode;
    }
  }

  getNext() {
    if (this.id >= this.maxImages) {
      return this.changeImage(1);
    }
    this.changeImage(+this.id + 1);
  }

  getPrev() {
    if (this.id <= 1) {
      return this.changeImage(this.maxImages);
    }
    this.changeImage(this.id - 1);
  }

  changePath() {
    if (!this.change) {
      this.content.setAttribute('src', `img/${this.images.find(obj => obj.id == this.id).name}`);
      this.change = true;
    }
  }

  changeImage(id) {
    this.change = false;
    this.id = id;
    this.content.style.opacity = .8;
    this.activeButton.classList.remove('active-button');
    this.activeButton = document.querySelector(`.buttons-container__row button[data-id="${id}"]`);
    this.activeButton.className += ' active-button';
  }
}
