# Hospital API

An API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients. Find the endpoints below.

## How to set up
 Install all the node_modules mentioned in package, run
 <code> npm i </code>
 And then to start the server run
 <code> npm start </code>

## Endpoints
- /doctors/register → with username and password
- /doctors/login → returns the JWT token to be used
- /patients/register
- /patients/:id/create_report → id is phone number for a patient
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status

## Features
 There can be 2 types of Users
<code> Doctors </code> <code> Patients </code>

- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone number, if the patient already exists, just the patient info is returned in the API)
- After the checkup, Report is given

Patient Report will have the fields
- Doctor name
- Status - [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]
- Date
