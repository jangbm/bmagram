import "./env";
import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";
import jwt from "jsonwebtoken";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

// nodemailer-mailgun
// console.log(process.env.MAILGUN_API, process.env.MAILGUN_DOMAIN);

const sendMail = email => {
  const options = {
    auth: {
      api_key: process.env.MAILGUN_API,
      domain: process.env.MAILGUN_DOMAIN
    }
  };
  const nodemailerMailgun = nodemailer.createTransport(mg(options));
  return nodemailerMailgun.sendMail(email, (err, info) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log(`Response: ${info}`);
    }
  });
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "jang2620@gmail.com",
    to: address,
    subject: "😊Login Secret for Bmagram😊",
    html: `hello! Your login secret is <strong>${secret}</strong>.<br/>Copy paste it`
  };
  return sendMail(email);
};

// jwt 생성
export const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET);
