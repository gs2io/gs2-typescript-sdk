import IModel from '../../core/interface/IModel';
import MatchmakingDurationSeconds from './MatchmakingDurationSeconds';
export default class MatchmakingRole implements IModel {
    private roleName;
    private successful;
    private unsuccessful;
    private successfulRate;
    private durationSeconds;
    getRoleName(): string | null;
    setRoleName(roleName: string | null): this;
    withRoleName(roleName: string | null): this;
    getSuccessful(): number | null;
    setSuccessful(successful: number | null): this;
    withSuccessful(successful: number | null): this;
    getUnsuccessful(): number | null;
    setUnsuccessful(unsuccessful: number | null): this;
    withUnsuccessful(unsuccessful: number | null): this;
    getSuccessfulRate(): number | null;
    setSuccessfulRate(successfulRate: number | null): this;
    withSuccessfulRate(successfulRate: number | null): this;
    getDurationSeconds(): MatchmakingDurationSeconds | null;
    setDurationSeconds(durationSeconds: MatchmakingDurationSeconds | null): this;
    withDurationSeconds(durationSeconds: MatchmakingDurationSeconds | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MatchmakingRole | null;
    toDict(): {
        [key: string]: any;
    };
}
