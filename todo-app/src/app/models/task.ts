export class Task {
  constructor(
    public name: string,
    public dueDate: {
      month: string,
      day: number,
      year: number,
    },
    public urgency: number,
  ) {
  }
}
