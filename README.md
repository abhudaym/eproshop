# eProShop - a full-fledged eCommerce web application.

> Built using React, Redux, NodeJS and MongoDB <br/>
> Deployed Here: https://eproshop1.herokuapp.com/

This project was built with help from [Brad Traversy](https://www.youtube.com/user/TechGuyWeb)'s youtube and [udemy](https://www.udemy.com/user/brad-traversy/) courses.


## Screenshots
![image](https://user-images.githubusercontent.com/52799877/115204391-0fb7fa80-a116-11eb-8cf9-3c8aa5685ef1.png)
![image](https://user-images.githubusercontent.com/52799877/115204428-1a728f80-a116-11eb-846c-bd5766e39bff.png)


## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)


## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

### Collaborators
- [Abhuday Mishra](https://www.linkedin.com/in/abhudaym/)



