
export function groupOf<T>(len: number, ...arr: T[]): T[][] {
    let groups: T[][] = [];

    for (let i = 0; i < arr.length; i += len) {
        groups.push(
            arr.slice(i, i + len)
        );
    }

    return groups;
}
