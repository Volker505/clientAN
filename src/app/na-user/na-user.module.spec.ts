import { NaUserModule } from './na-user.module';

describe('NaUserModule', () => {
  let naUserModule: NaUserModule;

  beforeEach(() => {
    naUserModule = new NaUserModule();
  });

  it('should create an instance', () => {
    expect(naUserModule).toBeTruthy();
  });
});
