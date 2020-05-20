export function readableLink(name: string) {
    return name
        .toLowerCase()
        .replace(/\W+/g, '-');
}