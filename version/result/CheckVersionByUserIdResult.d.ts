import IResult from '../../core/interface/IResult';
import * as Gs2Version from '../model';
export default class CheckVersionByUserIdResult implements IResult {
    private projectToken;
    private warnings;
    private errors;
    getProjectToken(): string | null;
    setProjectToken(projectToken: string | null): this;
    withProjectToken(projectToken: string | null): this;
    getWarnings(): Gs2Version.Status[] | null;
    setWarnings(warnings: Gs2Version.Status[] | null): this;
    withWarnings(warnings: Gs2Version.Status[] | null): this;
    getErrors(): Gs2Version.Status[] | null;
    setErrors(errors: Gs2Version.Status[] | null): this;
    withErrors(errors: Gs2Version.Status[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CheckVersionByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
