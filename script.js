let receipt = document.querySelector('.receipt '),
  timerExtra = document.querySelector('.header__timer-extra'),
  speed = 40;

window.addEventListener('load', () => {
  receipt.classList.remove('active')
  receipt.style.display = 'none';

  start()

})



function start() {
  if (timerExtra.innerHTML < 100) {
    timerExtra.innerHTML++
  }

  if (timerExtra.innerHTML >= 50) {
    speed = 100;
  }
  setTimeout(() => {
    start()
  }, speed);
}

let btns = document.querySelectorAll('.main__product-btn')

const product = {
  plainBurger: {
    name: 'Гамбургер простой',
    price: 10000,
    amount: 0,
    kcall: 500,
    get totalSum() {
      return this.price * this.amount
    },
    get totalKcall() {
      return this.kcall * this.amount
    }
  },
  freshBurger: {
    name: 'Гамбургер FRESH',
    price: 20500,
    amount: 0,
    kcall: 500,
    get totalSum() {
      return this.price * this.amount
    },
    get totalKcall() {
      return this.kcall * this.amount
    }
  },
  freshCombo: {
    name: 'FRESH COMBO',
    price: 31900,
    amount: 0,
    kcall: 500,
    get totalSum() {
      return this.price * this.amount
    },
    get totalKcall() {
      return this.kcall * this.amount
    }
  }

}

for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];

  btn.addEventListener("click", function () {
    plusProduct(this);
  })
}


function plusProduct(btn) {
  let parent = btn.closest('.main__product');
  let parentId = parent.getAttribute('id');
  let simbol = btn.getAttribute('data-symbol');
  let number = parent.querySelector('.main__product-num');
  let price = parent.querySelector('.main__product-price span');
  let calories = parent.querySelector('.main__product-call span');

  if (simbol == "+") {
    product[parentId].amount++
    number.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].totalSum
    calories.innerHTML = product[parentId].totalKcall
  } else if (simbol == "-" && product[parentId].amount > 0) {
    product[parentId].amount--
    number.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].totalSum
    calories.innerHTML = product[parentId].totalKcall
  }
}


button = document.querySelector('.addCart');

button.addEventListener('click', function () {
  receipt.classList.add('active');
  receipt.style.display = 'block';
})





