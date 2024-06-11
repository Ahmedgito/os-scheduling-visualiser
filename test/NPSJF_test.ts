import { Process } from "../src/model/process/Process";
import { Status } from "../src/model/process/Status";
import { SchedulingStrategy } from "../src/model/algorithms/SchedulingStrategy";
import { Scheduler } from "../src/model/scheduler/Scheduler";
import { NPSJF } from "../src/model/algorithms/NPSJF";

export function test1() {
  let process1 = new Process(1, 6, 3);
  let process2 = new Process(2, 8, 1);
  let process3 = new Process(3, 7, 2);
  let intervalId: any;
  let scheduler = new Scheduler([process1, process2, process3], 1);
  let npsjf = new NPSJF();
  scheduler.setStrategy(npsjf);
  intervalId = setInterval(() => {
    let elapsedTime = scheduler.getElapsedTime();
    console.log("Elapsed Time: " + elapsedTime);
    for (let i = 0; i < scheduler.getProcesses().length; i++) {
      scheduler.getProcesses()[i].print();
    }
    console.log("--------------------------------------------------");
    scheduler.progress();
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

export function test2() {
  let process1 = new Process(1, 5, 1);
  let process2 = new Process(2, 3, 2);
  let process3 = new Process(3, 8, 10);
  let process4 = new Process(4, 2, 19);
  let intervalId: any;
  let scheduler = new Scheduler([process1, process2, process3, process4], 1);
  let npsjf = new NPSJF();
  scheduler.setStrategy(npsjf);
  intervalId = setInterval(() => {
    let elapsedTime = scheduler.getElapsedTime();
    console.log("Elapsed Time: " + elapsedTime);
    for (let i = 0; i < scheduler.getProcesses().length; i++) {
      scheduler.getProcesses()[i].print();
    }
    console.log("--------------------------------------------------");
    scheduler.progress();
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
