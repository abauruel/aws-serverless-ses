import { APIGatewayEvent } from "aws-lambda"
import { SES } from 'aws-sdk'

export const handler = async (event: APIGatewayEvent) => {
  const ses = new SES()

  const { to, from, subject, text } = JSON.parse(event.body)
  if (!to || !from || !subject || !text) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "to, from, subject or text are all required in the body"
      })
    }
  }

  const params = {
    Destination: {
      ToAddresses: [to]
    },
    Message: {
      Body: {
        Text: { Data: text }
      },
      Subject: { Data: subject }
    },
    Source: from
  }

  try {
    await ses.sendEmail(params).promise()
    return {
      statusCode: 200,
      body: JSON.stringify({})
    }
  } catch (error) {
    console.log('error sending email ', error)
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'The email failed to send' })
    }
  }

}

