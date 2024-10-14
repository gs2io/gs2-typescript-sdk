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
import * as Gs2Ranking2 from '../model'

export default class VerifyGlobalRankingScoreByStampTaskResult implements IResult {
    private item: Gs2Ranking2.GlobalRankingScore|null = null;
    private newContextStack: string|null = null;

    public getItem(): Gs2Ranking2.GlobalRankingScore|null {
        return this.item;
    }

    public setItem(item: Gs2Ranking2.GlobalRankingScore|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Ranking2.GlobalRankingScore|null): this {
        this.item = item;
        return this;
    }

    public getNewContextStack(): string|null {
        return this.newContextStack;
    }

    public setNewContextStack(newContextStack: string|null) {
        this.newContextStack = newContextStack;
        return this;
    }

    public withNewContextStack(newContextStack: string|null): this {
        this.newContextStack = newContextStack;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): VerifyGlobalRankingScoreByStampTaskResult {
        return new VerifyGlobalRankingScoreByStampTaskResult()
            .withItem(Gs2Ranking2.GlobalRankingScore.fromDict(data["item"]))
            .withNewContextStack(data["newContextStack"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "newContextStack": this.getNewContextStack(),
        };
    }
}
