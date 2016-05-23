import ElementFinder = protractor.ElementFinder;

import NewItemBox from './components/new-item-box';
import ItemList from './components/item-list';

class HomePage {
  private _titleElement: ElementFinder;
  private _containerElement: ElementFinder;
  private _headerElement: ElementFinder;
  private _newItemBox: NewItemBox;
  private _itemList: ItemList;
  
  constructor() {
    this._titleElement = element(by.css('title'));
    
    this._containerElement = element(by.css('section.todoapp'));
    this._headerElement = this._containerElement.element(by.css('h1'));
    
    this._newItemBox = new NewItemBox(this._containerElement);
    this._itemList = new ItemList(this._containerElement);
  }
  
  get newItemBox() {
    return this._newItemBox;
  }
  
  get itemList() {
    return this._itemList;
  }
  
  load() {
    return browser.get('/');
  }
  
  getTitle() {
    return this._titleElement.getInnerHtml();
  }
  
  getHeader() {
    return this._headerElement.getInnerHtml();
  }
}

export default HomePage;