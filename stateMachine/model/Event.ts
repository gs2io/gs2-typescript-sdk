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
import ChangeStateEvent from './ChangeStateEvent';
import EmitEvent from './EmitEvent';

export default class Event implements IModel {
    private eventType: string|null = null;
    private changeStateEvent: ChangeStateEvent|null = null;
    private emitEvent: EmitEvent|null = null;
    public getEventType(): string|null {
        return this.eventType;
    }
    public setEventType(eventType: string|null) {
        this.eventType = eventType;
        return this;
    }
    public withEventType(eventType: string|null): this {
        this.eventType = eventType;
        return this;
    }
    public getChangeStateEvent(): ChangeStateEvent|null {
        return this.changeStateEvent;
    }
    public setChangeStateEvent(changeStateEvent: ChangeStateEvent|null) {
        this.changeStateEvent = changeStateEvent;
        return this;
    }
    public withChangeStateEvent(changeStateEvent: ChangeStateEvent|null): this {
        this.changeStateEvent = changeStateEvent;
        return this;
    }
    public getEmitEvent(): EmitEvent|null {
        return this.emitEvent;
    }
    public setEmitEvent(emitEvent: EmitEvent|null) {
        this.emitEvent = emitEvent;
        return this;
    }
    public withEmitEvent(emitEvent: EmitEvent|null): this {
        this.emitEvent = emitEvent;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Event|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Event()
            .withEventType(data["eventType"])
            .withChangeStateEvent(ChangeStateEvent.fromDict(data["changeStateEvent"]))
            .withEmitEvent(EmitEvent.fromDict(data["emitEvent"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "eventType": this.getEventType(),
            "changeStateEvent": this.getChangeStateEvent()?.toDict(),
            "emitEvent": this.getEmitEvent()?.toDict(),
        };
    }
}
