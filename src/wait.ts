export async function wait(milliseconds: number): Promise<string> {
  return new Promise(resolve => {
    if (isNaN(milliseconds)) {
      throw new Error('milliseconds not a number')
    }

    // setTimeout()
    setTimeout(() => resolve('done!'), milliseconds)
  })
}
