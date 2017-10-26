// import * as coordtransform from "coordtransform";

/**
 * 经纬度坐标转百度地图坐标
 * @param lon
 * @param lat
 * @returns {[any,any]}
 */
export function wgs84tobd09(lon: number, lat: number) {
//     [lon, lat] = (<any>coordtransform).wgs84togcj02(lon, lat);
//     [lon, lat] = (<any>coordtransform).gcj02tobd09(lon, lat);
    return [lon, lat];
}
