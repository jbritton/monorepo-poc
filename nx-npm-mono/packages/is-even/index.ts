export const isEven = (x: number) => x % 2 === 0;

export const allEven = (xs: number[]) => {
    for (const x of xs) {
        if (!isEven(x)) {
            return false
        }
    }
    return true
}

export const someEven = (xs: number[]) => {
    for (const x of xs) {
        if (isEven(x)) {
            return true
        }
    }
    return false
}
