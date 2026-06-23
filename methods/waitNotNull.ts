export function waitForValue<T>(value: null | T): Promise<void> {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      if (value !== null && value !== undefined) {
        clearInterval(interval)
        resolve()
      }
    }, 50)
  })
}
