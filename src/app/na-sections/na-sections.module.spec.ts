import { NaSectionsModule } from './na-sections.module';

describe('NaSectionsModule', () => {
  let naSectionsModule: NaSectionsModule;

  beforeEach(() => {
    naSectionsModule = new NaSectionsModule();
  });

  it('should create an instance', () => {
    expect(naSectionsModule).toBeTruthy();
  });
});
