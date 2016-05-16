import HomePage from './pages/home';
import * as Chance from 'chance';

describe('Adding new items', () => {
  const chance = new Chance();
  let homePage: HomePage;
  let itemText: string;
  
  beforeAll(async () => {
    homePage = new HomePage();
    
    console.log('Loading the Home page...');
    await homePage.load();
  });
  
  beforeEach(async () => {  
    console.log('Adding a new item...');
    itemText = chance.sentence({words: 4});
    await homePage.newItemBox.type(itemText);
    await homePage.newItemBox.typeEnter();    
  });
  
  it('new item box should be empty after adding a new item', async () => {
    const isEmpty: boolean = await homePage.newItemBox.isEmpty();
    expect(isEmpty).toEqual(true);
  });
  
  it('new item should appear in the item list', async () => {
    const containsItem: boolean = await homePage.itemList.containsItem(itemText);
    expect(containsItem).toEqual(true);
  });   
});