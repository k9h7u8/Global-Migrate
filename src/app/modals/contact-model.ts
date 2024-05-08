import { SafeResourceUrl } from "@angular/platform-browser";

export interface ContactModel {
    url?: string;
    title?: string;
    email?: string;
    phone?: number;
    date?: Date;
    contactId?: string;
    urlSafe?: SafeResourceUrl;
    mapLink?: string;
    address?: string;
}