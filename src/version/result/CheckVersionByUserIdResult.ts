/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IResult from '@/gs2/core/interface/IResult';

import * as Gs2Version from '../model'

export class CheckVersionByUserIdResult implements IResult {
    private projectToken: string|null = null;
    private warnings: Gs2Version.Status[]|null = null;
    private errors: Gs2Version.Status[]|null = null;

    public getProjectToken(): string|null {
        return this.projectToken;
    }

    public setProjectToken(projectToken: string|null) {
        this.projectToken = projectToken;
        return this;
    }

    public withProjectToken(projectToken: string|null): this {
        this.projectToken = projectToken;
        return this;
    }

    public getWarnings(): Gs2Version.Status[]|null {
        return this.warnings;
    }

    public setWarnings(warnings: Gs2Version.Status[]|null) {
        this.warnings = warnings;
        return this;
    }

    public withWarnings(warnings: Gs2Version.Status[]|null): this {
        this.warnings = warnings;
        return this;
    }

    public getErrors(): Gs2Version.Status[]|null {
        return this.errors;
    }

    public setErrors(errors: Gs2Version.Status[]|null) {
        this.errors = errors;
        return this;
    }

    public withErrors(errors: Gs2Version.Status[]|null): this {
        this.errors = errors;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CheckVersionByUserIdResult {
        return new CheckVersionByUserIdResult()
            .withProjectToken(data["projectToken"])
            .withWarnings(data.warnings ?
                data.warnings.map((item: {[key: string]: any}) => {
                    return Gs2Version.Status.fromDict(item);
                }
            ) : [])
            .withErrors(data.errors ?
                data.errors.map((item: {[key: string]: any}) => {
                    return Gs2Version.Status.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "projectToken": this.getProjectToken(),
            "warnings": this.getWarnings() ?
                this.getWarnings()!.map((item: Gs2Version.Status) => {
                    return item.toDict();
                }
            ) : [],
            "errors": this.getErrors() ?
                this.getErrors()!.map((item: Gs2Version.Status) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
