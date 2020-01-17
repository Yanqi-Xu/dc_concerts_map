var config = {
    style: 'mapbox://styles/mapbox/navigation-guidance-night-v4',
    accessToken: 'pk.eyJ1IjoieWFucWl4dSIsImEiOiJjazN0ZHdsdmswMXY1M2ZtZGJ4dTJvbHhpIn0.wt-oQWkTd-DSQHLRZ9srGg',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'A personal atlas of D.C. live music',
    subtitle: "This past year's concerts in D.C.",
    byline: 'By Yanqi Xu',
    footer: 'Source: my fond memories',
    chapters: [{
            id: 'songbyrd',
            title: 'First live show in D.C.: Songbyrd',
            //image: './path/to/image/source.png',
            description: "Music-related events start with Soak at Songbyrd.",
            location: {
                center: [-77.04234, 38.92237],
                zoom: 16.00,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'the_anthem',
            title: "Passion Pit's 10-year Anniversary at The Anthem",
            //image: './path/to/image/source.png',
            description: "The Anthem sits by the waterfront in D.C. I went there to see Passion Pit's 10-year Anniversary of Manners. Michael Angelakos writes lyrics that no one else does, and Passion Pit will always have a special place in my heart.",
            location: {
                center: [-77.02602, 38.88005],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'Black Cat',
            title: "The All-in-one experience",
            //image: './path/to/image/source.png',
            description: "Black Cat often has interesting shows, but also many DJ sessions. I went ot see The Chills there, which was full of nostalgia. Martin told us that last time they were in D.C. was almost thirty years ago."
            location: {
                center: [-77.03162, 38.91458],
zoom: 16.00,
pitch: 45.00,
bearing: -40.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9:30club',
            title: '9:30 Club',
            //image: './path/to/image/source.png',
            description: "9:30 Club is near the Columbia Heights neighborhood, but I only went there for the first time in August. It was a French House/Daft Punk tribute, without much Daft Punk. So it was not the best first experience. But in September, the absolutely briliant lineup including the back-to-back briliant Ride and Whitney, the reunited Bombay Bicycle Club in October presented many of my favorite shows this year.",
            location: {
                            center: [-77.02364, 38.91802],
                            zoom: 16.00,
                            pitch: 45.00,
                            bearing: -40.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    
    ]
}