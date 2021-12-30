//Clear ratings for all students
db.pronunciation.update({}, {$unset : {"practiceTexts.$[].rating": 1}})