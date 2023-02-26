import { printLine } from './modules/print';

console.log('컨텐츠 파일 :::::::');

chrome.bookmarks.get('1', () => console.log('북마크!!'));

printLine("Using the 'printLine' function from the Print Module");
