export const email = () => {
  return (label, val) => {
    if (!val || val.match(/.com$/)) return null

    return `Please enter a valid ${label.toLowerCase()} address`
  }
}

export const presence = () => {
  return (label, val) => {
    if (val) return null

    return `${label} is required`
  }
}

export const minChar = (length) => {
  return (field, val) => {
    if (!val || val.length >= 6) return null

    return `${field} must be at least ${length} characters`
  }
}
