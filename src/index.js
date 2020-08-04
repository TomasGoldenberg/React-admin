import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore ,compose} from "redux";
import reducer from "./reducers";

const initialState={
  "user":[],
  "isSearching":false,
  "found":[],
  "orders":[
    {
      "id":1,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":2,
      "title": "Web app Dev",
      "date": "05/06/2020",
      "client": "Sancor Seguros"
    },
    {
      "id":3,
      "title": "Software Development",
      "date": "08/04/2020",
      "client": "Michellin INC"
    },
    {
      "id":4,
      "title": "DB migration",
      "date": "21/06/2020",
      "client": "La serenisima"
    },
    {
      "id":5,
      "title": "AI Library ",
      "date": "23/05/2020",
      "client": "Facebook"
    },
    {
      "id":6,
      "title": "Mobile App Fix",
      "date": "12/05/2020",
      "client": "Slack"
    },
    {
      "id":7,
      "title": "Out sourcing Jobs",
      "date": "12/05/2020",
      "client": "Globant"
    },
    {
      "id":8,
      "title": "Pay sistem integration",
      "date": "12/05/2020",
      "client": "MELI"
    },
    {
      "id":9,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":10,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":11,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":12,
      "title": "Mobile App migration",
      "date": "11/04/2020",
      "client": "LifeSecure"
    },
    {
      "id":13,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":14,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":15,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":16,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":17,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":18,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":19,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":20,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":21,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":22,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":23,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":24,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":25,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":26,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":27,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":28,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":29,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    },
    {
      "id":30,
      "title": "Website fix",
      "date": "12/05/2020",
      "client": "M.A.R INC"
    }
  ],
  "clients":[
    {
      "id":1,
      "status":"Active",        
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":2,
      "status":"Active",        
      "name":"Globant",
      "industry":"Software"
    },
    {
      "id":3,
      "status":"Active",        
      "name":"Sancor Seguros",
      "industry":"Seguros"
    },
    {
      "id":4,
      "status":"InActive",        
      "name":"Slack",
      "industry":"SAAS"
    },
    {
      "id":5,
      "status":"Inctive",        
      "name":"Xerox",
      "industry":"Hardware"
    },
    {
      "id":6,
      "status":"Inctive",        
      "name":"Nokia",
      "industry":"Telecomunications"
    },
    {
      "id":7,
      "status":"Active",        
      "name":"Samsung",
      "industry":"Celphones"
    },
    {
      "id":8,
      "status":"Active",        
      "name":"Apple",
      "industry":"Software"
    },
    {
      "id":9,
      "status":"Active",        
      "name":"ZARA",
      "industry":"Textile"
    },
    {
      "id":10,
      "status":"Active",
      "name":"Fallabela",
      "industry":"Retail"
    },
    {
      "id":11,
      "status":"Active",
      "name":"Amazon",
      "industry":"Retail"
    },
    {
      "id":12,
      "status":"Active",
      "name":"Wallmart",
      "industry":"Retail"
    },
    {
      "id":13,
      "status":"Active",
      "name":"Baidu",
      "industry":"Software"
    },
    {
      "id":14,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":15,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":16,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":17,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":18,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":19,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":20,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":21,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":22,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":23,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":24,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":25,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":26,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":27,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":28,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":29,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    },
    {
      "id":30,
      "status":"Active",
      "name":"MELI",
      "industry":"Retail"
    }
  ],
  "products":[
    {
      "id":1,
      "name":"Web Apps",
      "price":"99,99",
      "stock": "Available"
    },
    {
      "id":2,
      "name":"Mobile Apps",
      "price":"419,99",
      "stock": "Not Available"
    },
    {
      "id":3,
      "name":"DB migrations",
      "price":"100,99",
      "stock": "Available"
    },
    {
      "id":4,
      "name":"Ai Libraries",
      "price":"299,99",
      "stock": "Not Available"
    },
    {
      "id":5,
      "name":"Devops operations",
      "price":"199,99",
      "stock": "Available"
    },
    {
      "id":6,
      "name":"Software Dev",
      "price":"99,99",
      "stock": "Not Available"
    },
    {
      "id":7,
      "name":"Desktop app",
      "price":"59,89",
      "stock": "Not Available"
    },
    {
      "id":8,
      "name":"API Development",
      "price":"999,99",
      "stock": "Available"
    },
    {
      "id":9,
      "name":"Marketing Consulting",
      "price":"599,99",
      "stock": "Available"
    },
    {
      "id":10,
      "name":"Administation Systems",
      "price":"58,88",
      "stock": "Not Available"
    },
    {
      "id":11,
      "name":"E-commerce",
      "price":"59,99",
      "stock": "Available"
    },
    {
      "id":12,
      "name":"Mentoring",
      "price":"59,99",
      "stock": "Available"
    },
    {
      "id":13,
      "name":"Product Development",
      "price":"1059,99",
      "stock": "Available"
    },
    {
      "id":14,
      "name":"Outsourcing ",
      "price":"159,99",
      "stock": "Available"
    },
    {
      "id":15,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":16,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":17,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":18,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":19,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":20,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":21,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":22,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":23,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":24,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":25,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":26,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":27,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":28,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":29,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    },
    {
      "id":30,
      "name":"MELI",
      "price":"105,99",
      "stock": "Available"
    }
  ],
  "sales":[
    {
      "id":1,
      "date": "01/05/2020",
      "total": "5000",
      "client":"MELI"
    },
    {
      "id":2,
      "date": "02/05/2020",
      "total": "6000",
      "client":"Globant"
    },
    {
      "id":3,
      "date": "03/05/2020",
      "total": "4000",
      "client":"Hooli"
    },
    {
      "id":4,
      "date": "04/05/2020",
      "total": "4000",
      "client":"Facebook"
    },
    {
      "id":5,
      "date": "05/05/2020",
      "total": "8000",
      "client":"AliPay"
    },
    {
      "id":6,
      "date": "06/05/2020",
      "total": "7000",
      "client":"Apple"
    },
    {
      "id":7,
      "date": "07/05/2020",
      "total": "15000",
      "client":"Telefe"
    },
    {
      "id":8,
      "date": "08/05/2020",
      "total": "20000",
      "client":"Baidu"
    }
  ]
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState,composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

