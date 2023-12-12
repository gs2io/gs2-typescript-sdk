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

export default class EmitEvent implements IModel {
    private event: string|null = null;
    private parameters: string|null = null;
    private timestamp: number|null = null;
    public getEvent(): string|null {
        return this.event;
    }
    public setEvent(event: string|null) {
        this.event = event;
        return this;
    }
    public withEvent(event: string|null): this {
        this.event = event;
        return this;
    }
    public getParameters(): string|null {
        return this.parameters;
    }
    public setParameters(parameters: string|null) {
        this.parameters = parameters;
        return this;
    }
    public withParameters(parameters: string|null): this {
        this.parameters = parameters;
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

    public static fromDict(data: {[key: string]: any}): EmitEvent|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new EmitEvent()
            .withEvent(data["event"])
            .withParameters(data["parameters"])
            .withTimestamp(data["timestamp"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "event": this.getEvent(),
            "parameters": this.getParameters(),
            "timestamp": this.getTimestamp(),
        };
    }
}
