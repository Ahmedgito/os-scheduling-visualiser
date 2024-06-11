import { Scheduler } from "../scheduler/Scheduler";
import { SchedulingStrategy } from "./SchedulingStrategy";
import { Status } from "../process/Status";
import { Process } from "../process/Process";

// non-preemptive priority
export class NPP implements SchedulingStrategy {
  run(scheduler: Scheduler): Process | null {
    console.log("Running FCFS");
  }
}
