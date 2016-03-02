var config = {
    lang: 'de',
    time: {
        timeFormat: 24,
        displaySeconds: true,
        digitFade: false,
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Potsdam,Germany',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'de',
            APPID: '87cdf0651b414a32a0c1a61d5825a94d'
        }
    },
    compliments: {
        interval: 90000,
        fadeInterval: 4000,
        morning: [
            'Guten Morgen!',
            'Schönen Tag!',
            'Schön geschlafen?'
        ],
        afternoon: [
            'Hallo Schönheit',
            'Schöner Tag, oder?',
            'Nutze den Tag!'
        ],
        zaehneputzen: [
            'Schön putzen!',
            'Ab ins Bettchen...',
            'Auch hinter den Ohren sauber machen!'
        ],
        evening: [
            'Hoffentlich war der Tag schön!',
            'Gute Nacht!',
            'Schöne Träume!'
        ]
    },
    calendar: {
        maximumEntries: 15, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
		{
			symbol: 'calendar-plus-o', 
			url: 'http://mail.moenchmeier.de/ical/moenchmeier.de/mathias/Familie.ics'
		},
		{
			symbol: 'soccer-ball-o',
			url: 'https://www.google.com/calendar/ical/spielplan.1.bundesliga%40gmail.com/public/basic.ics',
		},
		// {
			// symbol: 'mars',
			// url: "https://server/url/to/his.ics",
		// },
		// {
			// symbol: 'venus',
			// url: "https://server/url/to/hers.ics",
		// },
		// {
			// symbol: 'venus-mars',
			// url: "https://server/url/to/theirs.ics",
		// },
		]
    },
    news: {
        feed: 'http://www.tagesschau.de/xml/rss2'
    }
}
