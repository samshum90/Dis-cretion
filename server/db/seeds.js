use Hr_requests
db.dropDatabase();

db.requests.insertMany([
  {
    typeOfRequests: "Time Off",
    summeryOfRequests: "Study Leave and tuition Sponsorship",
    reasonOfRequest: "Study for a part time masters",
    outOfPolicy: "I want 30 days of paid study leave",
    furtherApproval: true,
    approval:"Rejected",
    yourRationale:"we need him"
  },

  {
    typeOfRequests: "Time Off",
    summeryOfRequests: "sabbatical",
    reasonOfRequest: "To do a course to upskill",
    outOfPolicy: "I want 30 days of paid study leave",
    furtherApproval: false,
    approval:"Granted",
    yourRationale:null
  },
  
]);