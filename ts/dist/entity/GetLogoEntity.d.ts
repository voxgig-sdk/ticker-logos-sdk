import { TickerLogosEntityBase } from '../TickerLogosEntityBase';
import type { TickerLogosSDK } from '../TickerLogosSDK';
import type { Control } from '../types';
import type { GetLogo, GetLogoLoadMatch } from '../TickerLogosTypes';
declare class GetLogoEntity extends TickerLogosEntityBase<GetLogo> {
    constructor(client: TickerLogosSDK, entopts: any);
    make(this: GetLogoEntity): GetLogoEntity;
    load(this: any, reqmatch?: GetLogoLoadMatch, ctrl?: Control): Promise<GetLogoEntity>;
}
export { GetLogoEntity };
