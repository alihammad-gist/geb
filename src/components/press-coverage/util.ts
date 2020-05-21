const dummyPublisher: NewsPublisher = {
    name: 'N/A',
    strapiId: -12,
    website: null
}

export function getPublisher(id: number, publishers: NewsPublisher[]): NewsPublisher {
    return publishers.reduce((prev, curr) => {
        if (curr.strapiId === id) {
            return curr;
        }

        return prev;
    }, dummyPublisher);
}
