import TaskStatus from "../task/TaskStatus";

export default interface TaskLog {
  id: string;
  status: TaskStatus;
  name: string;
  startdate: string;
  deadline: string;
  department: string;
}
