import express from "express"
import db from '@repo/db/client'
const app = express();

app.post('/hdfcWebhook', (req, res) => {
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount
  };

  db.balance.update({
    where: {
      userId: userId
    },
    data: {
      amount: {
        increment: paymentInformation.amount
      }
    }
  })

})