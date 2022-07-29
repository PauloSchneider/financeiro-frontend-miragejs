import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Salario",
          type: "deposit",
          category: "Empresa",
          amount: 5000,
          createdAt: new Date('2022-07-03 09:00:00'),
        },
        {
          id: 2,
          title: "Cartao de Credito",
          type: "withdraw",
          category: "Nubank",
          amount: 1150,
          createdAt: new Date('2022-07-13 12:45:33'),
        },
        {
          id: 3,
          title: "Internet",
          type: "withdraw",
          category: "Internet",
          amount: 119.9,
          createdAt: new Date('2022-07-04 12:57:10'),
        },
        {
          id: 4,
          title: "Freelance de website",
          type: "deposit",
          category: "Freelance",
          amount: 3000,
          createdAt: new Date('2022-07-21 09:00:00'),
        },
      ]  
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);