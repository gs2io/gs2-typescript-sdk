import IModel from '../../core/interface/IModel';
import * as Gs2Matchmaking from '../../matchmaking/model';
export default class CapacityOfRole implements IModel {
    private roleName;
    private roleAliases;
    private capacity;
    private participants;
    getRoleName(): string | null;
    setRoleName(roleName: string | null): this;
    withRoleName(roleName: string | null): this;
    getRoleAliases(): string[] | null;
    setRoleAliases(roleAliases: string[] | null): this;
    withRoleAliases(roleAliases: string[] | null): this;
    getCapacity(): number | null;
    setCapacity(capacity: number | null): this;
    withCapacity(capacity: number | null): this;
    getParticipants(): Gs2Matchmaking.Player[] | null;
    setParticipants(participants: Gs2Matchmaking.Player[] | null): this;
    withParticipants(participants: Gs2Matchmaking.Player[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CapacityOfRole | null;
    toDict(): {
        [key: string]: any;
    };
}
