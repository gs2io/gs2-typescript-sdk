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

export default class IssueAccountTokenResult implements IResult {
    private accountToken: string|null = null;

    public getAccountToken(): string|null {
        return this.accountToken;
    }

    public setAccountToken(accountToken: string|null) {
        this.accountToken = accountToken;
        return this;
    }

    public withAccountToken(accountToken: string|null): this {
        this.accountToken = accountToken;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): IssueAccountTokenResult {
        return new IssueAccountTokenResult()
            .withAccountToken(data["accountToken"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "accountToken": this.getAccountToken(),
        };
    }
}
