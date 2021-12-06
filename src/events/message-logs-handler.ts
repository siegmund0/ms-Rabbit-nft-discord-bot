import { Channel, Client, Guild, TextChannel } from "discord.js";

export class MessageLogsHandler {
    public static async sendLogsToChannel(client: Client, guild: Guild, command: string) {
        let channel: Channel = client.channels.cache.get('917423310646677555');
        if (!channel) throw new Error('No se encontro el channel');
        return (channel as TextChannel).send(`Se ejecuto el comando: \`${command}\` en el servidor: \`${guild.name}\``);
    }
}