import { NaChatModule } from './na-chat.module';

describe('NaChatModule', () => {
  let naChatModule: NaChatModule;

  beforeEach(() => {
    naChatModule = new NaChatModule();
  });

  it('should create an instance', () => {
    expect(naChatModule).toBeTruthy();
  });
});
