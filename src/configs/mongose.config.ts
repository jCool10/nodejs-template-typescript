'use strict'

import mongoose from 'mongoose'
import { configs } from './index.config'

const { maxPoolSize, minPoolSize, url } = configs.db

const connectString = url

const options = {
  autoIndex: true,
  minPoolSize: minPoolSize, // Maintain up to x socket connections
  maxPoolSize: maxPoolSize, // Maintain up to x socket connections
  connectTimeoutMS: 60000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
}

mongoose.set('strictQuery', true)

class Database {
  static instance: any

  constructor() {
    this.connect()
  }

  // connect
  connect(type = 'mongodb') {
    // eslint-disable-next-line no-constant-condition
    if (1 === 1) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }

    mongoose
      .connect(connectString, options)
      .then((_) => {
        console.log(`Connected mongodb success `)
      })
      .catch((err) => console.log(`Error connect!`))

    mongoose.connection.on('connected', () => {
      console.log('Mongodb connected to db success')
    })
    mongoose.connection.on('error', (err) => {
      console.error('Mongodb connected to db error' + err)
    })
    mongoose.connection.on('disconnected', () => {
      console.log('Mongodb disconnected db success')
    })
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }
}

export const instanceMongoDb = Database.getInstance()
