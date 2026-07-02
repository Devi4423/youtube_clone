const formatSubscribers = (subscribersCount) => {
    return new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short'
    }).format(subscribersCount);
}

export default formatSubscribers;