export class GenericMarker<T> extends BMap.Marker {

    constructor(point: BMap.Point, opts: BMap.MarkerOptions, public data: T) {
        super(point, opts);
    }

}
