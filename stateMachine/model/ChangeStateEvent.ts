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

import * as Gs2StateMachine from '../../stateMachine/model'

export default class ChangeStateEvent implements IModel {
    private taskName: string|null = null;
    private hash: string|null = null;
    private timestamp: number|null = null;
    public getTaskName(): string|null {
        return this.taskName;
    }
    public setTaskName(taskName: string|null) {
        this.taskName = taskName;
        return this;
    }
    public withTaskName(taskName: string|null): this {
        this.taskName = taskName;
        return this;
    }
    public getHash(): string|null {
        return this.hash;
    }
    public setHash(hash: string|null) {
        this.hash = hash;
        return this;
    }
    public withHash(hash: string|null): this {
        this.hash = hash;
        return this;
    }
    public getTimestamp(): number|null {
        return this.timestamp;
    }
    public setTimestamp(timestamp: number|null) {
        this.timestamp = timestamp;
        return this;
    }
    public withTimestamp(timestamp: number|null): this {
        this.timestamp = timestamp;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ChangeStateEvent|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChangeStateEvent()
            .withTaskName(data["taskName"])
            .withHash(data["hash"])
            .withTimestamp(data["timestamp"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "taskName": this.getTaskName(),
            "hash": this.getHash(),
            "timestamp": this.getTimestamp(),
        };
    }
}
