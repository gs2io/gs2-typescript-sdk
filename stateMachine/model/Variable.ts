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

export default class Variable implements IModel {
    private stateMachineName: string|null = null;
    private value: string|null = null;
    public getStateMachineName(): string|null {
        return this.stateMachineName;
    }
    public setStateMachineName(stateMachineName: string|null) {
        this.stateMachineName = stateMachineName;
        return this;
    }
    public withStateMachineName(stateMachineName: string|null): this {
        this.stateMachineName = stateMachineName;
        return this;
    }
    public getValue(): string|null {
        return this.value;
    }
    public setValue(value: string|null) {
        this.value = value;
        return this;
    }
    public withValue(value: string|null): this {
        this.value = value;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Variable|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Variable()
            .withStateMachineName(data["stateMachineName"])
            .withValue(data["value"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "stateMachineName": this.getStateMachineName(),
            "value": this.getValue(),
        };
    }
}
