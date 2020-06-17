# Dis-cretion
A tool to empower staff to make informed decisions on employee requests efficiently and consistently

[![Dis-Cretion Video](http://img.youtube.com/vi/Daec55zxb_s/0.jpg)](http://www.youtube.com/watch?v=Daec55zxb_s)

Our Submission to Automation Anywhere COVID-19 Botathon.

[Live App on Heroku](https://dis-cretion.herokuapp.com/) 

[DevPost Link](https://devpost.com/software/dis-cretion-cnhlfw)

## Inspiration
* Many organisations couldn’t process a large number of employee queries timely during the COVID-19.
* There are evolving policies and guidance from all directions that HR practitioners need to maintain.
* Employees and Managers exhaust their time and efforts on searching for the right information.
* Many decisions on employee requests are not consistent across the business. Discretionary decisions are likely to be made using previous experience. Junior HR practitioners can be inexperience in making discretionary decisions, hence the discretion offering may not be at the optimal level.

## What it does
Dis-cretion is a tool to empower staff to make informed decisions on employee requests efficiently and consistently. It highlights specific internal policies, external resources (e.g. government guidance), anonymised historical requests, and areas of consideration.

## How it works

1. An employee submits a request, which is sent to the line manager to review.
2. The manager sees the dashboard of requests and can review the details of them.
3. Dis-cretion presents specific policy information that is relevant to the request.
4. It also shares anonymised summary of some relevant historical requests.
5. Dis-cretion encourages structured, constructive discussions between manager and employee by suggesting areas of consideration and topics to both of them.
6. The manager can now make an informed decision.
7. The automation anywhere Email bot is triggered to send a customised update on behalf of the manager to the individual.
8. Decision and rationale are fed back to the repository.

## Challenges we encountered
Limited backend capacity to run the machine learning model - need manual refreshing

## Next steps
* Look into alternative ways to capture employee requests, e.g. use chatbot or other major HR systems
* Contribute to smarter Business Continuity Planning

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### Using the project

Host the app locally, defaults to port 8080

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
