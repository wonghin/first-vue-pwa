export const getUrlId = (dataUrl: any) => {
    const parts = dataUrl.split('/')
    const number = parts[parts.length - 2]
    return parseInt(number)
}
export const upperCaseFirstLetter = (str: string) => {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2
}