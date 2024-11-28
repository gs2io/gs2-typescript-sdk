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

import IModel from './interface/IModel';

export default class ResultMetadata implements IModel {
    private uncommitted: string|null = null;
    public getUncommitted(): string|null {
        return this.uncommitted;
    }
    public setUncommitted(uncommitted: string|null) {
        this.uncommitted = uncommitted;
        return this;
    }
    public withUncommitted(uncommitted: string|null): this {
        this.uncommitted = uncommitted;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ResultMetadata|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ResultMetadata()
            .withUncommitted(data["uncommitted"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "uncommitted": this.getUncommitted(),
        };
    }
}
