export function getNumberAsCurrency(number) {
  let value = number
  if (['String', 'string'].includes(typeof number)) {
    value = Number.parseFloat(number)
  }
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}