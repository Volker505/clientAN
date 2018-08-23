import { NACommonModuleModule } from './na-common-module.module';

describe('NACommonModuleModule', () => {
  let naCommonModuleModule: NACommonModuleModule;

  beforeEach(() => {
    naCommonModuleModule = new NACommonModuleModule();
  });

  it('should create an instance', () => {
    expect(naCommonModuleModule).toBeTruthy();
  });
});
