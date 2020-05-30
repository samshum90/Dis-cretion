use Hr_requests
db.dropDatabase();

db.requests.insertMany([
  {
    _id: "5ed2531108c9666b4fb1ca6e",
    summery: "4-day working pattern",
    situation: "My family is based in Scotland, therefore I would like to fly up to see them over long weekends",
    arrangements: "Monday to Thursday; 40 hours 4 days; 8am-7pm; starting from June 2021",
    details: "Nope thank you!",
    endingId: null,
    submitted: "3/28/2018 14:18:01",
    token: "nk4l8dwx68pdbqbhqa4sknk4l8dwuhus",
    status: "new",
    type: "A",
    furtherApproval: null
  },
  {
    _id: "5ed2531108c9666b4fb1ca6f",
    summery: "Regular physio sessions at 11am",
    situation: "I have some long-term conditions after the replacement of the knee joint a year ago that I would need to attend physio session every Wednesday for 1.5 hours. It's the middle of the day, and I need to travel to the clinic for the workshop.",
    arrangements: "Monday to Friday normal hours, Wednesday 7:30-10:30, then 1-6pm",
    details: "No",
    endingId: null,
    submitted: "6/2/2019 14:19:01",
    token: "dohwgkhitjtmuj4ply3dohwgkh3fcvh4",
    status: "new",
    type: "A",
    furtherApproval: null
  },
  {
    _id: "5ed2531108c9666b4fb1ca6g",
    summery: "Need flexible hours for school run",
    situation: "I need to do school run for my 3-yo. My wife is not able to do it because of mobility issue",
    arrangements: "Monday to Friday 10:30 - 3:30pm, then 8:30-10:30pm",
    details: "Nothing else",
    endingId: null,
    submitted: "9/14/2019 15:48:52",
    token: "qnbgplxe1ikrojgjqnbgsnefcs137034",
    status: "new",
    type: "A",
    furtherApproval: null
  },
  {
    _id: "5ed2531108c9666b4fb1ca6h",
    summery: "An afternoon off for study",
    situation: "I am doing an online course on Data Science. I find an afternoon off per week would help me focus on the revision and completing the assignment.",
    arrangements: "From 1 Nov 2019 to 31 Oct 2020, Wednesday 12-4 off; 8-5:30 for Mon, Tue, Thu, Fri",
    details: null,
    endingId: null,
    submitted: "10/2/2019 14:19:01",
    token: null,
    status: "new",
    type: "A",
    furtherApproval: null
  },
  {
    _id: "5ed2531108c9666b4fb1ca6i",
    summery: "Reduced hours to part-time",
    situation: "My family and I take turns to look after my Mother with Alzheimer. I would like to start working part-time to provide better care to her.",
    arrangements: "Start asap. Mon-Fri work in the morning in the office from 7-11am, return home to work for another 2 hours, finish work at 2pm.",
    details: "Discussed with manager before, she is supportive",
    endingId: null,
    submitted: "12/3/2019 15:48:52",
    token: null,
    status: "new",
    type: "A",
    furtherApproval: null
  },
  {
    _id: "5ed2531108c9666b4fb1ca6j",
    summery: "I want to work from home",
    situation: "I live far away from the office and I am worried about the coronavirus and the safety of public transport",
    arrangements: "same full time working pattern, Mon-Fri, working from home",
    details: null,
    endingId: null,
    submitted: "3/5/2020 16:46:18",
    token: "alzl5w0ojob4mbddalzl8rhywunbm8pi",
    status: "new",
    type: "A",
    furtherApproval: null
  },
  {
    _id: "5ed2531108c9666b4fb1ca6k",
    summery: "Flexible working hours",
    situation: "I get anxiety and insomnia because of the pandemic situation. I can't sleep through the night and need some naps throughout the day. Want to explore a slightly different pattern from the usual 9am - 5 pm",
    arrangements: "A more flexible working time that adds up to 7.5 hours a day",
    details: "Is there any mental health support available?",
    endingId: null,
    submitted: "3/17/2020 16:49:04",
    token: "c4wwimirycv180mtj0rhc4wwim3aem0q",
    status: "new",
    type: "A",
    furtherApproval: null
  },
  {
    _id: "5ed2531108c9666b4fb1ca6l",
    summery: "Flexible hours for reservist work",
    situation: "I am a reservist and am assigned to perform the quarantine checks to some ports.",
    arrangements: "I need to be on shift for the reservist work. I can do 75% of my usual hours (30 hours)",
    details: "Discussed with HRBP before",
    endingId: null,
    submitted: "4/2/2020 12:37:06",
    token: "os2gfa5omcxmwy18o2gsb49uos2gfa5o",
    status: "new",
    type: "D",
    furtherApproval: null
  },
  {
    _id: "5ed2531108c9666b4fb1ca6m",
    summery: "Home schooling arrangements",
    situation: "I need to provide home schooling for my twins. I can't work 8-5pm anymore",
    arrangements: "I can work in the afternoon Mon to fri from 12:30-6pm and 8-10pm",
    details: "Mentioned to manager",
    endingId: null,
    submitted: "4/3/2020 15:49:34",
    token:"s923qg8ijwlhqno27pcs923qgj0lkkw1",
    status: "new",
    type: "A",
    furtherApproval: null
  },
  {
    _id: "5ed2531108c9666b4fb1ca6n",
    summery: "Volunteering",
    situation: "I want to use my 5 community days for the community volunteering, helping the delivery of food boxes to elderlies in my area",
    arrangements: "I would like to volunteer on the following dates/time: 9 April (PM), 14 April (AM), 16 April (All day), 21 April (PM), 22 April (all day), 24 April (AM), 27 April (all day)",
    details: "discussed with manager - supportive in general",
    endingId: null,
    submitted: "4/6/2020 20:00:59",
    status: "new",
    type: "B",
    furtherApproval: null,
    token: null
  },

  
]);