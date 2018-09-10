import { NaCommonModule } from './na-common.module';

describe('NaCommonModule', () => {
  let naCommonModuleModule: NaCommonModule;

  beforeEach(() => {
    naCommonModuleModule = new NaCommonModule();
  });

  it('should create an instance', () => {
    expect(naCommonModuleModule).toBeTruthy();
  });
});
