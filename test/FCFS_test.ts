import { Process } from "../src/model/process/Process";
import { Status } from "../src/model/process/Status";
import { SchedulingStrategy } from "../src/model/algorithms/SchedulingStrategy";
import { Scheduler } from "../src/model/scheduler/Scheduler";
import { FCFS } from "../src/model/algorithms/FCFS";

export function test1(): void {
  let process1 = new Process(1, 10);
  let process2 = new Process(2, 5);
  let process3 = new Process(3, 3);
  let process4 = new Process(4, 7);
  let process5 = new Process(5, 1);
  let intervalId: any;
  let scheduler = new Scheduler(
    [process1, process2, process3, process4, process5],
    1
  );

  let fcfs = new FCFS();
  scheduler.setStrategy(fcfs);

  intervalId = setInterval(() => {
    let elapsedTime = scheduler.getElapsedTime();
    console.log("Elapsed Time: " + elapsedTime);
    for (let i = 0; i < scheduler.getProcesses().length; i++) {
      scheduler.getProcesses()[i].print();
    }
    console.log("--------------------------------------------------");

    scheduler.progress();
    // if all processes are completed, stop the scheduler
    if (!scheduler.hasProcess()) {
      console.log("All processes are completed.");
      console.log("Total Elapsed Time: " + elapsedTime);
      console.log(
        "average turnaround time: " + scheduler.getAverageTurnaroundTime()
      );
      console.log("average waiting time: " + scheduler.getAverageWaitingTime());
      clearInterval(intervalId);
    }
  }, 1000);
}

export function test2(): void {
  let process1 = new Process(1, 5, 1);
  let process2 = new Process(2, 3, 2);
  let process3 = new Process(3, 8, 10);
  let intervalId: any;
  let scheduler = new Scheduler([process1, process2, process3], 1);
  let fcfs = new FCFS();
  scheduler.setStrategy(fcfs);

  intervalId = setInterval(() => {
    let elapsedTime = scheduler.getElapsedTime();
    console.log("Elapsed Time: " + elapsedTime);
    for (let i = 0; i < scheduler.getProcesses().length; i++) {
      scheduler.getProcesses()[i].print();
    }
    console.log("--------------------------------------------------");

    scheduler.progress();
    // if all processes are completed, stop the scheduler
    if (!scheduler.hasProcess()) {
      console.log("All processes are completed.");
      console.log("Total Elapsed Time: " + elapsedTime);
      console.log(
        "average turnaround time: " + scheduler.getAverageTurnaroundTime()
      );
      console.log("average waiting time: " + scheduler.getAverageWaitingTime());
      clearInterval(intervalId);
    }
  }, 1000);
}
