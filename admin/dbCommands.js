//Clear ratings and history for all students
db.pronunciation.update({}, {$unset : {
    "practiceTexts.$[].ratingHistory": 1,
    "averageHistory": 1
}});