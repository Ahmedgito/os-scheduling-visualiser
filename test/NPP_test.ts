import { Process } from "../src/model/process/Process";
import { Status } from "../src/model/process/Status";
import { SchedulingStrategy } from "../src/model/algorithms/SchedulingStrategy";
import { Scheduler } from "../src/model/scheduler/Scheduler";
import { NPP } from "../src/model/algorithms/NPP";

export function test1() {
  let process1 = new Process(1, 6, 2, 1);
  let process2 = new Process(2, 4, 5, 2);
  let process3 = new Process(3, 4, 5, 2);
  let intervalId: any;
  let scheduler = new Scheduler([process1, process2, process3], 1);
  let npp = new NPP();
  scheduler.setStrategy(npp);
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

export function test2() {
  let process1 = new Process(1, 6, 0, 1);
  let process2 = new Process(2, 4, 1, 2);
  let process3 = new Process(3, 2, 2, 3);
  let process4 = new Process(4, 3, 3, 4);
  let intervalId: any;
  let scheduler = new Scheduler([process1, process2, process3, process4], 1);
  let npp = new NPP();
  scheduler.setStrategy(npp);
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
