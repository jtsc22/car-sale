import { Locations } from './locations.model';
import { Branches } from './branches.model';

export interface Clients {
    id: string;
    name: string;
    phone: string;
    address: string;
    locality: Locations 
    concessionaire : Branches
    active: true
}
