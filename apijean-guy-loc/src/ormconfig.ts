import { ConnectionOptions } from 'typeorm';
 
 
export const config: ConnectionOptions = {
      type: 'mysql',
      host: 'obiwan2.univ-brest.fr',
      port: 3306,
      username: 'znedelero',
      password: 'dkmnxvkr',
      database: 'ztm2-znedelero',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }
 