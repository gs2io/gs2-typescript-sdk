import IModel from '../../core/interface/IModel';
import JobResultBody from './JobResultBody';
export default class DeadLetterJob implements IModel {
    private deadLetterJobId;
    private name;
    private userId;
    private scriptId;
    private args;
    private result;
    private createdAt;
    private updatedAt;
    getDeadLetterJobId(): string | null;
    setDeadLetterJobId(deadLetterJobId: string | null): this;
    withDeadLetterJobId(deadLetterJobId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getScriptId(): string | null;
    setScriptId(scriptId: string | null): this;
    withScriptId(scriptId: string | null): this;
    getArgs(): string | null;
    setArgs(args: string | null): this;
    withArgs(args: string | null): this;
    getResult(): JobResultBody[] | null;
    setResult(result: JobResultBody[] | null): this;
    withResult(result: JobResultBody[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeadLetterJob | null;
    toDict(): {
        [key: string]: any;
    };
}
