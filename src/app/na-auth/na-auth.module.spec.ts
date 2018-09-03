import { NaAuthModule } from './na-auth.module';

describe('NaAuthModule', () => {
  let naAuthModule: NaAuthModule;

  beforeEach(() => {
    naAuthModule = new NaAuthModule();
  });

  it('should create an instance', () => {
    expect(naAuthModule).toBeTruthy();
  });
});
