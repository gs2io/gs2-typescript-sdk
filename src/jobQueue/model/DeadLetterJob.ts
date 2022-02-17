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

import IModel from '../../core/interface/IModel';
import JobResultBody from './JobResultBody';

export default class DeadLetterJob implements IModel {
    private deadLetterJobId: string|null = null;
    private name: string|null = null;
    private userId: string|null = null;
    private scriptId: string|null = null;
    private args: string|null = null;
    private result: JobResultBody[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getDeadLetterJobId(): string|null {
        return this.deadLetterJobId;
    }

    public setDeadLetterJobId(deadLetterJobId: string|null) {
        this.deadLetterJobId = deadLetterJobId;
        return this;
    }

    public withDeadLetterJobId(deadLetterJobId: string|null): this {
        this.deadLetterJobId = deadLetterJobId;
        return this;
    }

    public getName(): string|null {
        return this.name;
    }

    public setName(name: string|null) {
        this.name = name;
        return this;
    }

    public withName(name: string|null): this {
        this.name = name;
        return this;
    }

    public getUserId(): string|null {
        return this.userId;
    }

    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }

    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }

    public getScriptId(): string|null {
        return this.scriptId;
    }

    public setScriptId(scriptId: string|null) {
        this.scriptId = scriptId;
        return this;
    }

    public withScriptId(scriptId: string|null): this {
        this.scriptId = scriptId;
        return this;
    }

    public getArgs(): string|null {
        return this.args;
    }

    public setArgs(args: string|null) {
        this.args = args;
        return this;
    }

    public withArgs(args: string|null): this {
        this.args = args;
        return this;
    }

    public getResult(): JobResultBody[]|null {
        return this.result;
    }

    public setResult(result: JobResultBody[]|null) {
        this.result = result;
        return this;
    }

    public withResult(result: JobResultBody[]|null): this {
        this.result = result;
        return this;
    }

    public getCreatedAt(): number|null {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }

    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }

    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }

    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DeadLetterJob|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DeadLetterJob()
            .withDeadLetterJobId(data["deadLetterJobId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withScriptId(data["scriptId"])
            .withArgs(data["args"])
            .withResult(data.result ?
                data.result.map((item: {[key: string]: any}) => {
                    return JobResultBody.fromDict(item);
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "deadLetterJobId": this.getDeadLetterJobId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "scriptId": this.getScriptId(),
            "args": this.getArgs(),
            "result": this.getResult() ?
                this.getResult()!.map((item: JobResultBody) => {
                    return item.toDict();
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
