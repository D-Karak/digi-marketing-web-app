export const AuthImages = [
    { src: 'https://picsum.photos/id/10/800/1200', alt: 'Forest landscape portrait' },
    { src: 'https://picsum.photos/id/11/800/1200', alt: 'Nature wide view' },
    { src: 'https://picsum.photos/id/12/800/1200', alt: 'Ocean coastline' },
    { src: 'https://picsum.photos/id/13/800/1200', alt: 'Mountain peaks' },
    { src: 'https://picsum.photos/id/14/800/1200', alt: 'Desktop workspace' },
    { src: 'https://picsum.photos/id/15/800/1200', alt: 'Waterfall scenery' },
    { src: 'https://picsum.photos/id/16/800/1200', alt: 'Abstract nature' },
    { src: 'https://picsum.photos/id/17/800/1200', alt: 'Path through trees' },
    { src: 'https://picsum.photos/id/18/800/1200', alt: 'Meadow grass' },
    { src: 'https://picsum.photos/id/19/800/1200', alt: 'Macro insect' },
];

export const getRandomImage = () => {
    return AuthImages[Math.floor(Math.random() * AuthImages.length)];
};
