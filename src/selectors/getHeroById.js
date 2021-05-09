import { heroes } from '../data/heroes';

export const getHeroById = ( id ) => {

    return heroes.find( hero => hero.id === id ); //apenas encuentre uno ese entrega

}
