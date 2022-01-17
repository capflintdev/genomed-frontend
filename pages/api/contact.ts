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
        to: 'karinpark@mail.ru',
        from: 'antipina.ky@genomed.ru',
        subject: `Форма "Позвоните мне" с хромолаба`,
        text: message,
        html: message.replace(/\r\n/g, '<br />'),
    };

    await sendGrid.send(data);

    res.status(200).json({status: 'OK'});
};