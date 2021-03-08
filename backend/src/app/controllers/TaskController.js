import Task from "../models/Task";
import User from "../models/User";
import Avatar from "../models/Avatar";
import Cover from '../models/Cover';

class TaskController {
  async index(req, res) {
    const tasks = await Task.findAll({
      where: {
        user_id: req.userId,
      },
      attributes:["name","description","priority"],
      include: [
        {
          model: Cover,
          attributes:['name','path']        
        },
        {
          model: User,
          attributes: ["id", "name", "is_admin"],
          include: [
            {
              model: Avatar,
              attributes: ["path", "url"],
            },
          ],
        },
      ],
    });

    if (!tasks) {
      return res.status(400).json({ error: "Not found tasks" });
    }

    return res.json(tasks);
  }
  async store(req, res) {
    const { name, description, priority } = req.body;
    
    const taskExist = await Task.findOne({
      where: { name },
    });

    if (taskExist) {
      return res.status(400).json({ error: "Task already exists" });
    }

    const {id } = await Task.create({
      name,
      description,
      priority,
      user_id: req.userId,
    });

    //cover create
    const {originalname, filename} = req.file;
    await Cover.create({
      name: originalname,
      path: filename,
      task_id: id
    });

    return res.json({ name, priority });
  }
}

export default new TaskController();
