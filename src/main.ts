import express from 'express';
const config = require('../medusa-config');
import { Medusa } from 'medusa-extender';
import { resolve } from 'path';
import { StoreModule } from './modules/store/store.module';

async function bootstrap() {
    const expressInstance = express();
    
    await new Medusa(resolve(__dirname, '..'), expressInstance).load([StoreModule]);
    
    const port = config?.serverConfig?.port ?? 9000;
    expressInstance.listen(port, () => {
        console.info('I am ' + port);
    });
}

bootstrap();