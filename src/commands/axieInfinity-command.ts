import { ApplicationCommandData, CommandInteraction } from 'discord.js';

import { EventData } from '../models/internal-models';
import { Lang } from '../services';
import { MessageUtils } from '../utils';
import { AxieInfinityWebService } from '../webServices/AxieInfinityWebService';
import { Command } from './command';

export class AxieInfinityCommand implements Command {
    public data: ApplicationCommandData = {
        name: Lang.getCom('commands.axieinfinity'),
        description: Lang.getCom('commandDescs.axieinfinity'),
    };
    public requireDev = false;
    public requireGuild = false;
    public requirePerms = [];

    public async execute(intr: CommandInteraction, data: EventData): Promise<void> {
        let response = await AxieInfinityWebService();
        let homepage = response.links.homepage[0];
        let repository = response.links.repos_url.github[0];
        homepage == null || undefined ? homepage = 'Homepage not found' : homepage;
        repository == null || undefined ? repository = 'Repository not found' : repository;
        await MessageUtils.sendIntr(
            intr,
            Lang.getEmbed('displayEmbeds.axieinfinity', data.lang(), {
                TOKEN: response.symbol,
                TOKEN_NAME: response.name,
                PLATAFORM: response.asset_platform_id,
                BSCSCAN_PAGE: response.links.blockchain_site[0],
                CONTRACT_ADDRESS: response.contract_address,
                USD_PRICE: response.market_data.current_price.usd,
                BNB_PRICE: response.market_data.current_price.bnb,
                PRICE_CHANGE_24HS: response.market_data.price_change_percentage_24h,
                PRICE_CHANGE_7D: response.market_data.price_change_percentage_7d,
                MARKET_CAP: response.market_data.market_cap.usd,
                TOTAL_SUPPLY: response.market_data.total_supply,
                CIRCULATING_SUPPLY: response.market_data.circulating_supply,
                TRADE_URL: response.tickers[0].trade_url,
                HOMEPAGE: homepage,
                REPOSITORY: repository,
            })
        );
    }
}