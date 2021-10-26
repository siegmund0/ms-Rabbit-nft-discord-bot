import { ApplicationCommandData, CommandInteraction } from 'discord.js';

import { EventData } from '../models/internal-models';
import { Lang } from '../services';
import { MessageUtils } from '../utils';
import { BlockFarmClub } from '../webServices/BlockFarmClub';
//import { CryptoMinesEthernal } from '../webServices/CryptominersEternal';
import { Command } from './command';

export class TestCommand implements Command {
    public data: ApplicationCommandData = {
        name: Lang.getCom('commands.test'),
        description: Lang.getCom('commandDescs.test'),
    };
    public requireDev = false;
    public requireGuild = false;
    public requirePerms = [];

    public async execute(intr: CommandInteraction, data: EventData): Promise<void> {
        let response = await BlockFarmClub();
        console.log(response.data);
        // await MessageUtils.sendIntr(
        //     intr,
        //     Lang.getEmbed('displayEmbeds.test', data.lang(), {
        //         TOKEN: response.data,
        //         TOKEN_NAME: response.name,
        //         PLATAFORM: response.asset_platform_id,
        //         BSCSCAN_PAGE: response.links.blockchain_site[0],
        //         CONTRACT_ADDRESS: response.contract_address,
        //         USD_PRICE: response.market_data.current_price.usd,
        //         BNB_PRICE: response.market_data.current_price.bnb,
        //         TOTAL_SUPPLY: response.market_data.total_supply,
        //         TRADE_URL: response.tickers[0].trade_url
        //     })
        // );
    }
}
