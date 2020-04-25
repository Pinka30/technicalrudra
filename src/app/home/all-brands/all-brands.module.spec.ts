import { AllBrandsModule } from './all-brands.module';

describe('AllBrandsModule', () => {
  let allBrandsModule: AllBrandsModule;

  beforeEach(() => {
    allBrandsModule = new AllBrandsModule();
  });

  it('should create an instance', () => {
    expect(allBrandsModule).toBeTruthy();
  });
});
