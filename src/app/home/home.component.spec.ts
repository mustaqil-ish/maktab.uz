import {TestBed, ComponentFixture} from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatGridListHarness, MatGridTileHarness} from '@angular/material/grid-list/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import {MatGridListModule} from '@angular/material/grid-list';
import {HomeComponent} from './home.component';

describe('GridListHarnessExample', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let loader: HarnessLoader;

  beforeAll(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), {
      teardown: {destroyAfterEach: true}
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatGridListModule],
      declarations: [HomeComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should be able to load grid-list harnesses', async () => {
    const harnesses = await loader.getAllHarnesses(MatGridListHarness);
    expect(harnesses.length).toBe(1);
  });

  it('should be able to load grid-tile harnesses', async () => {
    const harnesses = await loader.getAllHarnesses(MatGridTileHarness);
    expect(harnesses.length).toBe(4);
  });

  it('should be able to get tiles of grid-list with filters', async () => {
    const gridList = await loader.getHarness(MatGridListHarness);
    const tiles = await gridList.getTiles({headerText: /Tile [34]/});
    expect(tiles.length).toBe(2);
  });

  it('should be able to check whether tile has header', async () => {
    const tiles = await loader.getAllHarnesses(MatGridTileHarness);
    expect(await tiles[0].hasHeader()).toBe(false);
    expect(await (await tiles[0].host()).text()).toBe('Tile 1 (no header, no footer)');
  });

  it('should be able to check whether tile has footer', async () => {
    const tiles = await loader.getAllHarnesses(MatGridTileHarness);
    expect(await tiles[2].hasFooter()).toBe(true);
    expect(await tiles[2].getFooterText()).toBe('Tile 3 footer');
  });
});



