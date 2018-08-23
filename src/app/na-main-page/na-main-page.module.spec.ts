import { NaMainPageModule } from './na-main-page.module';

describe('NaMainPageModule', () => {
  let naMainPageModule: NaMainPageModule;

  beforeEach(() => {
    naMainPageModule = new NaMainPageModule();
  });

  it('should create an instance', () => {
    expect(naMainPageModule).toBeTruthy();
  });
});
