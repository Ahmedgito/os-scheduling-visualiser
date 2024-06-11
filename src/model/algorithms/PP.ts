import { Scheduler } from "../scheduler/Scheduler";
import { SchedulingStrategy } from "./SchedulingStrategy";
import { Status } from "../process/Status";
import { Process } from "../process/Process";

// preemptive priority
export class PP implements SchedulingStrategy {
  run(scheduler: Scheduler): Process | null {
    console.log("Running PP");
  }
}
