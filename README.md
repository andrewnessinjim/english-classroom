# English Classroom

Platforms such as [Preply][1] are great for English teachers and students to find each other and collaborate. It has very good tools for scheduling, instant messaging, showcasing/filtering teachers etc. However, tools such as assignment management, vocabulary builder, corrections etc are made generic so they can be useful to a large number of students and teachers. Such generic approaches fail to deliver the personal experience that is unique to each teacher. This project's goal is to create a suite of tools that suits the personal style of one particular teacher. This will deliver a more personal experience in a class compared to Preply for that teacher.

## Playing around with the app

You can visit https://english-classroom-staging.herokuapp.com/. This comes with one teacher account which you can use to play around; the username/password for this account is `teacher`/`teacher`

Alternatively, running `docker-compose up` in the project root after cloning the project should bring the project up at http://localhost:3000. The local setup comes with one teacher account which you can use to play around; the username/password for this account is also `teacher`/`teacher`.

The app currently supports one feature: pronunciation. After logging in, the teacher can navigate to the pronunciation section by clicking on "Pronunciation" button next to a student. New words can be added from the textbox at the bottom. Words can be rated using the 5-point scale against each word. In the real world, teacher rates a word after the student attempts pronouncing it. New session can be started by clicking on restart icon at the top right, just above the list of words. Restarting a session calculates an average for the previous session, which can be viewed under "Progress" tab. The student currently has to view all this over a screen share session with the teacher.

[1]: https://preply.com/