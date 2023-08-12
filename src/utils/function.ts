export const getUrlId = (dataUrl: any) => {
    const parts = dataUrl.split('/')
    const number = parts[parts.length - 2]
    return parseInt(number)
}