# Back-end


# Food Truck Trackrr API

Base URL:


## Authentication

### Register DINER

#### Diner 
**[POST]** `/auth/diner/register`

#### REQUEST

##### Body

| name       | type   | required | description            |
| ---------- | ------ | -------- | ---------------------- |
| `username` | String | Yes      | Must be unique         |
| `password` | String | Yes      |                        |

_example:_

```
{
  username: "diner_user",
  password: "password"
}
```

#### RESPONSE

##### 201 (Created)

```
{
  "message": "Diner Registration Successful.",
    "id": 1,
    "username": "TestTom",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJuYW1lIjoiVGVzdFRvbSIsImlhdCI6MTU5MjUxMTEyNCwiZXhwIjoxNTkyNTE0NzI0fQ.0rp9BLFWDPpp8c03nD_soA1_TJNuTcS4rS6s8ZpsTsE"
}
```

### Login DINER

**[POST]** `/auth/diner/login`

#### REQUEST

##### Body

| name       | type   | required | description            |
| ---------- | ------ | -------- | ---------------------- |
| `username` | String | Yes      | Must exist in database |
| `password` | String | Yes      | Must exist in database |

_example:_

```
{
  username: "diner_user",
  password: "pass123"
}
```

#### RESPONSE

##### 200 (OK)

```
{
  "message": "Welcome diner_user",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoidGVzdDIiLCJpYXQiOjE1OTgzNzQ1MzMsImV4cCI6MTU5ODQ2MDkzM30.wuslJ2GCqThIF_1peEA3ZM9f7VHCEhA9XpgORyC6v7c"
}
```

## Authentication

### Register OPERATOR

#### Diner 
**[POST]** `/auth/operator/register`

#### REQUEST

##### Body

| name       | type   | required | description            |
| ---------- | ------ | -------- | ---------------------- |
| `username` | String | Yes      | Must be unique         |
| `password` | String | Yes      |                        |

_example:_

```
{
  username: "operator_user",
  password: "password"
}
```

#### RESPONSE

##### 201 (Created)

```
{
  "message": "Operator Registration Successful.",
    "id": 1,
    "username": "operator_user",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoidGVzdDIiLCJpYXQiOjE1OTgzNzQ1MzMsImV4cCI6MTU5ODQ2MDkzM30.wuslJ2GCqThIF_1peEA3ZM9f7VHCEhA9XpgORyC6v7c"
}
```

### Login OPERATOR

**[POST]** `/auth/operator/login`

#### REQUEST

##### Body

| name       | type   | required | description            |
| ---------- | ------ | -------- | ---------------------- |
| `username` | String | Yes      | Must exist in database |
| `password` | String | Yes      | Must exist in database |

_example:_

```
{
  username: "operator_user",
  password: "password"
}
```

#### RESPONSE

##### 200 (OK)

```
{
  "message": "Welcome operator_user",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJuYW1lIjoiVGVzdFRvbSIsImlhdCI6MTU5MjUxMTEyNCwiZXhwIjoxNTkyNTE0NzI0fQ.0rp9BLFWDPpp8c03nD_soA1_TJNuTcS4rS6s8ZpsTsE"
}
```

## OPERATORS 

### UPDATE Operator

**[PUT]** `/operators/:id`


##### URL Parameters

| name | type    | required | description            |
| ---- | ------- | -------- | ---------------------- |
| `id` | Integer | Yes      | ID of logged in operator   |

_example:_

```
{

  "username": "edit_operator",
  "password": "password123"
}
```
#### RESPONSE

##### 200 (OK)

```
{
  "id": 1,
  "username": "edit_operator",
  "password": "password123"
}
```
### DELETE Operator

**[DELETE]** `/operators/:id`


##### URL Parameters

| name | type    | required | description            |
| ---- | ------- | -------- | ---------------------- |
| `id` | Integer | Yes      | ID of logged in operator   |


#### RESPONSE

##### 200 (OK)

```
{
  "Removed": 1
}
```

### Operator creates new Trucks

**[POST]** `/operators/trucks`

##### Body

| name                    | type    | required  | description    |
| ----------------------- | ------- | --------  | -------------- |
| `operator_id`           | Integer | Yes       |                |
| `name`                  | String  | Yes       |                |
| `image_URL`             | String  | No        |                |
| `cuisine_type`          | String  | Yes       |                |
| `customer_ratings_avg`  | String  | No        |                |
| `current_location`      | String  | No        |                |
| `open_time`             | String  | Yes       |                |

_example:_

```
{
  "operator_id": 1,
  "name": "operators_truck",
  "image_URL": "https://s3-media0.fl.yelpcdn.com/bphoto/9vtpwRel1gua6nfwRghteg/l.jpg",
  "cuisine_type": "TEST",
  "customer_ratings_avg": null,
  "current_location": "4201 International Blvd, Oakland, CA 94601",
  "open_time": "9:00AM"
}
```

#### RESPONSE

##### 201 (OK)

```
{
    "id": 4,
    "operator_id": 1,
    "name": "operators_truck",
    "image_URL": "https://s3-media0.fl.yelpcdn.com/bphoto/9vtpwRel1gua6nfwRghteg/l.jpg",
    "cuisine_type": "TEST",
    "customer_ratings_avg": null,
    "current_location": "4201 International Blvd, Oakland, CA 94601",
    "open_time": "9:00AM"
}
```
### Operator can Update Trucks

**[PUT]** `/operators/:id/trucks/:truck_id`

##### URL Parameters

| name        | type    | required | description                |
| ----------- | ------- | -------- | -------------------------  |
| `id`        | Integer | Yes      | ID of logged in operator   |
| `truck_id`  | Integer | Yes      | ID of specific truck       |

##### Body

| name                    | type    | required  | description    |
| ----------------------- | ------- | --------  | -------------- |
| `name`                  | String  | Yes       |                |
| `image_URL`             | String  | No        |                |
| `cuisine_type`          | String  | Yes       |                |
| `customer_ratings_avg`  | String  | No        |                |
| `current_location`      | String  | No        |                |
| `open_time`             | String  | Yes       |                |

_example:_

```
{
  "operator_id": 1,
  "name": "Edit23",
  "image_URL": "https://s3-media0.fl.yelpcdn.com/bphoto/9vtpwRel1gua6nfwRghteg/l.jpg",
  "cuisine_type": "TEST",
  "customer_ratings_avg": null,
  "current_location": "4201 International Blvd, Oakland, CA 94601",
  "open_time": "9:00AM"
}
```

#### RESPONSE

##### 200 (OK)

### Operator can DELETE Trucks

**[DELETE]** `/operators/:id/trucks/:truck_id`

##### URL Parameters

| name        | type    | required | description                |
| ----------- | ------- | -------- | -------------------------  |
| `id`        | Integer | Yes      | ID of logged in operator   |
| `truck_id`  | Integer | Yes      | ID of specific truck       |

#### RESPONSE

##### 200 (OK)

```
{
  "message": "Truck 4 deleted"
}
```

### Get All Trucks for Operators

**[GET]** `/operators/:id/trucks`

#### RESPONSE

##### 200 (OK)

```
{
    "operator": {
        "id": 1,
        "username": "shotest",
        "password": "$2a$08$.ksa8rFoNQ3ApY4Ggadfwenf/uddvvJJefvzVTJ.pOqdeAkeWd91u"
    },
    "truckOwned": [
        {
            "id": 2,
            "operator_id": 1,
            "name": "Tacos El Rey",
            "image_URL": "https://s3-media0.fl.yelpcdn.com/bphoto/9vtpwRel1gua6nfwRghteg/l.jpg",
            "cuisine_type": "Mexican",
            "customer_ratings_avg": null,
            "current_location": "4201 International Blvd, Oakland, CA 94601",
            "open_time": "9:00AM"
        },
        {
            "id": 3,
            "operator_id": 1,
            "name": "TEST",
            "image_URL": "https://s3-media0.fl.yelpcdn.com/bphoto/9vtpwRel1gua6nfwRghteg/l.jpg",
            "cuisine_type": "Mexican",
            "customer_ratings_avg": null,
            "current_location": "4201 International Blvd, Oakland, CA 94601",
            "open_time": "9:00AM"
        }
    ]
}
```

### Get Individual Operator Truck by their ID

**[GET]** `/operators/:id/trucks/:truck_id`


##### URL Parameters

| name        | type    | required | description                |
| ----------- | ------- | -------- | -------------------------  |
| `id`        | Integer | Yes      | ID of logged in operator   |
| `truck_id`  | Integer | Yes      | ID of specific truck       |

#### RESPONSE

##### 200 (OK)

```
{
    "id": 2,
    "operator_id": 1,
    "name": "Tacos El Rey",
    "image_URL": "https://s3-media0.fl.yelpcdn.com/bphoto/9vtpwRel1gua6nfwRghteg/l.jpg",
    "cuisine_type": "Mexican",
    "customer_ratings_avg": null,
    "current_location": "4201 International Blvd, Oakland, CA 94601",
    "open_time": "9:00AM"
}
```
