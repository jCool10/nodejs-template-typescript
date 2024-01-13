import * as dotenv from 'dotenv'
dotenv.config()

export const configs = {
  app: {
    port: process.env.PORT,
    env: process.env.NODE_ENV
  },
  db: {
    name: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '',
    port: process.env.DB_PORT || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_USER_PWD || '',
    minPoolSize: parseInt(process.env.DB_MIN_POOL_SIZE || '5'),
    maxPoolSize: parseInt(process.env.DB_MAX_POOL_SIZE || '10'),
    url: process.env.DB_URL || ''
  },
  redis: {
    enable: process.env.REDIS_ENABLE,
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD
  },
  rabbitmq: {
    enable: process.env.RABBIT_ENABLE,
    amqpUri: process.env.RABBIT_URI
  },
  openApi: {
    enable: process.env.OPEN_API_ENABLE,
    title: process.env.OPEN_API_TITLE,
    version: process.env.OPEN_API_VERSION,
    description: process.env.OPEN_API_DESCRIPTION
  },
  logger: {
    serviceName: process.env.SERVICE_NAME
  },
  email: {
    enable: process.env.EMAIL_ENABLE,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    },
    email_from: process.env.EMAIL_FROM
  },
  s3: {
    enable: process.env.S3_ENABLE,
    bucket: process.env.BUCKET,
    region: process.env.REGION,
    aws_access_key: process.env.AWS_ACCESS_KEY,
    aws_secret_key: process.env.AWS_SECRET_KEY
  },
  i18n: {
    enable: process.env.I18N_ENABLE,
    locales: ['en', 'vi'],
    defaultLocale: process.env.LOCALE_DEFAULT,
    folderPath: ''
  },
  task: {
    enable: process.env.TASK_ENABLE
  },
  notification: {
    discord: {
      token: process.env.DISCORD_TOKEN,
      channelId: process.env.DISCORD_CHANNEL
    },
    telegram: {}
  }
}
