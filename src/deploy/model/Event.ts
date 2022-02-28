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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:deploy:{stackName}:event:{eventName}";

export default class Event implements IModel {
    private eventId: string|null = null;
    private name: string|null = null;
    private resourceName: string|null = null;
    private type: string|null = null;
    private message: string|null = null;
    private eventAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '.*')
            .replace('{eventName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{stackName}', '.*')
            .replace('{eventName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getStackName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '(.*)')
            .replace('{eventName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getEventName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '.*')
            .replace('{eventName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getStackName(grn) == null) {
            return false;
        }
        if (this.getEventName(grn) == null) {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        stackName: string|null,
        eventName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{stackName}', stackName ?? '')
            .replace('{eventName}', eventName ?? '');
    }

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
