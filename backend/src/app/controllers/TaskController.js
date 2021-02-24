import Task from "../models/Task";

class TaskController {
  async index(req, res) {
    const tasks = await Task.findAll();

    if (!tasks) {
      return res.status(400).json({ error: "Not found tasks" });
    }

    return res.json(tasks);
  }
  async store(req, res) {
    const taskExist = await Task.findOne({
      where: { name: req.body.name },
    });

    if (taskExist) {
      return res.status(400).json({ error: "Task already exists" });
    }

    const { name, priority } = await Task.create(req.body);
    return res.json({ name, priority });
  }
}

export default new TaskController();
