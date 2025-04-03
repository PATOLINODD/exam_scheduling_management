
export class ConvertTo {

    public static dto(entity: any, dto: any): any {
        return ConvertTo.converting(entity, dto, 'id');
    }
    
    private static converting(entity: any, dto: any = {}, ignore: string = ''): any {
        for(const [key, value] of Object.entries(entity)){
            if(key === ignore) continue;
            if(value !== null && typeof value === 'object' && !Array.isArray(value)){
                Object.assign(dto, ConvertTo.converting(value))
            } else {
                dto[key] = value;
            }
        }
        return dto;
    }

    public static entity(dto: any, entity: any){
        return ConvertTo.converting(entity, dto);
    }
}