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
import * as Gs2Project from '../model'

export default class GetProjectTokenResult implements IResult {
    private item: Gs2Project.Project|null = null;
    private ownerId: string|null = null;
    private projectToken: string|null = null;

    public getItem(): Gs2Project.Project|null {
        return this.item;
    }

    public setItem(item: Gs2Project.Project|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Project.Project|null): this {
        this.item = item;
        return this;
    }

    public getOwnerId(): string|null {
        return this.ownerId;
    }

    public setOwnerId(ownerId: string|null) {
        this.ownerId = ownerId;
        return this;
    }

    public withOwnerId(ownerId: string|null): this {
        this.ownerId = ownerId;
        return this;
    }

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

    public static fromDict(data: {[key: string]: any}): GetProjectTokenResult {
        return new GetProjectTokenResult()
            .withItem(Gs2Project.Project.fromDict(data["item"]))
            .withOwnerId(data["ownerId"])
            .withProjectToken(data["projectToken"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "ownerId": this.getOwnerId(),
            "projectToken": this.getProjectToken(),
        };
    }
}
