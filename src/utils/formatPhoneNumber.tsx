export const formatPhoneNumber = (phone: string | undefined = '') => {
  phone = phone.replace(/\D/gm, '')
  phone = phone.substring(0, 12)
  const length = phone.length

  switch (true) {
    case length === 12:
      return `(${phone.substring(0, 3)}) ${phone.substring(
        3,
        4
      )} ${phone.substring(4, 8)}-${phone.substring(8, 12)}`

    case length === 11:
      return `(${phone.substring(0, 2)}) ${phone.substring(
        2,
        3
      )} ${phone.substring(3, 7)}-${phone.substring(7, 11)}`

    case length > 6:
      return `(${phone.substring(0, 2)}) ${phone.substring(
        2,
        6
      )}-${phone.substring(6, 12)}`

    case length > 2:
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 12)}`

    default:
      return phone
  }
}
