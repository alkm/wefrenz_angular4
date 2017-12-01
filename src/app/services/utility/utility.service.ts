export class UtilityService {
    static getPicDimension(dimension: any) {
        let width = dimension.split('x')[0];
        let height = dimension.split('x')[1];
        return {'dimension': {'width': width, 'height': height}};
    }

    static getPicPosition(position: any) {
        let x = position.split('x')[0];
        let y = position.split('x')[1];
        return {'position': {'x': x, 'y': y}};
    }
}
