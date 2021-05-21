import { container } from 'tsyringe';

import mailConfig from '@config/mail';

import IMailProvider from './models/IMailProvider';

import EtherealMailProvider from './implementations/EtherealMailProvider';
import SMPTMailProvider from './implementations/SMPTMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  smtp: container.resolve(SMPTMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
