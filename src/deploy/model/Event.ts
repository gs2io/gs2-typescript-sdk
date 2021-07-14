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

import IModel from '@/gs2/core/interface/IModel';

export class Event implements IModel {
    private eventId: string|null = null;
    private name: string|null = null;
    private resourceName: string|null = null;
    private type: string|null = null;
    private message: string|null = null;
    private eventAt: number|null = null;

    public getEventId(): string|null {
        return this.eventId;
    }

    public setEventId(eventId: string|null) {
        this.eventId = eventId;
        return this;
    }

    public withEventId(eventId: string|null): this {
        this.eventId = eventId;
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

    public getResourceName(): string|null {
        return this.resourceName;
    }

    public setResourceName(resourceName: string|null) {
        this.resourceName = resourceName;
        return this;
    }

    public withResourceName(resourceName: string|null): this {
        this.resourceName = resourceName;
        return this;
    }

    public getType(): string|null {
        return this.type;
    }

    public setType(type: string|null) {
        this.type = type;
        return this;
    }

    public withType(type: string|null): this {
        this.type = type;
        return this;
    }

    public getMessage(): string|null {
        return this.message;
    }

    public setMessage(message: string|null) {
        this.message = message;
        return this;
    }

    public withMessage(message: string|null): this {
        this.message = message;
        return this;
    }

    public getEventAt(): number|null {
        return this.eventAt;
    }

    public setEventAt(eventAt: number|null) {
        this.eventAt = eventAt;
        return this;
    }

    public withEventAt(eventAt: number|null): this {
        this.eventAt = eventAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Event|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Event()
            .withEventId(data["eventId"])
            .withName(data["name"])
            .withResourceName(data["resourceName"])
            .withType(data["type"])
            .withMessage(data["message"])
            .withEventAt(data["eventAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "eventId": this.getEventId(),
            "name": this.getName(),
            "resourceName": this.getResourceName(),
            "type": this.getType(),
            "message": this.getMessage(),
            "eventAt": this.getEventAt(),
        };
    }
}
