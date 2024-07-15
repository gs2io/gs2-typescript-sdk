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

export default class EnableMfaResult implements IResult {
    private item: Gs2Project.Account|null = null;
    private challengeToken: string|null = null;

    public getItem(): Gs2Project.Account|null {
        return this.item;
    }

    public setItem(item: Gs2Project.Account|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Project.Account|null): this {
        this.item = item;
        return this;
    }

    public getChallengeToken(): string|null {
        return this.challengeToken;
    }

    public setChallengeToken(challengeToken: string|null) {
        this.challengeToken = challengeToken;
        return this;
    }

    public withChallengeToken(challengeToken: string|null): this {
        this.challengeToken = challengeToken;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): EnableMfaResult {
        return new EnableMfaResult()
            .withItem(Gs2Project.Account.fromDict(data["item"]))
            .withChallengeToken(data["challengeToken"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "challengeToken": this.getChallengeToken(),
        };
    }
}
