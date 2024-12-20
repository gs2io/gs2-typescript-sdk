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

import * as Gs2Watch from '../../watch/model'

export default class AccountNamespaceStatistics implements IModel {
    private signup: number|null = null;
    private authentication: number|null = null;
    private registeredTakeOver: number|null = null;
    private removeTakeOver: number|null = null;
    private executeTakeOver: number|null = null;
    public getSignup(): number|null {
        return this.signup;
    }
    public setSignup(signup: number|null) {
        this.signup = signup;
        return this;
    }
    public withSignup(signup: number|null): this {
        this.signup = signup;
        return this;
    }
    public getAuthentication(): number|null {
        return this.authentication;
    }
    public setAuthentication(authentication: number|null) {
        this.authentication = authentication;
        return this;
    }
    public withAuthentication(authentication: number|null): this {
        this.authentication = authentication;
        return this;
    }
    public getRegisteredTakeOver(): number|null {
        return this.registeredTakeOver;
    }
    public setRegisteredTakeOver(registeredTakeOver: number|null) {
        this.registeredTakeOver = registeredTakeOver;
        return this;
    }
    public withRegisteredTakeOver(registeredTakeOver: number|null): this {
        this.registeredTakeOver = registeredTakeOver;
        return this;
    }
    public getRemoveTakeOver(): number|null {
        return this.removeTakeOver;
    }
    public setRemoveTakeOver(removeTakeOver: number|null) {
        this.removeTakeOver = removeTakeOver;
        return this;
    }
    public withRemoveTakeOver(removeTakeOver: number|null): this {
        this.removeTakeOver = removeTakeOver;
        return this;
    }
    public getExecuteTakeOver(): number|null {
        return this.executeTakeOver;
    }
    public setExecuteTakeOver(executeTakeOver: number|null) {
        this.executeTakeOver = executeTakeOver;
        return this;
    }
    public withExecuteTakeOver(executeTakeOver: number|null): this {
        this.executeTakeOver = executeTakeOver;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AccountNamespaceStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AccountNamespaceStatistics()
            .withSignup(data["signup"])
            .withAuthentication(data["authentication"])
            .withRegisteredTakeOver(data["registeredTakeOver"])
            .withRemoveTakeOver(data["removeTakeOver"])
            .withExecuteTakeOver(data["executeTakeOver"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "signup": this.getSignup(),
            "authentication": this.getAuthentication(),
            "registeredTakeOver": this.getRegisteredTakeOver(),
            "removeTakeOver": this.getRemoveTakeOver(),
            "executeTakeOver": this.getExecuteTakeOver(),
        };
    }
}
