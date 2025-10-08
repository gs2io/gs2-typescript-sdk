import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class DeleteProjectResult implements IResult {
    private item;
    getItem(): Gs2Project.Project | null;
    setItem(item: Gs2Project.Project | null): this;
    withItem(item: Gs2Project.Project | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteProjectResult;
    toDict(): {
        [key: string]: any;
    };
}
