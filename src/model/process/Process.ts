import { Status } from "./Status";

export class Process {
  private processId: number;
  private burstTime: number;
  private arrivalTime: number;
  private completionTime: number;
  private workingTime: number;
  private priority: number;
  private status: Status = Status.NOT_ARRIVED;

  constructor(
    processId: number,
    burstTime: number,
    arrivalTime: number = 0,
    completionTime: number = 0,
    priority: number = 1
  ) {
    this.processId = processId;
    this.burstTime = burstTime;
    this.workingTime = burstTime;
    this.arrivalTime = arrivalTime;
    this.completionTime = completionTime;
    this.priority = priority;
  }

  setProcessId(processId: number) {
    this.processId = processId;
  }

  setBurstTime(burstTime: number) {
    this.burstTime = burstTime;
  }

  setArrivalTime(arrivalTime: number) {
    this.arrivalTime = arrivalTime;
  }

  setCompletionTime(completionTime: number) {
    this.completionTime = completionTime;
  }

  setPriority(priority: number) {
    this.priority = priority;
  }

  setStatus(status: Status) {
    this.status = status;
  }

  getProcessId(): number {
    return this.processId;
  }

  getBurstTime(): number {
    return this.burstTime;
  }

  getArrivalTime(): number {
    return this.arrivalTime;
  }

  getCompletionTime(): number {
    return this.completionTime;
  }

  getPriority(): number {
    return this.priority;
  }

  getStatus(): Status {
    return this.status;
  }

  getTurnaroundTime(): number {
    return this.completionTime - this.arrivalTime;
  }

  getWaitingTime(): number {
    return this.completionTime - this.arrivalTime - this.workingTime;
  }
}
