import { NACommonModule } from './n-a-common.module';

describe('NACommonModule', () => {
  let naCommonModuleModule: NACommonModule;

  beforeEach(() => {
    naCommonModuleModule = new NACommonModule();
  });

  it('should create an instance', () => {
    expect(naCommonModuleModule).toBeTruthy();
  });
});
