const slider = document.querySelector('.slider')
const pageViews = document.querySelector('.pageViews span')
const price = document.querySelectorAll('.price')
const yearly = document.querySelector('input[type="checkbox"]')



yearly.addEventListener('input', () => {
  let val = slider.value
  displayPrice(val)
})

const prices = { //monthly
  "1": 8,
  "2": 12,
  "3": 16,
  "4": 24,
  "5": 36
}

function handleInputChange(e) {

  const min = e.currentTarget.min
  const max = e.currentTarget.max
  const val = e.currentTarget.value
  e.currentTarget.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';

  displayPageViews(val)
  displayPrice(val)
}

slider.addEventListener('input', handleInputChange)

function displayPageViews(value) {

  switch (value) {
    case '1':
      pageViews.textContent = "10K"
      break;
    case '2':
      pageViews.textContent = "50K"
      break;
    case '3':
      pageViews.textContent = "100K"
      break;
    case '4':
      pageViews.textContent = "500K"
      break;
    case '5':
      pageViews.textContent = "1M"
      break;
    default:
      break;
  }

}

function displayPrice(value) {
  const yearlyBilling = yearly.checked;
  price.forEach(el => {
    el.innerHTML =
      `<span>$${yearlyBilling ? prices[value] * 12 * 0.75 : prices[value]}.00</span>&nbsp&nbsp&nbsp/${yearlyBilling ? "year" : "month"}`;
  })

}