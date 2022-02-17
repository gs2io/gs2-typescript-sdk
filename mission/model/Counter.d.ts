import IModel from '../../core/interface/IModel';
import ScopedValue from './ScopedValue';
export default class Counter implements IModel {
    private counterId;
    private userId;
    private name;
    private values;
    private createdAt;
    private updatedAt;
    getCounterId(): string | null;
    setCounterId(counterId: string | null): this;
    withCounterId(counterId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getValues(): ScopedValue[] | null;
    setValues(values: ScopedValue[] | null): this;
    withValues(values: ScopedValue[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Counter | null;
    toDict(): {
        [key: string]: any;
    };
}
