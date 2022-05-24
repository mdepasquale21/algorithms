import {Item} from './item';
import {ItemsQueue} from './queue';

describe('ItemsQueue', () => {
    let itemsQueue: ItemsQueue;

    const items: Item[] = [
        {id: '2', lastViewed: '2019-07-22T09:58:25.967Z', type: 'wine'},
        {id: '0', lastViewed: '2019-09-22T09:58:25.967Z', type: 'wine'},
        {id: '1', lastViewed: '2019-08-22T09:58:25.967Z', type: 'wine-style'},
        {id: '4', lastViewed: '2018-08-22T09:58:25.967Z', type: 'wine-style'},
        {id: '3', lastViewed: '2018-09-22T09:58:25.967Z', type: 'wine'}
    ];

    const sortedItems: Item[] = [
        {id: '4', lastViewed: '2018-08-22T09:58:25.967Z', type: 'wine-style'},
        {id: '3', lastViewed: '2018-09-22T09:58:25.967Z', type: 'wine'},
        {id: '2', lastViewed: '2019-07-22T09:58:25.967Z', type: 'wine'},
        {id: '1', lastViewed: '2019-08-22T09:58:25.967Z', type: 'wine-style'},
        {id: '0', lastViewed: '2019-09-22T09:58:25.967Z', type: 'wine'}
    ];

    describe('constructor', () => {

        beforeEach(() => {
            itemsQueue = new ItemsQueue(items);
        });

        it('should initialized properties', () => {
            expect(itemsQueue.getItems()).toEqual(sortedItems);
        });

    });

    describe('enqueue', () => {

        beforeEach(() => {
            itemsQueue = new ItemsQueue(items);
        });

        it('should add a new viewed item to the array as last', () => {
            const newItem: Item = {id: 'nuovo', type: 'wine', lastViewed: '2021-09-22T09:58:25.967Z'};
            itemsQueue.enqueue(newItem);

            expect(itemsQueue.getItems()).toEqual([...sortedItems, newItem]);
        });

    });

    describe('dequeue', () => {

        describe('if initial array is empty', () => {

            beforeEach(() => {
                itemsQueue = new ItemsQueue([]);
            });

            it('should do nothing', () => {
                const expectedViewItems: Item[] = [];
                itemsQueue.dequeue();

                expect(itemsQueue.getItems()).toEqual(expectedViewItems);
            });

        });

        describe('if initial list is NOT empty', () => {

            beforeEach(() => {
                itemsQueue = new ItemsQueue(items);
            });

            it('should remove the oldest item', () => {
                const expectedViewItems: Item[] = [
                    {id: '3', lastViewed: '2018-09-22T09:58:25.967Z', type: 'wine'},
                    {id: '2', lastViewed: '2019-07-22T09:58:25.967Z', type: 'wine'},
                    {id: '1', lastViewed: '2019-08-22T09:58:25.967Z', type: 'wine-style'},
                    {id: '0', lastViewed: '2019-09-22T09:58:25.967Z', type: 'wine'}
                ];
                itemsQueue.dequeue();

                expect(itemsQueue.getItems()).toEqual(expectedViewItems);
            });

        });

    });

    describe('size', () => {

        beforeEach(() => {
            itemsQueue = new ItemsQueue(items);
        });

        it('should return the size of the viewed items list', () => {
            const expectedSize = items.length;

            expect(itemsQueue.size()).toEqual(expectedSize);
        });

    });

});
