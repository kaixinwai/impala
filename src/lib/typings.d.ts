declare var module: { id: string };

declare namespace BMap {
    
        type none = void;
        type None = void;
        type Null = null;
        type Mix = any;
        type Json = any;
        type opts = any;
        type PointCollectionOption = any;
        type LocalRenderOptions = any;
        type TransitPolices = any;
    
        enum StatusCodes { }
    
        enum MapTypes { }
    
        enum SymboShapeType { }
    
        enum SymbolShape { }
    
        enum RouteTypes { }
    
    
        /**
         * 在指定的容器内创建地图实例，之后需要调用Map.centerAndZoom()方法对地图进行初始化。未进行初始化的地图将不能进行任何操作
         */
        export class Map {
    
            /**
             *
             */
            constructor(container: String | HTMLElement, opts: MapOptions);
    
    
            /**
             * 启用地图拖拽，默认启用
             */
            enableDragging(): none;
    
    
            /**
             * 禁用地图拖拽
             */
            disableDragging(): none;
    
    
            /**
             * 启用滚轮放大缩小，默认禁用
             */
            enableScrollWheelZoom(): none;
    
    
            /**
             * 禁用滚轮放大缩小
             */
            disableScrollWheelZoom(): none;
    
    
            /**
             * 启用双击放大，默认启用
             */
            enableDoubleClickZoom(): none;
    
    
            /**
             * 禁用双击放大
             */
            disableDoubleClickZoom(): none;
    
    
            /**
             * 启用键盘操作，默认禁用。键盘的上、下、左、右键可连续移动地图。同时按下其中两个键可使地图进行对角移动。PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级
             */
            enableKeyboard(): none;
    
    
            /**
             * 禁用键盘操作
             */
            disableKeyboard(): none;
    
    
            /**
             * 启用地图惯性拖拽，默认禁用
             */
            enableInertialDragging(): none;
    
    
            /**
             * 禁用地图惯性拖拽
             */
            disableInertialDragging(): none;
    
    
            /**
             * 启用连续缩放效果，默认禁用
             */
            enableContinuousZoom(): none;
    
    
            /**
             * 禁用连续缩放效果
             */
            disableContinuousZoom(): none;
    
    
            /**
             * 启用双指操作缩放，默认启用
             */
            enablePinchToZoom(): none;
    
    
            /**
             * 禁用双指操作缩放
             */
            disablePinchToZoom(): none;
    
    
            /**
             * 启用自动适应容器尺寸变化，默认启用
             */
            enableAutoResize(): none;
    
    
            /**
             * 禁用自动适应容器尺寸变化
             */
            disableAutoResize(): none;
    
    
            /**
             * 设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
             */
            setDefaultCursor(cursor: String): none;
    
    
            /**
             * 返回地图默认的鼠标指针样式
             */
            getDefaultCursor(): String;
    
    
            /**
             * 设置拖拽地图时的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
             */
            setDraggingCursor(cursor: String): none;
    
    
            /**
             * 返回拖拽地图时的鼠标指针样式
             */
            getDraggingCursor(): String;
    
    
            /**
             * 设置地图允许的最小级别。取值不得小于地图类型所允许的最小级别
             */
            setMinZoom(zoom: Number): none;
    
    
            /**
             * 设置地图允许的最大级别。取值不得大于地图类型所允许的最大级别
             */
            setMaxZoom(zoom: Number): none;
    
    
            /**
             * 设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分
             */
            setMapStyle(): none;
    
    
            /**
             * 将全景实例与Map类进行绑定
             */
            setPanorama(pano: Panorama): none;
    
    
            /**
             * 返回地图可视区域，以地理坐标表示
             */
            getBounds(): Bounds;
    
    
            /**
             * 返回地图当前中心点
             */
            getCenter(): Point;
    
    
            /**
             * 返回两点之间的距离，单位是米
             */
            getDistance(start: Point, end: Point): Number;
    
    
            /**
             * 返回地图类型
             */
            getMapType(): MapType;
    
    
            /**
             * 返回地图视图的大小，以像素表示
             */
            getSize(): Size;
    
    
            /**
             * 根据提供的地理区域或坐标获得最佳的地图视野，返回的对象中包含center和zoom属性，分别表示地图的中心点和级别。此方法仅返回视野信息，不会将新的中心点和级别做用到当前地图上
             */
            getViewport(view: Array<Point>, viewportOptions: ViewportOptions): Viewport;
    
    
            /**
             * 返回地图当前缩放级别
             */
            getZoom(): Number;
    
    
            /**
             * 获取与Map类绑定的全景实例
             */
            getPanorama(): Panorama;
    
    
            /**
             * 设初始化地图。 如果center类型为Point时，zoom必须赋值，范围3-19级，若调用高清底图（针对移动端开发）时，zoom可赋值范围为3-18级。如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据center适配最佳zoom级别
             */
            centerAndZoom(center: Point, zoom: Number): none;
    
    
            /**
             * 将地图的中心点更改为给定的点。如果该点在当前的地图视图中已经可见，则会以平滑动画的方式移动到中心点位置。可以通过配置强制移动过程不使用动画效果
             */
            panTo(center: Point, opts: PanOptions): none;
    
    
            /**
             * 将地图在水平位置上移动x像素，垂直位置上移动y像素。如果指定的像素大于可视区域范围或者在配置中指定没有动画效果，则不执行滑动效果
             */
            panBy(x: Number, y: Number, opts: PanOptions): none;
    
    
            /**
             * 重新设置地图，恢复地图初始化时的中心点和级别
             */
            reset(): none;
    
    
            /**
             * 设置地图中心点。center除了可以为坐标点以外，还支持城市名
             */
            setCenter(center: Point | String): none;
    
    
            /**
             * 设置地图城市，注意当地图初始化时的类型设置为BMAP_PERSPECTIVE_MAP时，需要在调用centerAndZoom之前调用此方法设置地图所在城市。
             * 例如： var map = new BMap.Map(“container”, {mapType: BMAP_PERSPECTIVE_MAP}); map.setCurrentCity(“北京市”);
             * map.centerAndZoom(new BMap.Point(116.404, 39.915), 18); 注意：初始化的坐标应与您设置的城市对应，否则地图将无法正常显示。
             * 如果地图初始化为BMAP_NORMAL_MAP类型，则在调用setMapType切换地图类型时也要调用此方法
             */
            setCurrentCity(city: String): none;
    
    
            /**
             * 设置地图类型。注意，当设置地图类型为BMAP_PERSPECTIVE_MAP时，需要调用map.setCurrentCity方法设置城市
             */
            setMapType(mapType: MapTypes): none;
    
    
            /**
             * 根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标
             */
            setViewport(view: Array<Point> | Viewport, viewportOptions: ViewportOptions): none;
    
    
            /**
             * 将视图切换到指定的缩放等级，中心点坐标不变。注意：当有信息窗口在地图上打开时，地图缩放将保证信息窗口所在的坐标位置不动
             */
            setZoom(zoom: Number): none;
    
    
            /**
             * 是否使用高分辨率底图。仅当mapOptions.enableHighResolution属性为true且设备支持高分辨率时返回true
             */
            highResolutionEnabled(): Boolean;
    
    
            /**
             * 放大一级视图
             */
            zoomIn(): none;
    
    
            /**
             * 缩小一级视图
             */
            zoomOut(): none;
    
    
            /**
             * 为地图添加热区
             */
            addHotspot(hotspot: Hotspot): none;
    
    
            /**
             * 移除某个地图热区
             */
            removeHotspot(hotspot: Hotspot): none;
    
    
            /**
             * 清空地图所有热区
             */
            clearHotspots(): none;
    
    
            /**
             * 将控件添加到地图，一个控件实例只能向地图中添加一次
             */
            addControl(control: Control): none;
    
    
            /**
             * 从地图中移除控件。如果控件从未被添加到地图中，则该移除不起任何作用
             */
            removeControl(control: Control): none;
    
    
            /**
             * 返回地图的容器元素。当创建用户自定义控件时，需要自行实现Control.initialize()方法，并将控件的容器元素添加到地图上，通过此方法可获得地图容器
             */
            getContainer(): HTMLElement;
    
    
            /**
             * 添加右键菜单
             */
            addContextMenu(menu: ContextMenu): none;
    
    
            /**
             * 移除右键菜单
             */
            removeContextMenu(menu: ContextMenu): none;
    
    
            /**
             * 将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次
             */
            addOverlay(overlay: Overlay): none;
    
    
            /**
             * 从地图中移除覆盖物。如果覆盖物从未被添加到地图中，则该移除不起任何作用
             */
            removeOverlay(overlay: Overlay): none;
    
    
            /**
             * 清除地图上所有覆盖物
             */
            clearOverlays(): none;
    
    
            /**
             * 在地图上打开信息窗口
             */
            openInfoWindow(infoWnd: InfoWindow, point: Point): none;
    
    
            /**
             * 关闭在地图上打开的信息窗口。在标注上打开的信息窗口也可通过此方法进行关闭
             */
            closeInfoWindow(): none;
    
    
            /**
             * 根据地理坐标获取对应的覆盖物容器的坐标，此方法用于自定义覆盖物
             */
            pointToOverlayPixel(point: Point): Pixel;
    
    
            /**
             * 根据覆盖物容器的坐标获取对应的地理坐标
             */
            overlayPixelToPoint(pixel: Pixel): Point;
    
    
            /**
             * 返回地图上处于打开状态的信息窗的实例。当地图没有打开的信息窗口时，此方法返回null
             */
            getInfoWindow(): InfoWindow | Null;
    
    
            /**
             * 返回地图上的所有覆盖物
             */
            getOverlays(): Array<Overlay>;
    
    
            /**
             * 返回地图覆盖物容器列表
             */
            getPanes(): MapPanes;
    
    
            /**
             * 添加一个自定义地图图层
             */
            addTileLayer(tileLayer: TileLayer): none;
    
    
            /**
             * 移除一个自定义地图图层
             */
            removeTileLayer(tileLayer: TileLayer): none;
    
    
            /**
             * 通过地图类型得到一个地图图层对象
             */
            getTileLayer(mapType: String): TileLayer;
    
    
            /**
             * 像素坐标转换为经纬度坐标
             */
            pixelToPoint(pixel: Pixel): Point;
    
    
            /**
             * 经纬度坐标转换为像素坐标
             */
            pointToPixel(point: Point): Pixel;
    
        }
    
    
        /**
         *
         */
        export class MapOptions {
    
    
            /**
             * 地图允许展示的最小级别
             */
            minZoom?: Number;
    
    
            /**
             * 地图允许展示的最大级别
             */
            maxZoom?: Number;
    
    
            /**
             * 地图类型，默认为BMAP_NORMAL_MAP
             */
            mapType?: MapType;
    
    
            /**
             * 是否启用使用高分辨率地图。在iPhone4及其后续设备上，可以通过开启此选项获取更高分辨率的底图，v1.2,v1.3版本默认不开启，v1.4默认为开启状态
             */
            enableHighResolution?: Boolean;
    
    
            /**
             * 是否自动适应地图容器变化，默认启用
             */
            enableAutoResize?: Boolean;
    
    
            /**
             * 是否开启底图可点功能，默认启用
             */
            enableMapClick?: Boolean;
    
    
        }
    
    
        /**
         *
         */
        export class PanOptions {
    
    
            /**
             * 是否在平移过程中禁止动画
             */
            noAnimation: Boolean;
    
    
        }
    
    
        /**
         *
         */
        export class Viewport {
    
    
            /**
             * 视野中心点
             */
            center: Point;
    
    
            /**
             * 视野级别
             */
            zoom: Number;
    
    
        }
    
    
        /**
         *
         */
        export class ViewportOptions {
    
    
            /**
             * 是否启用动画效果移动地图，默认为true。当调整后的级别与当前地图级别一致时，将使用动画效果移动地图
             */
            enableAnimation: Boolean;
    
    
            /**
             * 视野调整的预留边距，例如： margins: [30, 20, 0, 20] 表示坐标点会限制在上述区域内
             */
            margins: Array<Number>;
    
    
            /**
             * 地图级别的偏移量，您可以在方法得出的结果上增加一个偏移值。例如map.setViewport计算出地图的级别为10，如果zoomFactor为-1，则最终的地图级别为9
             */
            zoomFactor: Number;
    
    
            /**
             * 改变地图视野的延迟执行时间，单位毫秒，默认为200ms。此延时仅针对动画效果有效
             */
            delay: Number;
    
    
        }
    
    
        /**
         *
         */
        export class APIVersion {
    
    
        }
    
    
        /**
         *
         */
        export class MapStyle {
    
    
            /**
             * 设置地图上展示的元素种类，支持point（兴趣点）、road（道路）、water（河流）、land（陆地）、building（建筑物）
             */
            features: Array<any>;
    
    
            /**
             * 设置地图底图样式，目前支持normal（默认样式）,dark（深色样式）,light（浅色样式）三种
             */
            style: string;
    
    
        }
    
    
        /**
         * 以指定的经度和纬度创建一个地理点坐标
         */
        export class Point {
    
            /**
             *
             */
            constructor(lng: Number, lat: Number);
    
    
            /**
             * 地理经度
             */
            lng: Number;
    
    
            /**
             * 地理纬度
             */
            lat: Number;
    
    
            /**
             * 判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回true
             */
            equals(other: Point): Boolean;
    
        }
    
    
        /**
         * 创建像素点对象实例。像素坐标的坐标原点为地图区域的左上角
         */
        export class Pixel {
    
            /**
             *
             */
            constructor(x: Number, y: Number);
    
    
            /**
             * x坐标
             */
            x: Number;
    
    
            /**
             * y坐标
             */
            y: Number;
    
    
            /**
             * 判断坐标点是否相等，当且仅当两点的x坐标和y坐标均相等时返回true
             */
            equals(other: Pixel): Boolean;
    
        }
    
    
        /**
         * 创建一个包含所有给定点坐标的矩形区域。其中sw表示矩形区域的西南角，参数ne表示矩形区域的东北角
         */
        export class Bounds {
    
            /**
             *
             */
            constructor(sw: Point, ne: Point);
    
    
            /**
             * 当且仅当此矩形中的两点参数都等于其他矩形的两点参数时，返回true
             */
            equals(other: Bounds): Boolean;
    
    
            /**
             * 如果点的地理坐标位于此矩形内，则返回true
             */
            containsPoint(point: Point): Boolean;
    
    
            /**
             * 传入的矩形区域完全包含于此矩形区域中，则返回true
             */
            containsBounds(bounds: Bounds): Boolean;
    
    
            /**
             * 计算与另一矩形的交集区域
             */
            intersects(other: Bounds): Bounds;
    
    
            /**
             * 放大此矩形，使其包含给定的点
             */
            extend(point: Point): none;
    
    
            /**
             * 返回矩形的中心点
             */
            getCenter(): Point;
    
    
            /**
             * 如果矩形为空，则返回true
             */
            isEmpty(): Boolean;
    
    
            /**
             * 返回矩形区域的西南角
             */
            getSouthWest(): Point;
    
    
            /**
             * 返回矩形区域的东北角
             */
            getNorthEast(): Point;
    
    
            /**
             * 返回矩形区域的跨度
             */
            toSpan(): Point;
    
        }
    
    
        /**
         * 以指定的宽度和高度创建一个矩形区域大小对象
         */
        export class Size {
    
            /**
             *
             */
            constructor(width: Number, height: Number);
    
    
            /**
             * 水平方向的数值
             */
            width: Number;
    
    
            /**
             * 竖直方向的数值
             */
            height: Number;
    
    
            /**
             * 当且仅当此矩形中的宽度和高度都等于其他矩形的宽度和高度时，返回true
             */
            equals(other: Size): Boolean;
    
        }
    
    
        /**
         * 创建一个控件原型实例，通过该原型实例可创建自定义控件
         */
        export class Control {
    
    
            /**
             * 控件默认的停靠位置。自定义控件时需要提供此属性，作为控件的默认停靠位置
             */
            defaultAnchor: ControlAnchor;
    
    
            /**
             * 控件默认的位置偏移值。自定义控件时需要提供此属性，作为控件的默认偏移位置
             */
            defaultOffset: Size;
    
    
            /**
             * 抽象方法。调用Map.addControl()方法添加控件时将调用此方法，从而实现该控件的初始化。自定义控件时需要实现此方法，并将元素的DOM元素在该方法中返回。DOM元素需要添加到地图的容器中，使用map.getContainer()方法可获得地图容器元素
             */
            initialize(map: Map): HTMLElement;
    
    
            /**
             * 设置控件停靠的位置
             */
            setAnchor(anchor: ControlAnchor): none;
    
    
            /**
             * 返回控件停靠的位置
             */
            getAnchor(): ControlAnchor;
    
    
            /**
             * 设置控件停靠的偏移量
             */
            setOffset(offset: Size): none;
    
    
            /**
             * 返回控件停靠的偏移量
             */
            getOffset(): Size;
    
    
            /**
             * 显示控件
             */
            show(): none;
    
    
            /**
             * 隐藏控件
             */
            hide(): none;
    
    
            /**
             * 判断控件的可见性
             */
            isVisible(): Boolean;
    
        }
    
    
        /**
         *
         */
        export class ControlAnchor {
    
    
        }
    
    
        /**
         * 创建一个特定样式的地图平移缩放控件
         */
        export class NavigationControl {
    
            /**
             *
             */
            constructor(type: NavigationControlOptions);
    
    
            /**
             * 返回平移缩放控件的类型
             */
            getType(): NavigationControlType;
    
    
            /**
             * 设置平移缩放控件的类型
             */
            setType(type: NavigationControlType): none;
    
        }
    
    
        /**
         *
         */
        export class NavigationControlOptions {
    
    
            /**
             * 控件的停靠位置
             */
            anchor: ControlAnchor;
    
    
            /**
             * 控件的水平偏移值
             */
            offset: Size;
    
    
            /**
             * 平移缩放控件的类型
             */
            type: NavigationControlType;
    
    
            /**
             * 是否显示级别提示信息
             */
            showZoomInfo: Boolean;
    
    
            /**
             * 控件是否集成定位功能，默认为false
             */
            enableGeolocation: Boolean;
    
    
        }
    
    
        /**
         *
         */
        export class NavigationControlType {
    
    
        }
    
    
        /**
         * 创建一个特定样式的地图定位控件
         */
        export class GeolocationControl {
    
            /**
             *
             */
            constructor(type: GeolocationControlOptions);
    
    
            /**
             * 开始进行定位
             */
            location(): none;
    
    
            /**
             * 返回当前的定位信息。若当前还未定位，则返回null
             */
            getAddressComponent(): AddressComponent;
    
        }
    
    
        /**
         *
         */
        export class GeolocationControlOptions {
    
    
            /**
             * 控件的停靠位置，默认定位到地图的右下角
             */
            anchor: ControlAnchor;
    
    
            /**
             * 控件的水平偏移值
             */
            offset: Size;
    
    
            /**
             * 是否显示定位信息面板。默认显示定位信息面板
             */
            showAddressBar: Boolean;
    
    
            /**
             * 添加控件时是否进行定位。默认添加控件时不进行定位
             */
            enableAutoLocation: Boolean;
    
    
            /**
             * 可自定义定位中心点的Icon样式
             */
            locationIcon: Icon;
    
    
        }
    
    
        /**
         * 创建一个缩略地图控件实例
         */
        export class OverviewMapControl {
    
            /**
             *
             */
            constructor(opts: OverviewMapControlOptions);
    
    
            /**
             * 切换缩略地图控件的开合状态
             */
            changeView(): none;
    
    
            /**
             * 设置缩略地图的大小
             */
            setSize(size: Size): none;
    
    
            /**
             * 返回缩略地图的大小
             */
            getSize(): Size;
    
        }
    
    
        /**
         *
         */
        export class OverviewMapControlOptions {
    
    
            /**
             * 控件的停靠位置
             */
            anchor: ControlAnchor;
    
    
            /**
             * 控件的偏移值
             */
            offset: Size;
    
    
            /**
             * 缩略地图控件的大小
             */
            size: Size;
    
    
            /**
             * 缩略地图添加到地图后的开合状态，默认为关闭
             */
            isOpen: Boolean;
    
    
        }
    
    
        /**
         * 创建一个比例尺控件
         */
        export class ScaleControl {
    
            /**
             *
             */
            constructor(opts: ScaleControlOptions);
    
    
            /**
             * 返回比例尺单位制
             */
            getUnit(): LengthUnit;
    
    
            /**
             * 设置比例尺单位制
             */
            setUnit(unit: LengthUnit): none;
    
        }
    
    
        /**
         *
         */
        export class ScaleControlOptions {
    
    
            /**
             * 控件的停靠位置
             */
            anchor: ControlAnchor;
    
    
            /**
             * 控件的偏移值
             */
            offset: Size;
    
    
        }
    
    
        /**
         *
         */
        export class LengthUnit {
    
    
        }
    
    
        /**
         * 创建一个版权控件实例
         */
        export class CopyrightControl {
    
            /**
             *
             */
            constructor(opts: CopyrightControlOptions);
    
    
            /**
             * 添加版权信息
             */
            addCopyright(copyright: Copyright): none;
    
    
            /**
             * 移除版权信息
             */
            removeCopyright(id: number): none;
    
    
            /**
             * 返回单个版权信息
             */
            getCopyright(id: number): Copyright;
    
    
            /**
             * 返回版权信息列表
             */
            getCopyrightCollection(): Array<Copyright>;
    
        }
    
    
        /**
         *
         */
        export class CopyrightControlOptions {
    
    
            /**
             * 控件的停靠位置
             */
            anchor: ControlAnchor;
    
    
            /**
             * 控件的偏移值
             */
            offset: Size;
    
    
        }
    
    
        /**
         *
         */
        export class Copyright {
    
    
            /**
             * 该版权信息的唯一标识符
             */
            id: Number;
    
    
            /**
             * 该版权的文本信息，用于显示在地图上，支持HTML内容
             */
            content: String;
    
    
            /**
             * 该版权信息所适用的地理区域
             */
            bounds: Bounds;
    
    
        }
    
    
        /**
         * 创建地图类型控件
         */
        export class MapTypeControl {
    
            /**
             *
             */
            constructor(opts: MapTypeControlOptions);
    
    
        }
    
    
        /**
         *
         */
        export class MapTypeControlOptions {
    
    
            /**
             * 控件样式
             */
            type: MapTypeControlType;
    
    
            /**
             * 控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图和三维图。通过此属性可配置控件展示的地图类型
             */
            mapTypes: Array<MapType>;
    
    
        }
    
    
        /**
         *
         */
        export class MapTypeControlType {
    
    
        }
    
    
        /**
         * 创建全景控件实例
         */
        export class PanoramaControl {
    
    
        }
    
    
        /**
         *
         */
        export class StatusCode {
    
    
        }
    
    
        /**
         *
         */
        export class Overlay {
    
    
            /**
             * 抽象方法，用于初始化覆盖物，当调用map.addOverlay时，API将调用此方法。自定义覆盖物时需要实现此方法。自定义覆盖物时需要将覆盖物对应的HTML元素返回
             */
            initialize(map: Map): HTMLElement;
    
    
            /**
             * 判断覆盖物是否可见
             */
            isVisible(): Boolean;
    
    
            /**
             * 抽象方法，当地图状态发生变化时，由系统调用对覆盖物进行绘制。自定义覆盖物需要实现此方法
             */
            draw(): none;
    
    
            /**
             * 显示覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为空
             */
            show(): none;
    
    
            /**
             * 隐藏覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为none
             */
            hide(): none;
    
        }
    
    
        /**
         *
         */
        export class MapPanes {
    
    
            /**
             * 信息窗口所在的容器
             */
            floatPane: HTMLElement;
    
    
            /**
             * 标注点击区域所在的容器
             */
            markerMouseTarget: HTMLElement;
    
    
            /**
             * 信息窗口阴影所在的容器
             */
            floatShadow: HTMLElement;
    
    
            /**
             * 文本标注所在的容器
             */
            labelPane: HTMLElement;
    
    
            /**
             * 标注图标所在的容器
             */
            markerPane: HTMLElement;
    
    
            /**
             * 标注阴影所在的容器
             */
            markerShadow: HTMLElement;
    
    
            /**
             * 折线、多边形等矢量图形所在的容器
             */
            mapPane: HTMLElement;
    
    
        }
    
    
        /**
         * 创建一个图像标注实例。point参数指定了图像标注所在的地理位置
         */
        export class Marker {
    
            /**
             *
             */
            constructor(point: Point, opts: MarkerOptions);
    
    
            /**
             * 打开信息窗
             */
            openInfoWindow(infoWnd: InfoWindow): none;
    
    
            /**
             * 关闭信息窗
             */
            closeInfoWindow(): none;
    
    
            /**
             * 设置标注所用的图标对象
             */
            setIcon(icon: Icon): none;
    
    
            /**
             * 返回标注所用的图标对象
             */
            getIcon(): Icon;
    
    
            /**
             * 设置标注的地理坐标
             */
            setPosition(position: Point): none;
    
    
            /**
             * 返回标注的地理坐标
             */
            getPosition(): Point;
    
    
            /**
             * 设置标注的偏移值
             */
            setOffset(offset: Size): none;
    
    
            /**
             * 返回标注的偏移值
             */
            getOffset(): Size;
    
    
            /**
             * 返回标注的文本标注
             */
            getLabel(): Label;
    
    
            /**
             * 为标注添加文本标注
             */
            setLabel(label: Label): none;
    
    
            /**
             * 设置标注的标题，当鼠标移至标注上时显示此标题
             */
            setTitle(title: String): none;
    
    
            /**
             * 返回标注的标题
             */
            getTitle(): String;
    
    
            /**
             * 将标注置于其他标注之上。默认情况下，纬度较低的标注会覆盖在纬度较高的标注之上，从而形成一种立体效果。通过此方法可使某个标注覆盖在其他所有标注之上。注意：如果在多个标注对象上调用此方法，则这些标注依旧按照纬度产生默认的覆盖效果
             */
            setTop(isTop: Boolean): none;
    
    
            /**
             * 开启标注拖拽功能
             */
            enableDragging(): none;
    
    
            /**
             * 关闭标注拖拽功能
             */
            disableDragging(): none;
    
    
            /**
             * 允许覆盖物在map.clearOverlays方法中被清除
             */
            enableMassClear(): none;
    
    
            /**
             * 禁止覆盖物在map.clearOverlays方法中被清除
             */
            disableMassClear(): none;
    
    
            /**
             * 设置覆盖物的zIndex
             */
            setZIndex(zIndex: Number): none;
    
    
            /**
             * 返回覆盖物所在的map对象
             */
            getMap(): Map;
    
    
            /**
             * 添加右键菜单
             */
            addContextMenu(menu: ContextMenu): none;
    
    
            /**
             * 移除右键菜单
             */
            removeContextMenu(menu: ContextMenu): none;
    
    
            /**
             * 设置标注动画效果。如果参数为null，则取消动画效果。该方法需要在addOverlay方法后设置
             */
            setAnimation(animation: Animation | Null): none;
    
    
            /**
             * 设置点的旋转角度
             */
            setRotation(rotation: Number): none;
    
    
            /**
             * 获取点的旋转角度
             */
            getRotation(): Number;
    
    
            /**
             * 设置标注阴影图标
             */
            setShadow(shadow: Icon): none;
    
    
            /**
             * 获取标注阴影图标
             */
            getShadow(): Icon;
    
    
            /**
             * 添加事件监听函数
             */
            addEventListener(event: String, handler: Function): none;
    
    
            /**
             * 移除事件监听函数
             */
            removeEventListener(event: String, handler: Function): none;
    
        }
    
    
        /**
         *
         */
        export class MarkerOptions {
    
    
            /**
             * 标注的位置偏移值
             */
            offset: Size;
    
    
            /**
             * 标注所用的图标对象
             */
            icon: Icon;
    
    
            /**
             * 是否在调用map.clearOverlays清除此覆盖物，默认为true
             */
            enableMassClear: Boolean;
    
    
            /**
             * 是否启用拖拽，默认为false
             */
            enableDragging: Boolean;
    
    
            /**
             * 是否响应点击事件。默认为true
             */
            enableClicking: Boolean;
    
    
            /**
             * 拖拽标注时，标注是否开启离开地图表面效果。默认为false
             */
            raiseOnDrag: Boolean;
    
    
            /**
             * 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范
             */
            draggingCursor: String;
    
    
            /**
             * 旋转角度
             */
            rotation: Number;
    
    
            /**
             * 阴影图标
             */
            shadow: Icon;
    
    
            /**
             * 鼠标移到marker上的显示内容
             */
            title: String;
    
    
        }
    
    
        /**
         *
         */
        export class Animation {
    
    
        }
    
    
        /**
         * 以给定的图像地址和大小创建图标对象实例
         */
        export class Icon {
    
            /**
             *
             */
            constructor(url: String, size: Size, opts: IconOptions);
    
    
            /**
             * 图标的定位点相对于图标左上角的偏移值
             */
            anchor: Size;
    
    
            /**
             * 图标可视区域的大小
             */
            size: Size;
    
    
            /**
             * 图标所用的图片相对于可视区域的偏移值，此功能的作用等同于CSS中的background-position属性
             */
            imageOffset: Size;
    
    
            /**
             * 图标所用的图片的大小，此功能的作用等同于CSS中的background-size属性。可用于实现高清屏的高清效果
             */
            imageSize: Size;
    
    
            /**
             * 图标所用图像资源的位置
             */
            imageUrl: String;
    
    
            /**
             * 信息窗口开启位置相对于图标左上角的偏移值
             */
            infoWindowAnchor: Size;
    
    
            /**
             * 设置icon打印图片的url，该打印图片只针对IE6有效，解决IE6使用PNG滤镜导致的错位问题。如果您的icon没有使用PNG格式图片或者没有使用CSS Sprites技术，则可忽略此配置
             */
            printImageUrl: String;
    
    
            /**
             * 设置图片资源的地址
             */
            setImageUrl(imageUrl: String): none;
    
    
            /**
             * 设置图标可视区域的大小
             */
            setSize(size: Size): none;
    
    
            /**
             * 设置图标的大小
             */
            setImageSize(offset: Size): none;
    
    
            /**
             * 设置图标定位点相对于其左上角的偏移值
             */
            setAnchor(anchor: Size): none;
    
    
            /**
             * 设置图片相对于可视区域的偏移值
             */
            setImageOffset(offset: Size): none;
    
    
            /**
             * 设置信息窗口开启位置相对于图标左上角的偏移值
             */
            setInfoWindowAnchor(anchor: Size): none;
    
    
            /**
             * 设置icon的打印图片，该打印图片只针对IE6有效，解决IE6使用PNG滤镜导致的错位问题。如果您的icon没有使用PNG格式图片或者没有使用CSS Sprites技术，则可忽略此配置
             */
            setPrintImageUrl(url: String): none;
    
        }
    
    
        /**
         *
         */
        export class IconOptions {
    
    
            /**
             * 图标的定位锚点。此点用来决定图标与地理位置的关系，是相对于图标左上角的偏移值，默认等于图标宽度和高度的中间值
             */
            anchor: Size;
    
    
            /**
             * 图片相对于可视区域的偏移值
             */
            imageOffset: Size;
    
    
            /**
             * 信息窗口定位锚点。开启信息窗口时，信息窗口底部尖角相对于图标左上角的位置，默认等于图标的anchor
             */
            infoWindowAnchor: Size;
    
    
            /**
             * 用于打印的图片，此属性只适用于IE6，为了解决IE6在包含滤镜的情况下打印样式不正确的问题
             */
            printImageUrl: String;
    
    
        }
    
    
        /**
         * 创建一个信息窗实例，其中content支持HTML内容。1.2版本开始content参数支持传入DOM结点
         */
        export class InfoWindow {
    
            /**
             *
             */
            constructor(content: String | HTMLElement, opts: InfoWindowOptions);
    
    
            /**
             * 设置信息窗口的宽度，单位像素。取值范围：220 - 730
             */
            setWidth(width: Number): none;
    
    
            /**
             * 设置信息窗口的高度，单位像素。取值范围：60 - 650
             */
            setHeight(height: Number): none;
    
    
            /**
             * 重绘信息窗口，当信息窗口内容发生变化时进行调用
             */
            redraw(): none;
    
    
            /**
             * 设置信息窗口标题。支持HTML内容。1.2版本开始title参数支持传入DOM结点
             */
            setTitle(title: String | HTMLElement): none;
    
    
            /**
             * 返回信息窗口标题
             */
            getTitle(): String | HTMLElement;
    
    
            /**
             * 设置信息窗口内容。支持HTML内容。1.2版本开始content参数支持传入DOM结点
             */
            setContent(content: String | HTMLElement): none;
    
    
            /**
             * 返回信息窗口内容
             */
            getContent(): String | HTMLElement;
    
    
            /**
             * 返回信息窗口的位置
             */
            getPosition(): Point;
    
    
            /**
             * 启用窗口最大化功能。需要设置最大化后信息窗口里的内容，该接口才生效
             */
            enableMaximize(): none;
    
    
            /**
             * 禁用窗口最大化功能
             */
            disableMaximize(): none;
    
    
            /**
             * 返回信息窗口的打开状态
             */
            isOpen(): Boolean;
    
    
            /**
             * 信息窗口最大化时所显示内容，支持HTML内容
             */
            setMaxContent(content: String): none;
    
    
            /**
             * 最大化信息窗口
             */
            maximize(): none;
    
    
            /**
             * 还原信息窗口
             */
            restore(): none;
    
    
            /**
             * 开启打开信息窗口时地图自动平移
             */
            enableAutoPan(): none;
    
    
            /**
             * 关闭打开信息窗口时地图自动平移
             */
            disableAutoPan(): none;
    
    
            /**
             * 开启点击地图时关闭信息窗口
             */
            enableCloseOnClick(): none;
    
    
            /**
             * 关闭点击地图时关闭信息窗口
             */
            disableCloseOnClick(): none;
    
    
            /**
             * 添加事件监听函数
             */
            addEventListener(event: String, handler: Function): none;
    
    
            /**
             * 移除事件监听函数
             */
            removeEventListener(event: String, handler: Function): none;
    
        }
    
    
        /**
         *
         */
        export class InfoWindowOptions {
    
    
            /**
             * 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
             */
            width: Number;
    
    
            /**
             * 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
             */
            height: Number;
    
    
            /**
             * 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
             */
            maxWidth: Number;
    
    
            /**
             * 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置
             */
            offset: Size;
    
    
            /**
             * 信息窗标题文字，支持HTML内容
             */
            title: String;
    
    
            /**
             * 是否开启信息窗口打开时地图自动移动（默认开启）
             */
            enableAutoPan: Boolean;
    
    
            /**
             * 是否开启点击地图关闭信息窗口（默认开启）
             */
            enableCloseOnClick: Boolean;
    
    
            /**
             * 是否在信息窗里显示短信发送按钮（默认开启）
             */
            enableMessage: Boolean;
    
    
            /**
             * 自定义部分的短信内容，可选项。完整的短信内容包括：自定义部分+位置链接，不设置时，显示默认短信内容。短信内容最长为140个字
             */
            message: String;
    
    
        }
    
    
        /**
         * 创建一个文本标注实例。point参数指定了文本标注所在的地理位置
         */
        export class Label {
    
            /**
             *
             */
            constructor(content: String, opts: LabelOptions);
    
    
            /**
             * 设置文本标注样式，该样式将作用于文本标注的容器元素上。其中styles为JavaScript对象常量，比如： setStyle({ color : "red", fontSize : "12px" }) 注意：如果css的属性名中包含连字符，需要将连字符去掉并将其后的字母进行大写处理，例如：背景色属性要写成：backgroundColor
             */
            setStyle(styles: Object): none;
    
    
            /**
             * 设置文本标注的内容。支持HTML
             */
            setContent(content: String): none;
    
    
            /**
             * 设置文本标注坐标。仅当通过Map.addOverlay()方法添加的文本标注有效
             */
            setPosition(position: Point): none;
    
    
            /**
             * 获取Label的地理坐标
             */
            getPosition(): Point;
    
    
            /**
             * 设置文本标注的偏移值
             */
            setOffset(offset: Size): none;
    
    
            /**
             * 返回文本标注的偏移值
             */
            getOffset(): Size;
    
    
            /**
             * 设置文本标注的标题，当鼠标移至标注上时显示此标题
             */
            setTitle(title: String): none;
    
    
            /**
             * 返回文本标注的标题
             */
            getTitle(): String;
    
    
            /**
             * 允许覆盖物在map.clearOverlays方法中被清除
             */
            enableMassClear(): none;
    
    
            /**
             * 禁止覆盖物在map.clearOverlays方法中被清除
             */
            disableMassClear(): none;
    
    
            /**
             * 设置覆盖物的zIndex
             */
            setZIndex(zIndex: Number): none;
    
    
            /**
             * 设置地理坐标
             */
            setPosition(position: Point): none;
    
    
            /**
             * 返回覆盖物所在的map对象
             */
            getMap(): Map;
    
    
            /**
             * 添加事件监听函数
             */
            addEventListener(event: String, handler: Function): none;
    
    
            /**
             * 移除事件监听函数
             */
            removeEventListener(event: String, handler: Function): none;
    
        }
    
    
        /**
         *
         */
        export class LabelOptions {
    
    
            /**
             * 文本标注的位置偏移值
             */
            offset: Size;
    
    
            /**
             * 文本标注的地理位置
             */
            position: Point;
    
    
            /**
             * 是否在调用map.clearOverlays清除此覆盖物，默认为true
             */
            enableMassClear: Boolean;
    
    
        }
    
    
        /**
         * 创建折线覆盖物对象
         */
        export class Polyline {
    
            /**
             *
             */
            constructor(points: Array<Point>, opts: PolylineOptions);
    
    
            /**
             * 设置折线的点数组
             */
            setPath(path: Array<Point>): none;
    
    
            /**
             * 返回折线的点数组
             */
            getPath(): Array<Point>;
    
    
            /**
             * 设置折线的颜色
             */
            setStrokeColor(color: String): none;
    
    
            /**
             * 返回折线的颜色
             */
            getStrokeColor(): String;
    
    
            /**
             * 设置透明度，取值范围0 - 1
             */
            setStrokeOpacity(opacity: Number): none;
    
    
            /**
             * 返回透明度
             */
            getStrokeOpacity(): Number;
    
    
            /**
             * 设置线的宽度，范围为大于等于1的整数
             */
            setStrokeWeight(weight: Number): none;
    
    
            /**
             * 返回线的宽度
             */
            getStrokeWeight(): Number;
    
    
            /**
             * 设置是为实线或虚线，solid或dashed
             */
            setStrokeStyle(style: String): none;
    
    
            /**
             * 返回当前线样式状态，实线或者虚线
             */
            getStrokeStyle(): String;
    
    
            /**
             * 返回覆盖物的地理区域范围
             */
            getBounds(): Bounds;
    
    
            /**
             * 开启编辑功能
             */
            enableEditing(): none;
    
    
            /**
             * 关闭编辑功能
             */
            disableEditing(): none;
    
    
            /**
             * 允许覆盖物在map.clearOverlays方法中被清除
             */
            enableMassClear(): none;
    
    
            /**
             * 禁止覆盖物在map.clearOverlays方法中被清除
             */
            disableMassClear(): none;
    
    
            /**
             * 修改指定位置的坐标。索引index从0开始计数。例如setPointAt(2, point)代表将折线的第3个点的坐标设为point
             */
            setPositionAt(index: Number, point: Point): none;
    
    
            /**
             * 返回覆盖物所在的map对象
             */
            getMap(): Map;
    
    
            /**
             * 添加事件监听函数
             */
            addEventListener(event: String, handler: Function): none;
    
    
            /**
             * 移除事件监听函数
             */
            removeEventListener(event: String, handler: Function): none;
    
        }
    
    
        /**
         *
         */
        export class PolylineOptions {
    
    
            /**
             * 折线颜色
             */
            strokeColor: String;
    
    
            /**
             * 折线的宽度，以像素为单位
             */
            strokeWeight: Number;
    
    
            /**
             * 折线的透明度，取值范围0 - 1
             */
            strokeOpacity: Number;
    
    
            /**
             * 折线的样式，solid或dashed
             */
            strokeStyle: String;
    
    
            /**
             * 是否在调用map.clearOverlays清除此覆盖物，默认为true
             */
            enableMassClear: Boolean;
    
    
            /**
             * 是否启用线编辑，默认为false
             */
            enableEditing: Boolean;
    
    
            /**
             * 是否响应点击事件，默认为true
             */
            enableClicking: Boolean;
    
    
        }
    
    
        /**
         * 创建线上的符号类。symbol为符号样式;offset为符号相对于线起点的位置，取值可以是百分比也可以是像素位置，默认为"100%";repeat为符号在线上重复显示的距离，可以是百分比也可以是距离值，同时设置repeat与offset时，以repeat为准;fixedRotation设置图标的旋转角度是否与线走向一致，默认为true
         */
        export class IconSequence {
    
            /**
             *
             */
            constructor(symbol: Symbol, offset: string, repeat: string, fixedRotation: boolean);
    
    
        }
    
    
        /**
         * 创建多边形覆盖物
         */
        export class Polygon {
    
            /**
             *
             */
            constructor(points: Array<Point>, opts: PolygonOptions);
    
    
            /**
             * 设置多边型的点数组
             */
            setPath(path: Array<Point>): none;
    
    
            /**
             * 返回多边型的点数组
             */
            getPath(): Array<Point>;
    
    
            /**
             * 设置多边型的边线颜色，参数为合法的CSS颜色值
             */
            setStrokeColor(color: String): none;
    
    
            /**
             * 返回多边型的边线颜色
             */
            getStrokeColor(): String;
    
    
            /**
             * 设置多边形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，折线覆盖物将没有填充效果
             */
            setFillColor(color: String): none;
    
    
            /**
             * 返回多边形的填充颜色
             */
            getFillColor(): String;
    
    
            /**
             * 设置多边形的边线透明度，取值范围0 - 1
             */
            setStrokeOpacity(opacity: Number): none;
    
    
            /**
             * 返回多边形的边线透明度
             */
            getStrokeOpacity(): Number;
    
    
            /**
             * 设置多边形的填充透明度，取值范围0 - 1
             */
            setFillOpacity(opacity: Number): none;
    
    
            /**
             * 返回多边形的填充透明度
             */
            getFillOpacity(): Number;
    
    
            /**
             * 设置多边形边线的宽度，取值为大于等于1的整数
             */
            setStrokeWeight(weight: Number): none;
    
    
            /**
             * 返回多边形边线的宽度
             */
            getStrokeWeight(): Number;
    
    
            /**
             * 设置多边形边线样式为实线或虚线，取值solid或dashed
             */
            setStrokeStyle(style: String): none;
    
    
            /**
             * 返回多边形边线样式
             */
            getStrokeStyle(): String;
    
    
            /**
             * 返回覆盖物的地理区域范围
             */
            getBounds(): Bounds;
    
    
            /**
             * 开启编辑功能
             */
            enableEditing(): none;
    
    
            /**
             * 关闭编辑功能
             */
            disableEditing(): none;
    
    
            /**
             * 允许覆盖物在map.clearOverlays方法中被清除
             */
            enableMassClear(): none;
    
    
            /**
             * 禁止覆盖物在map.clearOverlays方法中被清除
             */
            disableMassClear(): none;
    
    
            /**
             * 修改指定位置的坐标。索引index从0开始计数。例如setPositionAt(2, point)代表将折线的第3个点的坐标设为point
             */
            setPositionAt(index: Number, point: Point): none;
    
    
            /**
             * 返回覆盖物所在的map对象
             */
            getMap(): Map;
    
    
            /**
             * 添加事件监听函数
             */
            addEventListener(event: String, handler: Function): none;
    
    
            /**
             * 移除事件监听函数
             */
            removeEventListener(event: String, handler: Function): none;
    
        }
    
    
        /**
         *
         */
        export class PolygonOptions {
    
    
            /**
             * 边线颜色
             */
            strokeColor: String;
    
    
            /**
             * 填充颜色。当参数为空时，折线覆盖物将没有填充效果
             */
            fillColor: String;
    
    
            /**
             * 边线的宽度，以像素为单位
             */
            strokeWeight: Number;
    
    
            /**
             * 边线透明度，取值范围0 - 1
             */
            strokeOpacity: Number;
    
    
            /**
             * 填充的透明度，取值范围0 - 1
             */
            fillOpacity: Number;
    
    
            /**
             * 边线的样式，solid或dashed
             */
            strokeStyle: String;
    
    
            /**
             * 是否在调用map.clearOverlays清除此覆盖物，默认为true
             */
            enableMassClear: Boolean;
    
    
            /**
             * 是否启用线编辑，默认为false
             */
            enableEditing: Boolean;
    
    
            /**
             * 是否响应点击事件，默认为true
             */
            enableClicking: Boolean;
    
    
        }
    
    
        /**
         * 创建圆覆盖物
         */
        export class Circle {
    
            /**
             *
             */
            constructor(center: Point, radius: Number, opts: CircleOptions);
    
    
            /**
             * 设置圆形的中心点坐标
             */
            setCenter(center: Point): none;
    
    
            /**
             * 返回圆形的中心点坐标
             */
            getCenter(): Point;
    
    
            /**
             * 设置圆形的半径，单位为米
             */
            setRadius(radius: Number): none;
    
    
            /**
             * 返回圆形的半径，单位为米
             */
            getRadius(): Number;
    
    
            /**
             * 返回圆形的地理区域范围
             */
            getBounds(): Bounds;
    
    
            /**
             * 设置圆形的边线颜色，参数为合法的CSS颜色值
             */
            setStrokeColor(color: String): none;
    
    
            /**
             * 返回圆形的边线颜色
             */
            getStrokeColor(): String;
    
    
            /**
             * 设置圆形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，圆形覆盖物将没有填充效果
             */
            setFillColor(color: String): none;
    
    
            /**
             * 返回圆形的填充颜色
             */
            getFillColor(): String;
    
    
            /**
             * 设置圆形的边线透明度，取值范围0 - 1
             */
            setStrokeOpacity(opacity: Number): none;
    
    
            /**
             * 返回圆形的边线透明度
             */
            getStrokeOpacity(): Number;
    
    
            /**
             * 设置圆形的填充透明度，取值范围0 - 1
             */
            setFillOpacity(opacity: Number): none;
    
    
            /**
             * 返回圆形的填充透明度
             */
            getFillOpacity(): Number;
    
    
            /**
             * 设置圆形边线的宽度，取值为大于等于1的整数
             */
            setStrokeWeight(weight: Number): none;
    
    
            /**
             * 返回圆形边线的宽度
             */
            getStrokeWeight(): Number;
    
    
            /**
             * 设置圆形边线样式为实线或虚线，取值solid或dashed
             */
            setStrokeStyle(style: String): none;
    
    
            /**
             * 返回圆形边线样式
             */
            getStrokeStyle(): String;
    
    
            /**
             * 开启编辑功能
             */
            enableEditing(): none;
    
    
            /**
             * 关闭编辑功能
             */
            disableEditing(): none;
    
    
            /**
             * 允许覆盖物在map.clearOverlays方法中被清除
             */
            enableMassClear(): none;
    
    
            /**
             * 禁止覆盖物在map.clearOverlays方法中被清除
             */
            disableMassClear(): none;
    
    
            /**
             * 返回覆盖物所在的map对象
             */
            getMap(): Map;
    
    
            /**
             * 添加事件监听函数
             */
            addEventListener(event: String, handler: Function): none;
    
    
            /**
             * 移除事件监听函数
             */
            removeEventListener(event: String, handler: Function): none;
    
        }
    
    
        /**
         *
         */
        export class CircleOptions {
    
    
            /**
             * 圆形边线颜色
             */
            strokeColor: String;
    
    
            /**
             * 圆形填充颜色。当参数为空时，圆形将没有填充效果
             */
            fillColor: String;
    
    
            /**
             * 圆形边线的宽度，以像素为单位
             */
            strokeWeight: Number;
    
    
            /**
             * 圆形边线透明度，取值范围0 - 1
             */
            strokeOpacity: Number;
    
    
            /**
             * 圆形填充的透明度，取值范围0 - 1
             */
            fillOpacity: Number;
    
    
            /**
             * 圆形边线的样式，solid或dashed
             */
            strokeStyle: String;
    
    
            /**
             * 是否在调用map.clearOverlays清除此覆盖物，默认为true
             */
            enableMassClear: Boolean;
    
    
            /**
             * 是否启用线编辑，默认为false
             */
            enableEditing: Boolean;
    
    
            /**
             * 是否响应点击事件，默认为true
             */
            enableClicking: Boolean;
    
    
        }
    
    
        /**
         * 创建地面叠加层
         */
        export class GroundOverlay {
    
            /**
             *
             */
            constructor(bounds: Bounds, opts: GroundOverlayOptions);
    
    
            /**
             * 设置图层显示的矩形区域
             */
            setBounds(bounds: Bounds): none;
    
    
            /**
             * 返回图层显示的矩形区域
             */
            getBounds(): Bounds;
    
    
            /**
             * 设置图层的透明度
             */
            setOpacity(opcity: Number): none;
    
    
            /**
             * 返回图层的透明度
             */
            getOpacity(): Number;
    
    
            /**
             * 返回图层地址
             */
            setImageURL(url: String): none;
    
    
            /**
             * 返回图层地址
             */
            getImageURL(): String;
    
    
            /**
             * 设置图层显示的最小级别
             */
            setDisplayOnMinLevel(level: Number): none;
    
    
            /**
             * 返回图层显示的最小级别
             */
            getDisplayOnMinLevel(): Number;
    
    
            /**
             * 设置图层显示的最大级别
             */
            setDispalyOnMaxLevel(level: Number): none;
    
    
            /**
             * 返回图层显示的最大级别
             */
            getDispalyOnMaxLevel(): Number;
    
        }
    
    
        /**
         *
         */
        export class GroundOverlayOptions {
    
    
            /**
             * 图层透明度
             */
            opacity: Number;
    
    
            /**
             * 图层地址
             */
            imageURL: String;
    
    
            /**
             * 图层显示的最小级别
             */
            displayOnMinLevel: Number;
    
    
            /**
             * 图层显示的最大级别
             */
            displayOnMaxLevel: Number;
    
    
        }
    
    
        /**
         * 创建海量点类。points为点的坐标集合，opts为点的绘制样式
         */
        export class PointCollection {
    
            /**
             *
             */
            constructor(points: Array<Point>, opts: PointCollectionOptions);
    
    
            /**
             * 设置要在地图上展示的点坐标集合
             */
            setPoints(points: Array<Point>): none;
    
    
            /**
             * 点的样式，包括:大小"size"（可选,默认正常尺寸10*10px，SizeType类型），形状"shape"（可选，默认圆形，ShapeType类型），颜色"color"（可选，字符串类型）
             */
            setStyles(styles: PointCollectionOption): none;
    
    
            /**
             * 清除海量点
             */
            clear(): none;
    
        }
    
    
        /**
         *
         */
        export class PointCollectionOptions {
    
    
            /**
             * 海量点的预设形状
             */
            shape: ShapeType;
    
    
            /**
             * 海量点的颜色，默认为'#fa937e'，同时支持颜色字符串，如'red'；哈希字符串'#000000'；rgb字符串，如'rgb(0,0,0)’；rgba字符串，如'rgb(255,0,0,0.1)'；hsl字符串，如'hsl(0,100%,50%)'；hsla字符串，如'hsla(0,100%,50%,0.4)'
             */
            color: String;
    
    
            /**
             * 海量点的预设尺寸
             */
            size: SizeType;
    
    
        }
    
    
        /**
         *
         */
        export class ShapeType {
    
    
        }
    
    
        /**
         *
         */
        export class SizeType {
    
    
        }
    
    
        /**
         * 创建Hotspot对象实例
         */
        export class Hotspot {
    
            /**
             *
             */
            constructor(position: Point, options: HotspotOptions);
    
    
            /**
             * 获取热区位置坐标
             */
            getPosition(): Point;
    
    
            /**
             * 设置热区位置坐标
             */
            setPosition(position: Point): None;
    
    
            /**
             * 获取热区提示文本
             */
            getText(): String;
    
    
            /**
             * 设置热区提示文本
             */
            setText(text: String): None;
    
    
            /**
             * 获取热区对应的用户数据
             */
            getUserData(): Mix;
    
    
            /**
             * 设置热区对应的用户数据
             */
            setUserData(data: Mix): None;
    
        }
    
    
        /**
         *
         */
        export class HotspotOptions {
    
    
            /**
             * 当鼠标移至某一热区上时出现的文字提示
             */
            text: String;
    
    
            /**
             * 热区响应区域距中心点的扩展偏移值。数组的四个数值分别表示上、右、下、左距离中心点的扩展偏移量。默认偏移量为[5, 5, 5, 5]
             */
            offsets: Array<any>;
    
    
            /**
             * 由用户填入的自定义数据
             */
            userData: Mix;
    
    
            /**
             * 热区生效的最小级别
             */
            minZoom: Number;
    
    
            /**
             * 热区生效的最大级别
             */
            maxZoom: Number;
    
    
        }
    
    
        /**
         * 创建一个矢量图标实例。path为svg中的path字符串或者已定义的符号常量,opts为矢量图标的样式
         */
        export class Symbol {
    
            /**
             *
             */
            constructor(path: String | SymboShapeType, opts: SymbolOptions);
    
    
            /**
             * 设置矢量图标的路径
             */
            setPath(path: string | SymbolShape): none;
    
    
            /**
             * 设置矢量图标的定位点,该定位点的位置以图标自身为基准
             */
            setAnchor(anchor: Size): none;
    
    
            /**
             * 设置矢量图标的旋转角度,参数为角度
             */
            setRotation(rotation: number): none;
    
    
            /**
             * 设置矢量图标的缩放比例
             */
            setScale(scale: number): none;
    
    
            /**
             * 设置矢量图标的线宽
             */
            setStrokeWeight(strokeWeight: number): none;
    
    
            /**
             * 设置矢量图标的线填充颜色,支持颜色常量字符串、十六进制、RGB、RGBA等格式
             */
            setStrokeColor(color: string): none;
    
    
            /**
             * 设置矢量图标线的透明度,opacity范围0~1
             */
            setStrokeOpacity(opacity: number): none;
    
    
            /**
             * 设置矢量图标填充透明度,opacity范围0~1
             */
            setFillOpacity(opacity: number): none;
    
    
            /**
             * 设置矢量图标的填充颜色。支持颜色常量字符串、十六进制、RGB、RGBA等格式
             */
            setFillColor(color: string): none;
    
        }
    
    
        /**
         *
         */
        export class SymbolOptions {
    
    
            /**
             * 符号的位置偏移值
             */
            anchor: Size;
    
    
            /**
             * 设置矢量图标的填充颜色。支持颜色常量字符串、十六进制、RGB、RGBA等格式
             */
            fillColor: string;
    
    
            /**
             * 设置矢量图标填充透明度,范围0~1
             */
            fillOpacity: Number;
    
    
            /**
             * 设置矢量图标的缩放比例
             */
            scale: Number;
    
    
            /**
             * 设置矢量图标的旋转角度,参数为角度
             */
            rotation: Number;
    
    
            /**
             * 设置矢量图标的线填充颜色,支持颜色常量字符串、十六进制、RGB、RGBA等格式
             */
            strokeColor: string;
    
    
            /**
             * 设置矢量图标线的透明度,opacity范围0~1
             */
            strokeOpacity: Number;
    
    
            /**
             * 旋设置线宽。如果此属性没有指定，则线宽跟scale数值相同
             */
            strokeWeight: Number;
    
    
        }
    
    
        /**
         *
         */
        export class SymbolShapeType {
    
    
        }
    
    
        /**
         * 创建一个右键菜单实例
         */
        export class ContextMenu {
    
    
            /**
             * 添加菜单项
             */
            addItem(item: MenuItem): none;
    
    
            /**
             * 返回指定索引位置的菜单项，第一个菜单项的索引为0
             */
            getItem(index: Number): MenuItem;
    
    
            /**
             * 移除菜单项
             */
            removeItem(item: MenuItem): none;
    
    
            /**
             * 添加分隔符
             */
            addSeparato(): none;
    
    
            /**
             * 移除指定索引位置的分隔符，第一个分隔符的索引为0
             */
            removeSeparator(index: Number): none;
    
        }
    
    
        /**
         * 创建一个菜单项。当菜单项被点击时，系统将会以当前菜单弹出的地理坐标点作为参数调用回调函数callback
         */
        export class MenuItem {
    
            /**
             *
             */
            constructor(text: String, callback: Function, opts: MenuItemOptions);
    
    
            /**
             * 设置菜单项显示的文本
             */
            setText(text: String): none;
    
    
            /**
             * 设置菜单项的icon
             */
            setIcon(iconUrl: String): none;
    
    
            /**
             * 启用菜单项
             */
            enable(): none;
    
    
            /**
             * 禁用菜单项
             */
            disable(): none;
    
        }
    
    
        /**
         *
         */
        export class MenuItemOptions {
    
    
            /**
             * 指定此菜单项的宽度，菜单以最长的菜单项宽度为准
             */
            width: Number;
    
    
            /**
             * 指定此菜单项dom的id
             */
            id: String;
    
    
            /**
             * 指定此菜单项的icon URL（大小为17px*17px）
             */
            iconUrl: String | ContextMenuIcon;
    
    
        }
    
    
        /**
         *
         */
        export class ContextMenuIcon {
    
    
        }
    
    
        /**
         * 创建MapType对象实例
         */
        export class MapType {
    
            /**
             *
             */
            constructor(name: String, layers: TileLayer | Array<TileLayer>, options: MapTypeOptions);
    
    
            /**
             * 返回地图类型名称
             */
            getName(): String;
    
    
            /**
             * 返回地图类型对应的图层
             */
            getTileLayer(): TileLayer;
    
    
            /**
             * 返回地图类型允许的最小级别
             */
            getMinZoom(): Number;
    
    
            /**
             * 返回地图类型允许的最大级别
             */
            getMaxZoom(): Number;
    
    
            /**
             * 返回地图类型所使用的投影实例
             */
            getProjection(): Projection;
    
    
            /**
             * 返回地图类型对应的前景色
             */
            getTextColor(): String;
    
    
            /**
             * 返回地图类型的提示说明，用于在地图类型控件中提示
             */
            getTips(): String;
    
        }
    
    
        /**
         *
         */
        export class MapTypeOptions {
    
    
            /**
             * 该类型地图的最小级别
             */
            minZoom: Number;
    
    
            /**
             * 该类型地图的最大级别
             */
            maxZoom: Number;
    
    
            /**
             * 当没有图块时所显示的错误图片地址。默认为透明图
             */
            errorImageUrl: String;
    
    
            /**
             * 地图类型对应的前景色
             */
            textColor: Number;
    
    
            /**
             * 提示说明信息，用于在地图类型控件中进行提示
             */
            tips: String;
    
    
        }
    
    
        /**
         *
         */
        export class Projection {
    
    
            /**
             * 抽象，根据球面坐标获得平面坐标
             */
            lngLatToPoint(lngLat: Point): Pixel;
    
    
            /**
             * 抽象，根据平面坐标获得球面坐标
             */
            pointToLngLat(point: Pixel): Point;
    
        }
    
    
        /**
         *
         */
        export class MercatorProjection {
    
    
            /**
             * 根据球面坐标获得平面坐标
             */
            lngLatToPoint(lngLat: Point): Pixel;
    
    
            /**
             * 根据平面坐标获得球面坐标
             */
            pointToLngLat(point: Pixel): Point;
    
        }
    
    
        /**
         *
         */
        export class PerspectiveProjection {
    
    
            /**
             * 根据球面坐标获得平面坐标
             */
            lngLatToPoint(lngLat: Point): Pixel;
    
    
            /**
             * 根据平面坐标获得球面坐标
             */
            pointToLngLat(point: Pixel): Point;
    
        }
    
    
        /**
         * 创建一个地图图层实例
         */
        export class TileLayer {
    
            /**
             *
             */
            constructor(opts: TileLayerOptions);
    
    
            /**
             * 抽象。向地图返回地图图块的网址，图块索引由tileCoord的x和y属性在指定的缩放级别zoom提供。如果您在TileLayerOptions中提供了tileUrlTemplate参数，则可不实现此接口
             */
            getTilesUrl(tileCoord: Pixel, zoom: Number): String;
    
    
            /**
             * 返回地图图层数据的版权对象
             */
            getCopyright(): Copyright | Null;
    
    
            /**
             * 如果图层所用的图片为PNG格式并且包含透明信息，则返回true
             */
            isTransparentPng(): Number;
    
        }
    
    
        /**
         *
         */
        export class TileLayerOptions {
    
    
            /**
             * 是否使用了带有透明信息的PNG。由于IE6不支持PNG透明，因此需要特殊处理
             */
            transparentPng: Boolean;
    
    
            /**
             * 指定图块网址模板，该模板可以针对每个图块请求而展开，以根据现有的图块坐标系引用唯一的图块。模板的格式应该为：
             * http://yourhost/tile?x={X}&y={Y}&z={Z}.png 其中X和Y分别指纬度和经度图块坐标，Z指缩放级别，
             * 比如： http://yourhost/tile?x=3&y=27&z=5.png 如果您没有提供图块网址模板，您需要实现TileLayer.getTileUrl()抽象方法
             */
            tileUrlTemplate: String;
    
    
            /**
             * 地图图层的版权信息
             */
            copyright: Copyright;
    
    
            /**
             * 图层的zIndex
             */
            zIndex: Number;
    
    
        }
    
    
        /**
         * 创建交通流量图层。参数：opts: TrafficLayerOptions，可选 options 参数指定应作为对象常量传递。如果可选参数提供predictDate，则将显示预测流量。否则显示实时流量
         */
        export class TrafficLayer {
    
            /**
             *
             */
            constructor(opts: TrafficLayerOptions);
    
    
        }
    
    
        /**
         *
         */
        export class TrafficLayerOptions {
    
    
            /**
             * 预测日期
             */
            predictDate: PredictDate;
    
    
        }
    
    
        /**
         *
         */
        export class PredictDate {
    
    
            /**
             * 预测日期，取值1到7，表示周一到周日
             */
            weekday: Number;
    
    
            /**
             * 预测小时数，取值0到23，表示当日的0点到23点
             */
            hour: Number;
    
    
        }
    
    
        /**
         * 创建自定义底图层
         */
        export class CustomLayer {
    
            /**
             *
             */
            constructor(customLayerOptions: opts);
    
    
        }
    
    
        /**
         *
         */
        export class CustomLayerOptions {
    
    
            /**
             * 使用云检索v1版本的databoxId
             */
            databoxId: String;
    
    
            /**
             * 使用云检索v2版本的geotableId
             */
            geotableId: String;
    
    
            /**
             * 检索关键字
             */
            q: String;
    
    
            /**
             * 空格分隔的多字符串
             */
            tags: String;
    
    
            /**
             * 过滤条件,参考http://developer.baidu.com/map/lbs-geosearch.htm#.search.nearby
             */
            filter: String;
    
    
            /**
             * 麻点密度常量
             */
            pointDensityType: PointDensityType;
    
    
        }
    
    
        /**
         *
         */
        export class Custompoi {
    
    
            /**
             * 返回数据的id
             */
            poiId: String;
    
    
            /**
             * 数据集的id
             */
            databoxId: String;
    
    
            /**
             * 结果的名称标题
             */
            title: String;
    
    
            /**
             * 地址
             */
            address: String;
    
    
            /**
             * 电话
             */
            phoneNumber: String;
    
    
            /**
             * 邮政编码
             */
            postcode: String;
    
    
            /**
             * 结果所在省的编码
             */
            provinceCode: Number;
    
    
            /**
             * 结果所在省的名称
             */
            province: String;
    
    
            /**
             * 结果所在城市的编码
             */
            cityCode: Number;
    
    
            /**
             * 结果所在城市的名称
             */
            city: String;
    
    
            /**
             * 结果所在区县的编码
             */
            districtCode: Number;
    
    
            /**
             * 结果所在区县的名称
             */
            district: String;
    
    
            /**
             * 结果所在的地理位置
             */
            point: Point;
    
    
            /**
             * 结果的筛选标签
             */
            tags: Array<String>;
    
    
            /**
             * 结果的类别id
             */
            typeId: Number;
    
    
            /**
             * 用户扩展数据，结构根据用户的自定义
             */
            extendedData: Json;
    
    
        }
    
    
        /**
         * 创建全景覆盖区域图层的实例
         */
        export class PanoramaCoverageLayer {
    
    
        }
    
    
        /**
         *
         */
        export class PointDensityType {
    
    
        }
    
    
        /**
         * 创建一个搜索类实例，其中location表示检索区域，其类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
         */
        export class LocalSearch {
    
            /**
             *
             */
            constructor(location: Map | Point | String, opts: LocalSearchOptions);
    
    
            /**
             * 根据检索词发起检索。当keyword为数组时将同时执行多关键字的查询，最多支持10个关键字，多关键字自 1.2 版本支持。option:{forceLocal:Boolean, customData:CustomData} forceLocal表示是否将搜索范围约束在当前城市，customData表示检索lbs云服务的数据
             */
            search(keyword: String | Array<String>, option: Object): none;
    
    
            /**
             * 根据范围和检索词发起范围检索。当keyword为数组时将同时执行多关键字检索，最多支持10个关键字，多关键字自 1.2 版本支持。option:{customData:CustomData} customData表示检索lbs云服务的数据
             */
            searchInBounds(keyword: String | Array<String>, bounds: Bounds, option: Object): none;
    
    
            /**
             * 根据中心点、半径与检索词发起周边检索。当keyword为数组时将同时执行多关键字的检索，最多支持10个关键字，多关键字自 1.2 版本支持。当center为字符串时，半径参数将忽略。注意：Point类型的中心点自 1.1 版本支持。option:{customData:CustomData} customData表示检索lbs云服务的数据
             */
            searchNearby(keyword: String | Array<String>, center: LocalResultPoi | String | Point, radius: Number, option: Object): none;
    
    
            /**
             * 返回最近一次检索的结果。如果是多关键字范围检索，则返回一个LocalResult的数组，数组中的结果顺序和范围检索中多关键字数组中顺序一致
             */
            getResults(): LocalResult | Array<LocalResult>;
    
    
            /**
             * 清除最近一次检索的结果
             */
            clearResults(): none;
    
    
            /**
             * 检索特定页面的结果
             */
            gotoPage(page: Number): none;
    
    
            /**
             * 启用根据结果自动调整地图层级，当指定了搜索结果所展现的地图时有效
             */
            enableAutoViewport(): none;
    
    
            /**
             * 禁用根据结果自动调整地图层级
             */
            disableAutoViewport(): none;
    
    
            /**
             * 启用自动选择第一个检索结果
             */
            enableFirstResultSelection(): none;
    
    
            /**
             * 禁用自动选择第一个检索结果
             */
            disableFirstResultSelection(): none;
    
    
            /**
             * 设置检索范围，参数类型可以为地图实例、坐标点或字符串。例：setLocation("北京市")
             */
            setLocation(location: Map | Point | String): none;
    
    
            /**
             * 设置每页容量，取值范围：1 - 100，对于多关键字检索，每页容量表示每个关键字返回结果的数量（例如当用2个关键字检索时，实际结果数量范围为：2 - 200）。此值只对下一次检索有效
             */
            setPageCapacity(): none;
    
    
            /**
             * 返回每页容量，对于多关键字检索，返回每个关键字对应的页面容量
             */
            getPageCapacity(): Number;
    
    
            /**
             * 设置检索结束后的回调函数。参数：results: LocalResult 或 Array
             如果是多关键字检索，回调函数参数为LocalResult的数组，数组中的结果顺序和检索中多关键字数组中顺序一致
             */
            setSearchCompleteCallback(): none;
    
    
            /**
             * 设置添加标注后的回调函数。参数： pois: Array
             ，通过marker属性可得到其对应的标注
             */
            setMarkersSetCallback(callback: Function): none;
    
    
            /**
             * 设置标注气泡创建时的回调函数。参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的Dom元素
             */
            setInfoHtmlSetCallback(callback: Function): none;
    
    
            /**
             * 设置结果列表创建后的回调函数。参数： container: HTMLElement，结果列表所用的HTML元素
             */
            setResultsHtmlSetCallback(callback: Function): none;
    
    
            /**
             * 返回状态码
             */
            getStatus(): StatusCodes;
    
        }
    
    
        /**
         *
         */
        export class LocalSearchOptions {
    
    
            /**
             * 结果呈现设置
             */
            renderOptions: LocalRenderOptions;
    
    
            /**
             * 标注添加完成后的回调函数。 参数： pois: Array
             ，通过marker属性可得到其对应的标注
             */
            onMarkersSet: Function;
    
    
            /**
             * 标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的Dom元素
             */
            onInfoHtmlSet: Function;
    
    
            /**
             * 结果列表添加完成后的回调函数。 参数： container: HTMLElement，结果列表所用的HTML元素
             */
            onResultsHtmlSet: Function;
    
    
            /**
             * 设置每页容量，取值范围：1 - 100，对于多关键字检索，容量表示每个关键字的数量，如果有2个关键字，则实际检索结果数量范围为：2 - 200
             */
            pageCapacity: Number;
    
    
            /**
             * 检索完成后的回调函数。 参数：results: LocalResult或Array
             如果是多关键字检索，回调函数参数返回一个LocalResult的数组，数组中的结果顺序和检索中多关键字数组中顺序一致
             */
            onSearchComplete: Function;
    
    
        }
    
    
        /**
         *
         */
        export class CustomData {
    
    
            /**
             * lbs云v2接口，可在lbs云平台上查看自己的geotableId
             */
            geotableId: Number;
    
    
            /**
             * 空格分隔的多字符串
             */
            tags: String;
    
    
            /**
             * 过滤条件，参考：http://developer.baidu.com/map/index.php?title=lbscloud/api/geosearch
             */
            filter: String;
    
    
        }
    
    
        /**
         *
         */
        export class RenderOptions {
    
    
            /**
             * 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上
             */
            map: Map;
    
    
            /**
             * 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。此属性对LocalCity无效
             */
            panel: String | HTMLElement;
    
    
            /**
             * 是否选择第一个检索结果。此属性仅对LocalSearch有效
             */
            selectFirstResult: Boolean;
    
    
            /**
             * 检索结束后是否自动调整地图视野。此属性对LocalCity无效
             */
            autoViewport: Boolean;
    
    
            /**
             * 驾车结果展现中点击列表后的展现策略
             */
            highlightMode: HighlightModes;
    
    
        }
    
    
        /**
         *
         */
        export class LocalResult {
    
    
            /**
             * 本次检索的关键词
             */
            keyword: String;
    
    
            /**
             * 周边检索的中心点（仅当周边检索时提供）
             */
            center: LocalResultPoi;
    
    
            /**
             * 周边检索的半径（仅当周边检索时提供）
             */
            radius: Number;
    
    
            /**
             * 范围检索的地理区域（仅当范围检索时提供）
             */
            bounds: Bounds;
    
    
            /**
             * 本次检索所在的城市
             */
            city: String;
    
    
            /**
             * 更多结果的链接，到百度地图进行搜索
             */
            moreResultsUrl: String;
    
    
            /**
             * 本次检索所在的省份
             */
            province: String;
    
    
            /**
             * 搜索建议列表。（当关键词是拼音或拼写错误时给出的搜索建议）
             */
            suggestions: Array<String>;
    
    
            /**
             * 返回索引指定的结果。索引0表示第1条结果
             */
            getPoi(i: Number): LocalResultPoi;
    
    
            /**
             * 返回当前页的结果数
             */
            getCurrentNumPois(): Number;
    
    
            /**
             * 返回总结果数
             */
            getNumPois(): Number;
    
    
            /**
             * 返回总页数
             */
            getNumPages(): Number;
    
    
            /**
             * 返回页数序号
             */
            getPageIndex(): Number;
    
    
            /**
             * 返回城市列表。数组元素对象包含如下属性： city: String，城市名 numResults: Number，结果数
             */
            getCityList(): Array<Object>;
    
        }
    
    
        /**
         *
         */
        export class LocalResultPoi {
    
    
            /**
             * 结果的名称标题
             */
            title: String;
    
    
            /**
             * 该结果所在的地理位置
             */
            point: Point;
    
    
            /**
             * 在百度地图中展示该结果点的详情信息链接
             */
            url: String;
    
    
            /**
             * 地址（根据数据部分提供）。注：当结果点类型为公交站或地铁站时，地址信息为经过该站点的所有车次
             */
            address: String;
    
    
            /**
             * 所在城市
             */
            city: String;
    
    
            /**
             * 电话，根据数据部分提供
             */
            phoneNumber: String;
    
    
            /**
             * 邮政编码，根据数据部分提供
             */
            postcode: String;
    
    
            /**
             * 类型，根据数据部分提供
             */
            type: PoiType;
    
    
            /**
             * 是否精确匹配。只适用LocalSearch的search方法检索的结果
             */
            isAccurate: Boolean;
    
    
            /**
             * 所在省份
             */
            province: String;
    
    
            /**
             * POI的标签，如商务大厦、餐馆等。目前只有LocalSearch的回调函数onSearchComplete(result)中的result和Geocoder.getLocation的回调函数的参数GeocoderResult.surroundingPois涉及的LocalResultPoi有tags字段。其他API涉及的LocalResultPoi没有该字段
             */
            tags: Array<String>;
    
    
            /**
             * 在百度地图详情页面展示该结果点的链接。localsearch的结果中才有
             */
            detailUrl: String;
    
    
        }
    
    
        /**
         *
         */
        export class PoiType {
    
    
        }
    
    
        /**
         * 创建一个公交导航实例。location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
         */
        export class TransitRoute {
    
            /**
             *
             */
            constructor(location: Map | Point | String, opts: TransitRouteOptions);
    
    
            /**
             * 发起检索。 start: 起点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。 end: 终点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例
             */
            search(start: String | Point | LocalResultPoi, end: String | Point | LocalResultPoi): none;
    
    
            /**
             * 返回最近一次检索的结果
             */
            getResults(): TransitRouteResult;
    
    
            /**
             * 清除最近一次检索的结果
             */
            clearResults(): none;
    
    
            /**
             * 启用自动调整地图层级，当指定了搜索结果所展现的地图时有效
             */
            enableAutoViewport(): none;
    
    
            /**
             * 禁用自动调整地图层级
             */
            disableAutoViewport(): none;
    
    
            /**
             * 设置每页返回方案个数（1-5），默认为5
             */
            setPageCapacity(capacity: Number): none;
    
    
            /**
             * 设置检索范围，参数类型可以为地图实例、坐标点或字符串。例：setLocation("北京市")
             */
            setLocation(location: Map | Point | String): none;
    
    
            /**
             * 设置路线规划策略，参数为策略常量
             */
            setPolicy(policy: TransitPolicy): none;
    
    
            /**
             * 设置检索结束后的回调函数。 参数： results: TransitRouteResult，公交导航结果
             */
            setSearchCompleteCallback(callback: Function): none;
    
    
            /**
             * 设置添加标注后的回调函数。 参数： pois: Array
             ，起点和目的地数组。 transfers: Array
             ，公交车站数组
    
             */
            setMarkersSetCallback(callback: Function): none;
    
    
            /**
             * 设置气泡打开后的回调函数。 参数： poi: LocalResultPoi，表示当前气泡对应的点（可以是起点、终点或换乘车站） html: HTMLElement，气泡内的DOM元素
             */
            setInfoHtmlSetCallback(callback: Function): none;
    
    
            /**
             * 设置添加路线后的回调函数。 参数： lines: Array
             ，公交线路数组。 routes: Array
             ，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
    
             */
            setPolylinesSetCallback(callback: Function): none;
    
    
            /**
             * 设置结果列表创建后的回调函数。 参数： container: 结果列表所用的HTML元素
             */
            setResultsHtmlSetCallback(callback: Function): none;
    
    
            /**
             * 返回状态码
             */
            getStatus(): StatusCodes;
    
    
            /**
             * 返回类型说明
             */
            toString(): String;
    
        }
    
    
        /**
         *
         */
        export class TransitRouteOptions {
    
    
            /**
             * 搜索结果的呈现设置
             */
            renderOptions: RenderOptions;
    
    
            /**
             * 公交导航的策略参数
             */
            policy: TransitPolicy;
    
    
            /**
             * 返回方案的个数
             */
            pageCapacity: Number;
    
    
            /**
             * 检索完成后的回调函数。参数：results: TransitRouteResult，公交导航结果
             */
            onSearchComplete: Function;
    
    
            /**
             * 标注添加完成后的回调函数。参数：pois: Array
             ，起点和目的地数组。transfers: Array
             ，公交车站数组
    
             */
            onMarkersSet: Function;
    
    
            /**
             * 气泡内容创建后的回调函数。参数：poi: LocalResultPoi，表示当前气泡对应的点（可以是起点、终点或换乘车站）html: HTMLElement，气泡内的DOM元素
             */
            onInfoHtmlSet: Function;
    
    
            /**
             * 折线添加完成后的回调函数。参数：lines: Array
             ，公交线路数组。routes: Array
             ，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
    
             */
            onPolylinesSet: Function;
    
    
            /**
             * 结果列表添加完成后的回调函数。参数：container: 结果列表所用的HTML元素
             */
            onResultsHtmlSet: Function;
    
    
        }
    
    
        /**
         *
         */
        export class TransitPolicy {
    
    
        }
    
    
        /**
         *
         */
        export class TransitRouteResult {
    
    
            /**
             * 公交导航策略
             */
            policy: TransitPolices;
    
    
            /**
             * 本次检索所在的城市
             */
            city: String;
    
    
            /**
             * 更多结果的链接，到百度地图进行搜索
             */
            moreResultsUrl: String;
    
    
            /**
             * 返回起点
             */
            getStart(): LocalResultPoi;
    
    
            /**
             * 返回终点
             */
            getEnd(): LocalResultPoi;
    
    
            /**
             * 返回方案个数
             */
            getNumPlans(): Number;
    
    
            /**
             * 返回索引指定的方案。索引0表示第一条方案
             */
            getPlan(i: Number): TransitRoutePlan;
    
        }
    
    
        /**
         *
         */
        export class TransitRoutePlan {
    
    
            /**
             * 返回方案包含的公交线路段数
             */
            getNumLines(): Number;
    
    
            /**
             * 返回方案包含的某条公交线路
             */
            getLine(i: Number): Line;
    
    
            /**
             * 返回方案包含的步行线路段数
             */
            getNumRoutes(): Number;
    
    
            /**
             * 返回方案包含的某条步行线路
             */
            getRoute(i: Number): Route;
    
    
            /**
             * 返回方案总距离。当format参数为true时，返回方案距离字符串（包含单位），当format为false时，仅返回数值（单位为米）信息。默认参数为true
             */
            getDistance(format: Boolean): String | Number;
    
    
            /**
             * 返回方案总时间。当format参数为true时，返回描述时间的字符串（包含单位），当format为false时，仅返回数值（单位为秒）信息。默认参数为true
             */
            getDuration(format: Boolean): String | Number;
    
    
            /**
             * 返回方案描述文本，默认包含HTML标签。当includeHtml为false时，方案描述不包含HTML标签
             */
            getDescription(includeHtml: Boolean): String;
    
        }
    
    
        /**
         *
         */
        export class LineType {
    
    
        }
    
    
        /**
         * 创建一个步行导航实例。location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
         */
        export class WalkingRoute {
    
            /**
             *
             */
            constructor(location: Map | Point | String, opts: WalkingRouteOptions);
    
    
            /**
             * 发起检索。 start: 起点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。 end: 终点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例
             */
            search(start: String | Point | LocalResultPoi, end: String | Point | LocalResultPoi): none;
    
    
            /**
             * 返回最近一次检索的结果
             */
            getResults(): WalkingRouteResult;
    
    
            /**
             * 清除最近一次检索的结果
             */
            clearResults(): none;
    
    
            /**
             * 启用自动调整地图层级，当指定了搜索结果所展现的地图时有效
             */
            enableAutoViewport(): none;
    
    
            /**
             * 禁用自动调整地图层级
             */
            disableAutoViewport(): none;
    
    
            /**
             * 设置检索范围，参数类型可以为地图实例、坐标点或字符串。例：setLocation("北京市")
             */
            setLocation(location: Map | Point | String): none;
    
    
            /**
             * 设置检索结束后的回调函数。 参数： results: WalkingRouteResult
             */
            setSearchCompleteCallback(callback: Function): none;
    
    
            /**
             * 设置添加标注后的回调函数。 参数： pois: Array
             ，起点和目的地点数组。通过marker属性可得到其对应的标注
             */
            setMarkersSetCallback(callback: Function): none;
    
    
            /**
             * 设置气泡打开后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的DOM元素
             */
            setInfoHtmlSetCallback(callback: Function): none;
    
    
            /**
             * 设置添加路线后的回调函数。 参数： routes: Array
             ，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
             */
            setPolylinesSetCallback(callback: Function): none;
    
    
            /**
             * 设置结果列表创建后的回调函数。 参数： container: 结果列表所用的HTML元素
             */
            setResultsHtmlSetCallback(callback: Function): none;
    
    
            /**
             * 返回状态码
             */
            getStatus(): StatusCodes;
    
    
            /**
             * 返回类型说明
             */
            toString(): String;
    
        }
    
    
        /**
         *
         */
        export class WalkingRouteOptions {
    
    
            /**
             * 搜索结果呈现设置
             */
            renderOptions: RenderOptions;
    
    
            /**
             * 检索完成后的回调函数。 参数： results: WalkingRouteResult
             */
            onSearchComplete: Function;
    
    
            /**
             * 标注添加完成后的回调函数。 参数： pois: Array
             ，起点和目的地点数组，。通过marker属性可得到其对应的标注
             */
            onMarkersSet: Function;
    
    
            /**
             * 折线添加完成后的回调函数。 参数： routes: Array
             ，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
             */
            onPolylinesSet: Function;
    
    
            /**
             * 标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的DOM元素
             */
            onInfoHtmlSet: Function;
    
    
            /**
             * 结果列表添加完成后的回调函数。 参数： container: 结果列表所用的HTML元素
             */
            onResultsHtmlSet: Function;
    
    
        }
    
    
        /**
         *
         */
        export class WalkingRouteResult {
    
    
            /**
             * 本次检索所在的城市
             */
            city: String;
    
    
            /**
             * 返回起点
             */
            getStart(): LocalResultPoi;
    
    
            /**
             * 返回终点
             */
            getEnd(): LocalResultPoi;
    
    
            /**
             * 返回方案个数
             */
            getNumPlans(): Number;
    
    
            /**
             * 返回索引指定的方案。索引0表示第一条方案
             */
            getPlan(i: Number): RoutePlan;
    
        }
    
    
        /**
         * 创建一个驾车导航实例，其中location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由地图当前的中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
         */
        export class DrivingRoute {
    
            /**
             *
             */
            constructor(location: Map | Point | String, opts: DrivingRouteOptions);
    
    
            /**
             * 发起检索。 start: 起点，参数可以是关键字、坐标点（自1.1版本支持）和LocalSearchPoi实例。
             * end: 终点，参数可以是关键字、坐标点（自1.1版本支持）或LocalSearchPoi实例。
             * option:{startCity:String,endCity:string,waypoints:array } startCity表示是驾车查询的起点城市，
             * 可以是城市名或者城市编码，endCity表示驾车查询的终点城市，可以是城市名或者城市编码,waypoints途经点集合，
             * 最多支持10个途经点，可以是名称也可以是坐标
             */
            search(start: String | Point | LocalResultPoi, end: String | Point | LocalResultPoi, options: object): none;
    
    
            /**
             * 返回最近一次检索的结果
             */
            getResults(): DrivingRouteResult;
    
    
            /**
             * 清除最近一次检索的结果
             */
            clearResults(): none;
    
    
            /**
             * 启用自动调整地图层级，当指定了搜索结果所展现的地图时有效
             */
            enableAutoViewport(): none;
    
    
            /**
             * 禁用自动调整地图层级
             */
            disableAutoViewport(): none;
    
    
            /**
             * 设置检索范围，参数类型可以为地图实例、坐标点或字符串。例：setLocation("北京市")
             */
            setLocation(location: Map | Point | String): none;
    
    
            /**
             * 设置路线规划策略，参数为策略常量
             */
            setPolicy(policy: DrivingPolicy): none;
    
    
            /**
             * 设置检索结束后的回调函数。 参数： results: DrivingRouteResult
             */
            setSearchCompleteCallback(callback: Function): none;
    
    
            /**
             * 设置添加标注后的回调函数。 参数： pois: Array
             ，起点和目的地点数组，通过marker属性可得到其对应的标注
             */
            setMarkersSetCallback(callback: Function): none;
    
    
            /**
             * 设置气泡打开后的回调函数。 参数： poi: LocalResultPoi，通过marker属性可得到当前的标注。html: HTMLElement，气泡内的DOM元素
             */
            setInfoHtmlSetCallback(callback: Function): none;
    
    
            /**
             * 设置添加路线后的回调函数。 参数： routes: Array
             ，驾车线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
             */
            setPolylinesSetCallback(callback: Function): none;
    
    
            /**
             * 设置结果列表创建后的回调函数。 参数： container: 结果列表所用的HTML元素
             */
            setResultsHtmlSetCallback(callback: Function): none;
    
    
            /**
             * 返回状态码
             */
            getStatus(): StatusCodes;
    
    
            /**
             * 返回类型说明
             */
            toString(): String;
    
        }
    
    
        /**
         *
         */
        export class DrivingRouteOptions {
    
    
            /**
             * 结果呈现设置
             */
            renderOptions: RenderOptions;
    
    
            /**
             * 驾车策略
             */
            policy: DrivingPolicy;
    
    
            /**
             * 检索完成后的回调函数。参数： results: DrivingRouteResult
             */
            onSearchComplete: Function;
    
    
            /**
             * 标注添加完成后的回调函数。 参数： pois: Array
             ，起点和目的地点数组，通过marker属性可得到其对应的标注
             */
            onMarkersSet: Function;
    
    
            /**
             * 标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过marker属性可得到当前的标注。html: HTMLElement，气泡内的DOM元素
             */
            onInfoHtmlSet: Function;
    
    
            /**
             * 折线添加完成后的回调函数。 参数： routes: Array
             ，驾车线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
             */
            onPolylinesSet: Function;
    
    
            /**
             * 结果列表添加完成后的回调函数。 参数： container: 结果列表所用的HTML元素
             */
            onResultsHtmlSet: Function;
    
    
        }
    
    
        /**
         *
         */
        export class DrivingRouteResult {
    
    
            /**
             * 驾车导航策略
             */
            policy: DrivingPolicy;
    
    
            /**
             * 本次检索所在的城市
             */
            city: String;
    
    
            /**
             * 更多结果的链接，到百度地图进行搜索
             */
            moreResultsUrl: String;
    
    
            /**
             * 出租车费用信息。注意，此属性在部分城市有效，无效时为null
             */
            taxiFare: TaxiFare;
    
    
            /**
             * 返回起点
             */
            getStart(): LocalResultPoi;
    
    
            /**
             * 返回终点
             */
            getEnd(): LocalResultPoi;
    
    
            /**
             * 返回方案个数
             */
            getNumPlans(): Number;
    
    
            /**
             * 返回索引指定的方案。索引0表示第一条方案
             */
            getPlan(i: Number): RoutePlan;
    
        }
    
    
        /**
         *
         */
        export class DrivingPolicy {
    
    
        }
    
    
        /**
         *
         */
        export class TaxiFare {
    
    
            /**
             * 白天费用
             */
            day: TaxiFareDetail;
    
    
            /**
             * 夜间费用。注意，部分城市没有夜间费用，此时此属性为null，且同时白天费用表示全天费用
             */
            night: TaxiFareDetail;
    
    
            /**
             * 出租车里程，单位为米
             */
            distance: Number;
    
    
            /**
             * 出租车备注信息
             */
            remark: String;
    
    
        }
    
    
        /**
         *
         */
        export class TaxiFareDetail {
    
    
            /**
             * 出租车起步价
             */
            initialFare: Number;
    
    
            /**
             * 出租车单价
             */
            unitFare: Number;
    
    
            /**
             * 出租车费用总价
             */
            totalFare: Number;
    
    
        }
    
    
        /**
         *
         */
        export class RoutePlan {
    
    
            /**
             * 返回方案包含的线路的个数
             */
            getNumRoutes(): Number;
    
    
            /**
             * 返回方案中索引指定的线路。索引0表示第一条线路
             */
            getRoute(i: Number): Route;
    
    
            /**
             * 返回方案总距离。当format参数为true时，返回方案距离字符串（包含单位），当format为false时，仅返回数值（单位为米）信息。默认参数为true
             */
            getDistance(format: Boolean): String | Number;
    
    
            /**
             * 返回方案总时间。当format参数为true时，返回描述时间的字符串（包含单位），当format为false时，仅返回数值（单位为秒）信息。默认参数为true
             */
            getDuration(format: Boolean): String | Number;
    
    
            /**
             * 获取通过拖拽方式产生的途径点。注意，这里的LocalResultPoi只有title和point属性
             */
            getDragPois(): Array<LocalResultPoi>;
    
        }
    
    
        /**
         *
         */
        export class Route {
    
    
            /**
             * 返回路线包含的关键点个数
             */
            getNumSteps(): Number;
    
    
            /**
             * 返回索引指定的关键点，驾车和步行适用。索引0表示第一个关键点
             */
            getStep(i: Number): Step;
    
    
            /**
             * 返回路线距离，当format为false时仅返回数值
             */
            getDistance(format: Boolean): String | Number;
    
    
            /**
             * 返回本路线在方案中的索引位置
             */
            getIndex(): Number;
    
    
            /**
             * 返回路线对应的覆盖物，仅当结果自动添加到地图上时有效
             */
            getPolyline(): Polyline;
    
    
            /**
             * 返回路线的地理坐标点数组
             */
            getPath(): Array<Point>;
    
    
            /**
             * 返回路线类型，可区分是驾车还是步行线路
             */
            getRouteType(): RouteTypes;
    
        }
    
    
        /**
         *
         */
        export class RouteType {
    
    
        }
    
    
        /**
         *
         */
        export class Step {
    
    
            /**
             * 返回关键点地理坐标
             */
            getPosition(): Point;
    
    
            /**
             * 返回本关键点在路线中的位置索引
             */
            getIndex(): Number;
    
    
            /**
             * 返回关键点描述文本，默认包含HTML标签。当includeHtml为false时，描述文本不包含HTML标签
             */
            getDescription(includeHtml: Boolean): String;
    
    
            /**
             * 返回到下一个关键点的距离，当format为false时仅返回数值（单位为米）
             */
            getDistance(format: Boolean): String | Number;
    
        }
    
    
        /**
         *
         */
        export class HighlightModes {
    
    
        }
    
    
        /**
         * 创建一个地址解析器的实例
         */
        export class Geocoder {
    
    
            /**
             * 对指定的地址进行解析。如果地址定位成功，则以地址所在的坐标点Point为参数调用回调函数。否则，回调函数的参数为null。city为地址所在的城市名，例如“北京市”
             */
            getPoint(address: String, callback: Function, city: String): none;
    
    
            /**
             * 对指定的坐标点进行反地址解析。如果解析成功，则回调函数的参数为GeocoderResult对象，否则回调函数的参数为null
             */
            getLocation(point: Point, callback: Function, options: LocationOptions): none;
    
        }
    
    
        /**
         *
         */
        export class GeocoderResult {
    
    
            /**
             * 坐标点
             */
            point: Point;
    
    
            /**
             * 地址描述
             */
            address: String;
    
    
            /**
             * 结构化的地址描述
             */
            addressComponents: AddressComponent;
    
    
            /**
             * 附近的POI点
             */
            surroundingPois: Array<LocalResultPoi>;
    
    
            /**
             * 商圈字段，代表此点所属的商圈
             */
            business: String;
    
    
        }
    
    
        /**
         *
         */
        export class AddressComponent {
    
    
            /**
             * 门牌号码
             */
            streetNumber: String;
    
    
            /**
             * 街道名称
             */
            street: String;
    
    
            /**
             * 区县名称
             */
            district: String;
    
    
            /**
             * 城市名称
             */
            city: String;
    
    
            /**
             * 省份名称
             */
            province: String;
    
    
        }
    
    
        /**
         *
         */
        export class LocationOptions {
    
    
            /**
             * 附近POI所处于的最大半径，默认为100米
             */
            poiRadius: Number;
    
    
            /**
             * 返回的POI点个数，默认为10个。取值范围
             */
            numPois: Number;
    
    
        }
    
    
        /**
         * 创建一个获取本地城市位置的实例
         */
        export class LocalCity {
    
            /**
             *
             */
            constructor(opts: LocalCityOptions);
    
    
            /**
             * 当获取城市信息后，回调函数会被调用，其参数为类型为LocalCityResult对象
             */
            get(callback: Function): none;
    
        }
    
    
        /**
         *
         */
        export class LocalCityOptions {
    
    
            /**
             * 结果呈现设置，当给定map参数时，改地图将自动将视野定位到当前城市
             */
            renderOptions: RenderOptions;
    
    
        }
    
    
        /**
         *
         */
        export class LocalCityResult {
    
    
            /**
             * 城市所在中心点
             */
            center: Point;
    
    
            /**
             * 展示当前城市的最佳地图级别，如果您在使用此对象时提供了map实例，则地图级别将根据您提供的地图大小进行调整
             */
            level: Number;
    
    
            /**
             * 城市名称
             */
            name: String;
    
    
        }
    
    
        /**
         * 创建Geolocation对象实例
         */
        export class Geolocation {
    
    
            /**
             * 返回用户当前位置。当定位成功时，回调函数的参数为GeolocationResult对象，否则为null
             */
            getCurrentPosition(callback: Function, options: PositionOptions): none;
    
    
            /**
             * 返回状态码，当定位成功后，状态码为：BMAP_STATUS_SUCCESS，如果为其他状态码表示不能获取您当前的位置
             */
            getStatus(): StatusCode;
    
        }
    
    
        /**
         *
         */
        export class GeolocationResult {
    
    
            /**
             * 坐标点
             */
            point: Point;
    
    
            /**
             * 定位精确程度，单位为米
             */
            accuracy: Number;
    
    
        }
    
    
        /**
         *
         */
        export class PositionOptions {
    
    
            /**
             * 要求浏览器获取最佳结果
             */
            enableHighAccuracy: Boolean;
    
    
            /**
             * 超时时间
             */
            timeout: Number;
    
    
            /**
             * 允许返回指定时间内的缓存结果。如果此值为0，则浏览器将立即获取新定位结果
             */
            maximumAge: Number;
    
    
        }
    
    
        /**
         * 创建公交线搜索类。其中location表示检索区域，其类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
         */
        export class BusLineSearch {
    
            /**
             *
             */
            constructor(location: Map | Point | String, options: BusLineSearchOptions);
    
    
            /**
             * 在用户配置的回调函数中返回公交列表结果，其类型为BusListResult
             */
            getBusList(keyword: String): none;
    
    
            /**
             * 在用户配置的回调函数中返回该条线路的公交信息，其类型为BusLine类型
             */
            getBusLine(busLstItem: BusListItem): none;
    
    
            /**
             * 清除本次公交线检索结果
             */
            clearResults(): none;
    
    
            /**
             * 启用自动调整地图视野功能
             */
            enableAutoViewport(): none;
    
    
            /**
             * 禁用自动调整地图视野功能
             */
            disableAutoViewport(): none;
    
    
            /**
             * 设置检索范围，参数类型可以为地图实例、坐标点或字符串。例：setLocation("北京市")
             */
            setLocation(location: Map | Point | String): none;
    
    
            /**
             * 返回状态码
             */
            getStatus(): StatusCodes;
    
    
            /**
             * 返回类型说明
             */
            toString(): String;
    
    
            /**
             * 设置公交列表查询后的回调函数。参数：rs: BusListResult类型
             */
            setGetBusListCompleteCallback(callback: Function): none;
    
    
            /**
             * 设置公交线路查询后的回调函数。参数：rs: BusLine类型
             */
            setGetBusLineCompleteCallback(callback: Function): none;
    
    
            /**
             * 公交列表结果页渲染后回调函数。参数：container: HTMLElement，结果列表所用的HTML元素
             */
            setBusListHtmlSetCallback(callback: Function): none;
    
    
            /**
             * 公交线路结果页渲染后回调函数。参数：container: HTMLElement，结果列表所用的HTML元素
             */
            _(callback: Function): none;
    
    
            /**
             * 添加公交线时候回调函数。参数：ply:Polyline 公交线路几何对象
             */
            _(callback: Function): none;
    
    
            /**
             * 添加公交站点时候回调函数。参数：sts:Array
             公交站坐标组成的Marker对象数组
             */
            _(callback: Function): none;
    
        }
    
    
        /**
         *
         */
        export class BusLineSearchOptions {
    
    
            /**
             * RenderOptions结果呈现设置
             */
            renderOptions: RenderOptions;
    
    
            /**
             * 设置公交列表查询后的回调函数.参数：rs: BusListResult类型
             */
            onGetBusListComplete: Function;
    
    
            /**
             * 设置公交线路查询后的回调函数.参数：rs: BusLine类型
             */
            onGetBusLineComplete: Function;
    
    
            /**
             * 公交列表结果页渲染后回调函数.参数：container: HTMLElement，结果列表所用的HTML元素
             */
            onBusListHtmlSet: Function;
    
    
            /**
             * 公交线路结果页渲染后回调函数.参数：container: HTMLElement，结果列表所用的HTML元素
             */
            onBusLineHtmlSet: Function;
    
    
            /**
             * 添加公交线时候回调函数.参数：ply:Polyline 公交线路几何对象
             */
            onPolylinesSet: Function;
    
    
            /**
             * 添加公交站点时候回调函数.参数：sts:Array
             公交站坐标组成的Marker对象数组
             */
            onMarkersSet: Function;
    
    
        }
    
    
        /**
         *
         */
        export class BusListResult {
    
    
            /**
             * 本次检索关键字
             */
            keyword: String;
    
    
            /**
             * 本次检索所在城市
             */
            city: String;
    
    
            /**
             * 到百度地图查看url
             */
            moreResultsUrl: String;
    
    
            /**
             * 公交列表个数
             */
            getNumBusList(): Number;
    
    
            /**
             * 获取某一个具体的公交列表中的对象。0表示上行，1表示下行
             */
            getBusListItem(i: Number): BusListItem;
    
        }
    
    
        /**
         *
         */
        export class BusLine {
    
    
            /**
             * 线路名称
             */
            name: String;
    
    
            /**
             * 首班车时间
             */
            startTime: String;
    
    
            /**
             * 末班车时间
             */
            endTime: String;
    
    
            /**
             * 公交线路所属公司
             */
            company: String;
    
    
            /**
             * 获取公交站点个数
             */
            getNumBusStations(): Number;
    
    
            /**
             * 获取某一个具体的公交站对象
             */
            getBusStation(i: Number): BusStation;
    
    
            /**
             * 返回公交线地理坐标点数组
             */
            getPath(): Array<Point>;
    
    
            /**
             * 获取公交线几何对象, 仅当结果自动添加到地图上时有效
             */
            getPolyline(): Polyline;
    
        }
    
    
        /**
         *
         */
        export class Line {
    
    
            /**
             * 公交线路全称
             */
            title: String;
    
    
            /**
             * 公交线路类型
             */
            type: LineType;
    
    
            /**
             * 返回公交线路途径的车站个数
             */
            getNumViaStops(): Number;
    
    
            /**
             * 返回上车站
             */
            getGetOnStop(): LocalResultPoi;
    
    
            /**
             * 返回下车站
             */
            getGetOffStop(): LocalResultPoi;
    
    
            /**
             * 返回线路对应的地理坐标点数组，在公交方案中，地理坐标只给出方案涉及的部分
             */
            getPath(): Array<Point>;
    
    
            /**
             * 返回公交线路对应的折线覆盖物
             */
            getPolyline(): Polyline;
    
    
            /**
             * 当format为true时，返回本段公交线路的距离字符串（包含单位），当format为false时仅返回数值（单位为米）。默认参数为true
             */
            getDistance(format: Boolean): String | Number;
    
        }
    
    
        /**
         *
         */
        export class BusListItem {
    
    
            /**
             * 公交线名称
             */
            name: String;
    
    
        }
    
    
        /**
         *
         */
        export class BusStation {
    
    
            /**
             * 站点名称
             */
            name: String;
    
    
            /**
             * 站点坐标
             */
            position: Point;
    
    
        }
    
    
        /**
         * 创建自动完成的实例
         */
        export class Autocomplete {
    
            /**
             *
             */
            constructor(options: AutocompleteOptions);
    
    
            /**
             * 显示提示列表
             */
            show(): none;
    
    
            /**
             * 隐藏提示列表
             */
            hide(): none;
    
    
            /**
             * 修改请求数据类型。types定义方法详见AutocompleteOptions
             */
            setTypes(types: Array<any>): none;
    
    
            /**
             * 设置检索区域
             */
            setLocation(location: String | Map | Point): none;
    
    
            /**
             * 发起某个关键字的提示请求，会引起onSearchComplete的回调
             */
            search(keywords: string): none;
    
    
            /**
             * 获取结果列表
             */
            getResults(): AutocompleteResult;
    
    
            /**
             * 设置绑定的input控件的值，且不会出现下拉列表
             */
            setInputValue(keyword: string): none;
    
    
            /**
             * 销毁自动完成对象
             */
            dispose(): none;
    
        }
    
    
        /**
         *
         */
        export class AutocompleteOptions {
    
    
            /**
             * 设定返回结果的所属范围。例如“北京市”
             */
            location: String | Map | Point;
    
    
            /**
             * 返回数据类型。两种设置方式，第一种为默认值（即设置值为空），将返回所有数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现包含“小”关键字的多种类型（如餐饮、地名等）的提示词条。第二种设置值为"city"，将返回省市区县乡镇街道地址类型数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现“小金县”的地点名称类的提示词条
             */
            types: Array<String>;
    
    
            /**
             * 在input框中输入字符后，发起列表检索，完成后的回调函数。 参数：AutocompleteResult
             */
            onSearchComplete: Function;
    
    
            /**
             * 文本输入框元素或其id
             */
            input: String | HTMLElement;
    
    
        }
    
    
        /**
         *
         */
        export class AutocompleteResultPoi {
    
    
            /**
             * 省名
             */
            province: String;
    
    
            /**
             * 城市名
             */
            City: String;
    
    
            /**
             * 区县名称
             */
            district: String;
    
    
            /**
             * 街道名称
             */
            street: String;
    
    
            /**
             * 门牌号码
             */
            streetNumber: String;
    
    
            /**
             * 商户名
             */
            business: String;
    
    
        }
    
    
        /**
         *
         */
        export class AutocompleteResult {
    
    
            /**
             * 检索关键字
             */
            keyword: String;
    
    
            /**
             * 结果数组
             */
            getPoi(i: Number): AutocompleteResultPoi;
    
    
            /**
             * 结果总数
             */
            getNumPois(): Number;
    
        }
    
    
        /**
         * 创建行政区域搜索的对象实例
         */
        export class Boundary {
    
    
            /**
             * 返回行政区域的边界。 name: 查询省、直辖市、地级市、或县的名称。 callback:执行查询后，数据返回到客户端的回调函数，
             * 数据以回调函数的参数形式返回。返回结果是一个数组，数据格式如下：
             * arr[0] = "x1, y1; x2, y2; x3, y3; ..." arr[1] = "x1, y1; x2, y2; x3, y3; ..." arr[2] = "x1, y1; x2, y2; ..." …
             * 否则回调函数的参数为null
             */
            get(name: String, callback: Function): null;
    
        }
    
    
        /**
         * 创建一个坐标转换的实例
         */
        export class Convertor {
    
    
            /**
             * 对指定的点数组进行坐标转换，转换规则为从from到to，转换完成后调用callback，callback的参数为Object
             。一次最多10个点，from和to的含义请参照Web服务API
             */
            translate(points: Array<BMap.Point>, from: number, to: number, callback: Function): none;
    
        }
    
    
        /**
         *
         */
        export class TranslateResults {
    
    
            /**
             * 转换结果状态吗，参考Web服务API
             */
            status: number;
    
    
            /**
             * 转换完成的点数组，点顺序和转换前一致
             */
            points: Array<BMap.Point>;
    
    
        }
    
    
        /**
         *
         */
        export class StatusCode {
    
    
        }
    
    
        /**
         * 在给定的结点中创建全景
         */
        export class Panorama {
    
            /**
             *
             */
            constructor(container: String | HTMLElement, opts: PanoramaOptions);
    
    
            /**
             * 获取全景中道路指示信息
             */
            getLinks(): Array<PanoramaLink>;
    
    
            /**
             * 获取当前全景的id
             */
            getId(): String;
    
    
            /**
             * 获取当前全景的位置，通过经纬度描述
             */
            getPosition(): Point;
    
    
            /**
             * 获取当前全景的视角
             */
            getPov(): PanoramaPov;
    
    
            /**
             * 获取当前全景的级别
             */
            getZoom(): Number;
    
    
            /**
             * 设置全景的id
             */
            setId(id: String): none;
    
    
            /**
             * 设置全景的位置
             */
            setPosition(position: Point): none;
    
    
            /**
             * 设置全景的视角
             */
            setPov(pov: PanoramaPov): none;
    
    
            /**
             * 设置全景的级别
             */
            setZoom(zoom: Number): none;
    
    
            /**
             * 开启鼠标滚轮缩放功能。仅对PC上有效
             */
            enableScrollWheelZoom(): none;
    
    
            /**
             * 关闭鼠标滚轮缩放功能
             */
            disableScrollWheelZoom(): none;
    
    
            /**
             * 显示全景
             */
            show(): none;
    
    
            /**
             * 隐藏全景
             */
            hide(): none;
    
    
            /**
             * 全景场景内添加覆盖物
             */
            addOverlay(overlay: PanoramaLabel): none;
    
    
            /**
             * 删除全景内的覆盖物
             */
            removeOverlay(overlay: PanoramaLabel): none;
    
    
            /**
             * 获取全景的类型（室外景返回BMAP_PANORAMA_STREET_SCENE、室内景返回BMAP_PANORAMA_INDOOR_SCENE）
             */
            getSceneType(): PanoramaSceneType;
    
    
            /**
             * 设置全景可配置参数
             */
            setOptions(opts: PanoramaOptions): none;
    
    
            /**
             * 设置全景外景场景点内可见的POI类型，默认为隐藏所有类型poi
             */
            setPanoramaPOIType(): PanoramaPOIType;
    
        }
    
    
        /**
         *
         */
        export class PanoramaOptions {
    
    
            /**
             * 是否显示全景的导航控件，默认为true
             */
            navigationControl: boolean;
    
    
            /**
             * 是否显示道路指示控件。默认为true
             */
            linksControl: boolean;
    
    
            /**
             * 是否显示全景室内场景的切换控件，默认为false，仅对室内景生效
             */
            indoorSceneSwitchControl: boolean;
    
    
            /**
             * 是否显示相册控件，默认为false
             */
            albumsControl: boolean;
    
    
            /**
             * 全景相册控件配置参数
             */
            albumsControlOptions: AlbumsControlOptions;
    
    
        }
    
    
        /**
         *
         */
        export class PanoramaLink {
    
    
            /**
             * 相连全景的描述信息
             */
            description: String;
    
    
            /**
             * 相连道路的方向，正北方向为0，正东为90，正南为180，正西为270
             */
            heading: Number;
    
    
            /**
             * 相邻全景的id
             */
            id: String;
    
    
        }
    
    
        /**
         *
         */
        export class PanoramaPov {
    
    
            /**
             * 水平方向的角度，正北方向为0，正东为90，正南为180，正西为270
             */
            heading: Number;
    
    
            /**
             * 竖直方向的角度，向上最大到90度，向下最大到-90度。（在某些场景下，俯角可能无法到达最大值）
             */
            pitch: Number;
    
    
        }
    
    
        /**
         * 在创建检索全景数据信息类的实例
         */
        export class PanoramaService {
    
    
            /**
             * 根据全景id返回全景数据，当获取不到数据时，回调函数参数为null
             */
            getPanoramaById(id: String, callback: Function, data: PanoramaData): none;
    
    
            /**
             * 根据坐标及半径返回该范围内的全景数据；不设置半径参数时，默认半径为50米；当获取不到数据时，回调函数参数为null
             */
            getPanoramaByLocation(point: Point, radius: number, callback: Function, data: PanoramaData): none;
    
        }
    
    
        /**
         *
         */
        export class PanoramaData {
    
    
            /**
             * 全景id
             */
            id: String;
    
    
            /**
             * 全景的描述信息
             */
            description: String;
    
    
            /**
             * 全景相邻道路信息
             */
            links: Array<PanoramaLink>;
    
    
            /**
             * 全景的地理坐标
             */
            position: Point;
    
    
            /**
             * 全景图块信息
             */
            tiles: PanoramaTileData;
    
    
        }
    
    
        /**
         *
         */
        export class PanoramaTileData {
    
    
            /**
             * 整个全景图中心位置的方位（单位角度）
             */
            centerHeading: Number;
    
    
            /**
             * 图块展示的尺寸（单位像素），注意这个尺寸与实际的图片尺寸可能不同
             */
            tileSize: Size;
    
    
            /**
             * 整个全景图的尺寸（单位像素）
             */
            worldSize: Size;
    
    
        }
    
    
        /**
         * 构造函数，在全景中创建一个标签,content参数表示标签的文本内容，opts参数包含标签的经纬度坐标和高度
         */
        export class PanoramaLabel {
    
            /**
             *
             */
            constructor(content: String, opts: PanoramaLabelOptions);
    
    
            /**
             * 设置标签的经纬度坐标
             */
            setPosition(position: Point): none;
    
    
            /**
             * 获取标签的经纬度坐标
             */
            getPosition(): Point;
    
    
            /**
             * 获取标签与全景中心点的视角
             */
            getPov(): PanoramaPov;
    
    
            /**
             * 设置标签显示内容
             */
            setContent(content: String): none;
    
    
            /**
             * 获取标签的显示内容
             */
            getContent(): String;
    
    
            /**
             * 设置标签可见
             */
            show(): none;
    
    
            /**
             * 设置标签不可见
             */
            hide(): none;
    
    
            /**
             * 设置标签距离地面的高度
             */
            setAltitude(altitude: Number): none;
    
    
            /**
             * 获取标签距离地面的高度
             */
            getAltitude(): Number;
    
    
            /**
             * 注册事件
             */
            addEventListener(): none;
    
    
            /**
             * 移除事件
             */
            removeEventListener(): none;
    
        }
    
    
        /**
         *
         */
        export class PanoramaLabelOptions {
    
    
            /**
             * 文本标注的地理位置
             */
            position: Point;
    
    
            /**
             * 文本标注在全景场景点中距地面的高度。（javascript全景实现方式暂不支持），默认为2米
             */
            altitude: Number;
    
    
        }
    
    
        /**
         *
         */
        export class AlbumsControlOptions {
    
    
            /**
             * 相册控件的停靠位置
             */
            anchor: ControlAnchor;
    
    
            /**
             * 相册的偏移量
             */
            offset: Size;
    
    
            /**
             * 相册控件的最大宽度，可以设置总宽度百分比(例如50%) 或者像素数字（500）,默认值为100%
             */
            maxWidth: Number | String;
    
    
            /**
             * 相册内图片的高度。默认为80px。（为保证图片比例，只设置高度，宽度自如会拉宽）
             */
            imageHeight: Number;
    
    
        }
    
    
        /**
         *
         */
        export class PanoramaSceneType {
    
    
        }
    
    
        /**
         *
         */
        export class PanoramaPOIType {
    
    
        }
    }