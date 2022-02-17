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

import IResult from '../../core/interface/IResult';

import * as Gs2Matchmaking from '../model'

export class GetNamespaceStatusResult implements IResult {
    private status: string|null = null;

    public getStatus(): string|null {
        return this.status;
    }

    public setStatus(status: string|null) {
        this.status = status;
        return this;
    }

    public withStatus(status: string|null): this {
        this.status = status;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GetNamespaceStatusResult {
        return new GetNamespaceStatusResult()
            .withStatus(data["status"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "status": this.getStatus(),
        };
    }
}
