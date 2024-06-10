import { Process } from "../process/Process";
import { Status } from "../process/Status";
import { SchedulingStrategy } from "../algorithms/SchedulingStrategy";
import { FCFS } from "../algorithms/FCFS";

class Scheduler {
  private processes: Process[];
  private quantumTime: number;
  private elapsedTime: number;
  private live: boolean;
  private strategy: SchedulingStrategy;

  constructor(processes: Process[] = [], quantumTime: number) {
    this.processes = processes;
    this.quantumTime = quantumTime;
    this.elapsedTime = 0;
    this.live = true;
    this.strategy = new FCFS();
  }

  setProcesses(processes: Process[]) {
    this.processes = processes;
  }

  setQuantumTime(quantumTime: number) {
    this.quantumTime = quantumTime;
  }

  setElapsedTime(elapsedTime: number) {
    this.elapsedTime = elapsedTime;
  }

  setLive(live: boolean) {
    this.live = live;
  }

  setStrategy(strategy: SchedulingStrategy) {
    this.strategy = strategy;
  }

  getProcesses(): Process[] {
    return this.processes;
  }

  getQuantumTime(): number {
    return this.quantumTime;
  }

  getElapsedTime(): number {
    return this.elapsedTime;
  }

  isLive(): boolean {
    return this.live;
  }

  getStrategy(): SchedulingStrategy {
    return this.strategy;
  }

  progress(): void {
    this.strategy.run();
  }

  addProcess(process: Process): void {
    this.processes.push(process);
  }

  hasProcess(): boolean {
    for (let i = 0; i < this.processes.length; i++) {
      if (this.processes[i].getStatus() !== Status.COMPLETED) {
        return true;
      }
    }

    return false;
  }

  getAverageTurnaroundTime(): number {
    let totalTurnaroundTime = 0;

    for (let i = 0; i < this.processes.length; i++) {
      totalTurnaroundTime += this.processes[i].getTurnaroundTime();
    }

    return totalTurnaroundTime / this.processes.length;
  }

  getAverageWaitingTime(): number {
    let totalWaitingTime = 0;

    for (let i = 0; i < this.processes.length; i++) {
      totalWaitingTime += this.processes[i].getWaitingTime();
    }

    return totalWaitingTime / this.processes.length;
  }
}
