export function formatPhoneNumber(number) {
  if (!number) {
    return number
  }
  const phoneNumber = number.replace(/[^\d]/g, "")
  const phoneNumberLength = phoneNumber.length
  if (phoneNumberLength < 2) {
    return phoneNumber
  }
  if (phoneNumberLength < 6) {
    return (`${phoneNumber.slice(0,1)}-${phoneNumber.slice(1)}`)
  }
  if (phoneNumberLength < 8) {
    return (`${phoneNumber.slice(0,1)}-${phoneNumber.slice(1, 5)}-${phoneNumber.slice(5)}`)
  }
  return (
    `${phoneNumber.slice(0,1)}-${phoneNumber.slice(1, 5)}-${phoneNumber.slice(5, 7)}-${phoneNumber.slice(7, 9)}`
    )
}

export function formatName(name) {
  if (!name) {
    return name
  }

  return `${name.slice(0,1).toUpperCase()}${name.slice(1)}`
}