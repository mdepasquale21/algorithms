import {Item} from './item';
import {ArrayUtil} from './array.util';
import {TimeUtil} from './time.util';

export class ItemsQueue {

    private readonly itemsByIndexMap: Map<number, Item> = new Map<number, Item>([]);
    private nextEnqueueIndex = 0;
    private lastDequeueIndex = 0;

    constructor(items: Item[]) {
        this.init(items);
    }

    enqueue(item: Item): void {
        this.itemsByIndexMap.set(this.nextEnqueueIndex, item);
        this.nextEnqueueIndex++;
    }

    dequeue(): void {
        if (this.size() > 0) {
            this.itemsByIndexMap.delete(this.lastDequeueIndex);
            this.lastDequeueIndex++;
        }
    }

    size(): number {
        return this.nextEnqueueIndex - this.lastDequeueIndex;
    }

    getItems(): Item[] {
        return Array.from(this.itemsByIndexMap.values());
    }

    private init(items: Item[]): void {
        // most recent items last and oldest first
        const reverseSortedItems: Item[] = this.getReverseSortedItems(items);
        // loop on reverse sorted array (oldest items inserted first)
        for (const item of reverseSortedItems) {
            this.itemsByIndexMap.set(this.nextEnqueueIndex, item);
            this.nextEnqueueIndex++;
        }
    }

    private getReverseSortedItems(items: Item[]): Item[] {
        return ArrayUtil.sort(
            items,
            (a: Item, b: Item) => TimeUtil.orderIsoString(a.lastViewed, b.lastViewed)
        );
    }

}
