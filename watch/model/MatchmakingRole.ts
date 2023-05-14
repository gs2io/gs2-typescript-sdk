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
import MatchmakingDurationSeconds from './MatchmakingDurationSeconds';

export default class MatchmakingRole implements IModel {
    private roleName: string|null = null;
    private successful: number|null = null;
    private unsuccessful: number|null = null;
    private successfulRate: number|null = null;
    private durationSeconds: MatchmakingDurationSeconds|null = null;
    public getRoleName(): string|null {
        return this.roleName;
    }
    public setRoleName(roleName: string|null) {
        this.roleName = roleName;
        return this;
    }
    public withRoleName(roleName: string|null): this {
        this.roleName = roleName;
        return this;
    }
    public getSuccessful(): number|null {
        return this.successful;
    }
    public setSuccessful(successful: number|null) {
        this.successful = successful;
        return this;
    }
    public withSuccessful(successful: number|null): this {
        this.successful = successful;
        return this;
    }
    public getUnsuccessful(): number|null {
        return this.unsuccessful;
    }
    public setUnsuccessful(unsuccessful: number|null) {
        this.unsuccessful = unsuccessful;
        return this;
    }
    public withUnsuccessful(unsuccessful: number|null): this {
        this.unsuccessful = unsuccessful;
        return this;
    }
    public getSuccessfulRate(): number|null {
        return this.successfulRate;
    }
    public setSuccessfulRate(successfulRate: number|null) {
        this.successfulRate = successfulRate;
        return this;
    }
    public withSuccessfulRate(successfulRate: number|null): this {
        this.successfulRate = successfulRate;
        return this;
    }
    public getDurationSeconds(): MatchmakingDurationSeconds|null {
        return this.durationSeconds;
    }
    public setDurationSeconds(durationSeconds: MatchmakingDurationSeconds|null) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    public withDurationSeconds(durationSeconds: MatchmakingDurationSeconds|null): this {
        this.durationSeconds = durationSeconds;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MatchmakingRole|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchmakingRole()
            .withRoleName(data["roleName"])
            .withSuccessful(data["successful"])
            .withUnsuccessful(data["unsuccessful"])
            .withSuccessfulRate(data["successfulRate"])
            .withDurationSeconds(MatchmakingDurationSeconds.fromDict(data["durationSeconds"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "roleName": this.getRoleName(),
            "successful": this.getSuccessful(),
            "unsuccessful": this.getUnsuccessful(),
            "successfulRate": this.getSuccessfulRate(),
            "durationSeconds": this.getDurationSeconds()?.toDict(),
        };
    }
}
