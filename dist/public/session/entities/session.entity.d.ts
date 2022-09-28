import { State } from "src/public/state/entities/state.entity";
export declare class Session {
    id: number;
    userId: number;
    ipAddress: string;
    backendStartDateTime: Date;
    stateChangeDateTime: Date;
    stateId: State;
}
