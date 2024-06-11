import { Process } from "../src/model/process/Process";
import { Status } from "../src/model/process/Status";
import { SchedulingStrategy } from "../src/model/algorithms/SchedulingStrategy";
import { Scheduler } from "../src/model/scheduler/Scheduler";
import { RR } from "../src/model/algorithms/RR";

export function test1() {
  let process1 = new Process(1, 10, 0);
  let process2 = new Process(2, 1, 0);
  let process3 = new Process(3, 2, 0);
  let process4 = new Process(4, 1, 0);
  let process5 = new Process(5, 5, 0);
  let intervalId: any;
  let scheduler = new Scheduler(
    [process1, process2, process3, process4, process5],
    1
  );
  let rr = new RR();
  scheduler.setStrategy(rr);
  intervalId = setInterval(() => {
    let elapsedTime = scheduler.getElapsedTime();
    console.log("Elapsed Time: " + elapsedTime);
    for (let i = 0; i < scheduler.getProcesses().length; i++) {
      scheduler.getProcesses()[i].print();
    }
    console.log("--------------------------------------------------");
    scheduler.progress();
    if (!scheduler.hasProcess()) {
      console.log("Elapsed Time: " + scheduler.getElapsedTime());
      for (let i = 0; i < scheduler.getProcesses().length; i++) {
        scheduler.getProcesses()[i].print();
      }
      console.log("--------------------------------------------------");
      console.log("All processes are completed.");
      console.log("Total Elapsed Time: " + scheduler.getElapsedTime());
      console.log(
        "average turnaround time: " + scheduler.getAverageTurnaroundTime()
      );
      console.log("average waiting time: " + scheduler.getAverageWaitingTime());
      clearInterval(intervalId);
    }
  }, 1000);
}

export function test2() {
  let process1 = new Process(1, 6, 0);
  let process2 = new Process(2, 4, 1);
  let process3 = new Process(3, 2, 2);
  let process4 = new Process(4, 3, 1);
  let intervalId: any;
  let scheduler = new Scheduler([process1, process2, process3, process4], 1);
  let rr = new RR();
  scheduler.setStrategy(rr);
  intervalId = setInterval(() => {
    let elapsedTime = scheduler.getElapsedTime();
    console.log("Elapsed Time: " + elapsedTime);
    for (let i = 0; i < scheduler.getProcesses().length; i++) {
      scheduler.getProcesses()[i].print();
    }
    console.log("--------------------------------------------------");
    scheduler.progress();
    if (!scheduler.hasProcess()) {
      console.log("Elapsed Time: " + elapsedTime);
      for (let i = 0; i < scheduler.getProcesses().length; i++) {
        scheduler.getProcesses()[i].print();
      }
      console.log("--------------------------------------------------");
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
