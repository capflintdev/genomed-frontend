import {NextApiRequest, NextApiResponse} from 'next';
import * as sendGrid from "@sendgrid/mail";

sendGrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const body = JSON.parse(req.body);

    const message = `
    Имя: ${body.name}\r\n
    Телефон: ${body.phone}\r\n
  `;

    const data = {
        to: ['cs@genomed.ru', 'xeniya.antipina@gmail.com', 'callcenter@genomed.ru'],
        from: {
            email: 'antipina.ky@genomed.ru',
            name: 'Хромолаб'
        },
        subject: `"Позвоните мне!" Сайт Хромолаб, заказ`,
        text: message,
        html: message.replace(/\r\n/g, '<br />'),
    };

    await sendGrid.send(data);

    res.status(200).json({status: 'OK'});
};