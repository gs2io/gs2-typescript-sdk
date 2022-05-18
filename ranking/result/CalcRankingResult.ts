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

import * as Gs2Ranking from '../model'

export default class CalcRankingResult implements IResult {
    private processing: boolean|null = null;

    public getProcessing(): boolean|null {
        return this.processing;
    }

    public setProcessing(processing: boolean|null) {
        this.processing = processing;
        return this;
    }

    public withProcessing(processing: boolean|null): this {
        this.processing = processing;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CalcRankingResult {
        return new CalcRankingResult()
            .withProcessing(data["processing"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "processing": this.getProcessing(),
        };
    }
}
