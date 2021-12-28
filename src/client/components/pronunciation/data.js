const practiceText = [
    {
        "id": 1,
        "text": "involved [ɪnˈvɑlvd]" ,
		"latestRating": null
	},
    {
        "id": 2,
        "text": "turn [ˈtɝn]" ,
		"latestRating": 2
	},
    {
        "id": 3,
        "text": "burn [ˈbɝn]" ,
		"latestRating": 2
	},
    {
        "id": 4,
        "text": "scorn [skɔːrn]" ,
		"latestRating": 2
	},
    {
        "id": 5,
        "text": "born [bɔːrn]" ,
		"latestRating": 2
	},
    {
        "id": 6,
        "text": "torn [tɔːrn]" ,
		"latestRating": 2
	},
    {
        "id": 7,
        "text": "learn [lɜːrn]" ,
		"latestRating": 2
	},
    {
        "id": 8,
        "text": "related [rɪˈleɪtɪd]" ,
		"latestRating": 2
	},
    {
        "id": 9,
        "text": "butter [ˈbʌtər]" ,
		"latestRating": 2
	},
    {
        "id": 10,
        "text": "better [ˈbetər]" ,
		"latestRating": 2
	},
    {
        "id": 11,
        "text": "little [ˈlɪtɫ̩]" ,
		"latestRating": 2
	},
    {
        "id": 12,
        "text": "shuttle [ˈʃʌtl]" ,
		"latestRating": 2
	},
    {
        "id": 13,
        "text": "large [lɑːrdʒ]" ,
		"latestRating": 2
	},
    {
        "id": 14,
        "text": "clown [klaʊn]" ,
		"latestRating": 2
	},
    {
        "id": 15,
        "text": "town [taʊn]" ,
		"latestRating": 2
	},
    {
        "id": 16,
        "text": "brown [braʊn]" ,
		"latestRating": 2
	},
    {
        "id": 17,
        "text": "sound [saʊnd]" ,
		"latestRating": 2
	},
    {
        "id": 18,
        "text": "round [raʊnd]" ,
		"latestRating": 2
	},
    {
        "id": 19,
        "text": "tasks [ˈtæsks]" ,
		"latestRating": 2
	},
    {
        "id": 20,
        "text": "masks [ˈmæsks]" ,
		"latestRating": 2
	}
]

export function getPracticeText() {
    return practiceText;
}

export function setRating(id, rating) {
    practiceText.find(practice => practice.id === id).latestRating = rating;
}