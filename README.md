# MMA API

Welcome to the MMA API documentation! 

This API provides access to data on mixed martial arts fighters.

This API in its current implementation does not require an API Key.

## API Endpoints

The MMA API provides the following endpoints:

### Fighters

- `/api/fighters`: Get a list of all fighters.
- `/api/fighters/{firstName-lastName}`: Get details about a specific fighter.
- `/api/fighters/weight/{weight}`: Get a list of all fighters at a given weight-class.
- `/api/fighters/gender/{gender}`: Get a list of all fighters for a given gender.

## Making Requests

To make a request to the MMA API, send an HTTP GET request to the desired endpoint URL.

### Example request:

- GET /api/fighters/Conor-McGregor 

### Response:

   {
        "name": "Conor McGregor",
        "age": 34,
        "status": "Active",
        "nickname": "The Notorious",
        "weight-class": "Lightweight",
        "thumbnail": "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-07/67667%252Fprofile-galery%252Fprofile-picture%252FMCGREGOR_CONOR_07-10.png?h=a30e7339&itok=9J5yEZpN",
        "full-thumbnail": "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-07/MCGREGOR_CONOR_L_07-10.png?itok=xbg9Kwfj",
        "stats": {
          "record": "22-6-0 (W-L-D)",
          "knockout-wins": "19",
          "submission-wins": "1",
          "striking-accuracy": "50%",
          "takedown-accuracy": "56%"
        }
    }

## Landing Page for API

(Landing Page)[/images/landingpage.png]