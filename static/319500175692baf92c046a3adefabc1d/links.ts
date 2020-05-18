export function readableLink(name: string) {
    return name
        .toLowerCase()
        .replace(/[^a-zA-Z]+/g, '-');
}