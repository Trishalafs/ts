export namespace Discounts{

    export function calculateDiscount(category:string):number {
        switch(category.toLowerCase()){
            case 'stationary':
                return 0.05;
            case 'book':
                return 0.10;
            case 'fruit':
                return 0.15; 
            case 'diary':
                return 0.08;
            default:
                return 0;
        }
    }
    export function applyDiscount(price:number,discount:number):number{
        return price-(price*discount);
    }
}