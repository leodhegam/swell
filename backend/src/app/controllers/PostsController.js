import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore } from 'date-fns';
import Posts from '../models/Posts';
import User from '../models/User';
import File from '../models/File';

class FileController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const posts = await Posts.findAll({
      order: ['date'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });
    return res.json(posts);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      user_id: Yup.number(),
      date: Yup.date().notRequired(),
      title: Yup.string().required(),
      content: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }
    const { date, title, content } = req.body;

    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past date are not permited' });
    }

    const posts = await Posts.create({
      user_id: req.userId,
      title,
      content,
      date,
    });
    return res.json(posts);
  }
}

export default new FileController();
